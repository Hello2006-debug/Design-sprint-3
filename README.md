# Design Sprint 3: Museum of Wonders

A VR museum for Google Cardboard, built with A-Frame. You stand in a quiet room facing a wall of framed wonders. Look at a frame for 2 seconds and gentle narration begins while the photos change. Look away to pause.

**Goal:** people learn about the wonders of the world in a relaxing way.

## Where to code

Each person edits only their own files. Please don't edit someone else's file.

| File or folder | What it is | Who edits it |
|----------------|-----------|--------------|
| `Melissa-index.html` | The museum page: room, walls, frames, cursor, start screen. Open this one in the browser. | Melissa |
| `taj-mahal.js` | The Taj Mahal frame: narration, photo slideshow, fade. | Melissa |
| `shannon_index.html` | Shannon's Great Wall page (to be merged into the museum) | Shannon |
| `wonders-jeremiah.html` | Jeremiah's Colosseum page (to be merged into the museum) | Jeremiah |
| `images/` | All photos. Name them like `taj_mahal_1.jpg`. Keep each under about 1-2 MB. | Everyone |
| `audio/` | All narration and sound, like `taj_mahal_narration.mp3`. | Everyone |

## Frame slots on the front wall

Each wonder has a fixed spot so the frames line up (front wall is at z = -4).

| Slot | x position | Wonder | Person |
|------|-----------|--------|--------|
| 1 | -3 | Great Wall of China | Shannon |
| 2 | 0 | Taj Mahal | Melissa |
| 3 | 3 | Colosseum | Jeremiah |

## Every time you work

1. `git pull` (always first, to get everyone's latest changes)
2. Edit only your own files
3. `git add .`
4. `git commit -m "Say what you changed"`
5. `git push`

If your push is rejected, run `git pull` and then `git push` again.

## Running it on your computer

Opening the page by double-clicking can block images and sound, so run a small local server in this folder:

```
python -m http.server 8000
```

(If that doesn't work, try `python3` instead of `python`.) Then open http://localhost:8000/Melissa-index.html. Drag with the mouse to look around, and hold the little dot on a picture for 2 seconds.

## Credits

Add a line for every photo and sound you use, under your own name: the file name, the author, the link, and the license.

### Melissa (Taj Mahal)

Photos, all from Unsplash under the Unsplash License:

- `taj_mahal_1.jpg`: Photo by Jovyn Chamb on Unsplash, https://unsplash.com/photos/iWMfiInivp4
- `taj_mahal_2.jpg`: Photo by Shifan Hassan on Unsplash, https://unsplash.com/photos/dCjcGh38WAc
- `taj_mahal_3.jpg`: Photo by Kotryna Juskaite on Unsplash, https://unsplash.com/photos/2eAGSipgb8A
- `taj_mahal_4.jpg`: Photo by Sylwia Bartyzel on Unsplash, https://unsplash.com/photos/eU4pipU_8HA
- `christ_redeemer_1.jpg`: Photo by Alan Aprilio on Unsplash, https://unsplash.com/photos/zUJFq4YOYIQ
- `christ_redeemer_2.jpg`: Photo by Effie Kimble on Unsplash, https://unsplash.com/photos/aMBnG1e9kiE
- `christ_redeemer_3.jpg`: Photo by Fernando Santos on Unsplash, https://unsplash.com/photos/0jcM54HBO4c
- `christ_redeemer_4.jpg`: Photo by Gustavo Nacht on Unsplash, https://unsplash.com/photos/aUXsL7rDOcw
- `petra_1.jpg`: Photo by Aleksei Filimonov on Unsplash, https://unsplash.com/photos/ancient-petra-treasury-carved-into-sandstone-cliff-face-Ak7CSzNUVKA
- `petra_2.jpg`: Photo by Alex Vasey on Unsplash, https://unsplash.com/photos/treasury-in-petra-sandstone-canyon-5_Bu25SV6X8
- `petra_3.jpg`: Photo by Filippo Cesarini on Unsplash, https://unsplash.com/photos/brown-concrete-building-during-daytime-c8F1hJ_UTrk
- `petra_4.jpg`: Photo by Juanma Clemente-Alloza on Unsplash, https://unsplash.com/photos/brown-camel-in-front-of-brown-rock-formation-during-daytime-py8omnp-hko

Narration: script written by Melissa, generated with the SubtitleKit text-to-speech tool (https://subtitlekit.com/en/text-to-speech/). Facts checked against Britannica and History Hit.


### Shannon (Great Wall of China)

### Jeremiah (Colosseum)
