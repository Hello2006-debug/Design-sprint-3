// frame.js: shared engine for every wonder frame. Teammates don't edit this file.
const FADE_MS = 2000;   // fade time between photos
const MAX_W = 2.2;     // the biggest a photo can be inside the mat
const MAX_H = 1.6;
const allNarrations = [];
let started = false;
const AUDIO_FADE_MS = 1200;   // how long the fade-out takes

// Smoothly change an audio's volume, then run "done" when finished
function fadeVolume(audio, to, ms, done) {
    clearInterval(audio._fadeTimer);
    const from = audio.volume;
    const start = performance.now();
    audio._fadeTimer = setInterval(() => {
        const t = Math.min(1, (performance.now() - start) / ms);
        audio.volume = from + (to - from) * t;
        if (t === 1) {
            clearInterval(audio._fadeTimer);
            if (done) done();
        }
    }, 30);
}

// Call this once per wonder, from that wonder's own file
function setupFrame({ frameId, photos, narrationFile, maxW = MAX_W, maxH = MAX_H }) {
    const frame = document.querySelector(frameId);
    const narration = narrationFile ? new Audio(narrationFile) : null;
    let currentIndex = -1;

    function swap(i) {
        const img = document.querySelector(photos[i]);
        const ratio = img.naturalWidth / img.naturalHeight;
        let w = maxW;
        let h = maxW / ratio;
        if (h > maxH) { h = maxH; w = maxH * ratio; }
        frame.setAttribute('src', photos[i]);
        frame.setAttribute('width', w);
        frame.setAttribute('height', h);
    }

    function fadeTo(value) {
        frame.setAttribute('animation__fade', {
            property: 'material.opacity', to: value, dur: FADE_MS, easing: 'easeInOutQuad'
        });
    }

    function show(i) {
        if (i === currentIndex) return;
        const isFirst = currentIndex === -1;
        currentIndex = i;
        if (isFirst) { swap(i); return; }
        fadeTo(0);
        setTimeout(() => { swap(i); fadeTo(1); }, FADE_MS);
    }

    window.addEventListener('load', () => {
        frame.setAttribute('material', 'transparent', true);
        show(0);
    });

    // Look for 2 seconds: start. Look away: pause.
    frame.addEventListener('click', () => {
        if (!started || !narration) return;
        narration.play();
        fadeVolume(narration, 1, 600);        // fade back in
    });
    frame.addEventListener('mouseleave', () => {
        if (!narration || narration.paused) return;
        fadeVolume(narration, 0, AUDIO_FADE_MS, () => narration.pause());   // fade out, then pause
    });

    if (narration) {
        allNarrations.push(narration);
        narration.addEventListener('timeupdate', () => {
            const perPhoto = narration.duration / photos.length;
            show(Math.min(photos.length - 1, Math.floor(narration.currentTime / perPhoto)));
        });
        narration.addEventListener('ended', () => {
            narration.currentTime = 0;
            show(0);
        });
    }
}

// Tap Begin: hide the start screen, turn on the cursor, unlock sound for phones
document.querySelector('#begin').addEventListener('click', () => {
    document.querySelector('#start').style.display = 'none';
    started = true;
    document.querySelector('#cursor').setAttribute('raycaster', 'enabled', true);
    allNarrations.forEach((n) => {
        n.muted = true;
        n.play()
            .then(() => { n.pause(); n.currentTime = 0; n.muted = false; })
            .catch(() => { n.muted = false; });
    });
});