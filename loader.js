// loader.js: shows a filling ring around the cursor while you look at a frame
const cursor = document.querySelector('#cursor');
const loader = document.querySelector('#loader');
const fill = document.querySelector('#loader_fill');

// You started looking at a frame: show the ring and start filling it
cursor.addEventListener('fusing', () => {
    loader.setAttribute('visible', true);
    fill.emit('loader-start');
});

// You looked away, or it finished and the audio started: hide it
function hideLoader() {
    loader.setAttribute('visible', false);
    fill.emit('loader-stop');
}
cursor.addEventListener('mouseleave', hideLoader);
cursor.addEventListener('click', hideLoader);