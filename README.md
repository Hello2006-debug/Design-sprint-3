# Design Sprint 3: Wonder Museum

A VR museum for Google Cardboard, built with A-Frame. The viewer looks around a museum room, and when they look at a picture of a wonder, narration and a photo slideshow of that wonder begin.

**Goal:** (we'll write the final version of this together later)

## Where to code

Each person edits only their own files. Please don't edit someone else's file.

| File or folder | What it is | Who edits it |
|----------------|-----------|--------------|
| `index.html` | The museum page. This is the one you open in the browser. | Melissa |
| `museum.js` | The shared code that builds the room and plays the narration and slideshow. | Melissa |
| `wonders-shannon.js` | Shannon's wonders: names, photo file names, and audio file names. | Shannon |
| `wonders-melissa.js` | Melissa's wonders. | Melissa |
| `wonders-jeremiah.js` | Jeremiah's wonders. | Jeremiah |
| `images/` | All photos. Name them like `colosseum-1.jpg`, `colosseum-2.jpg`. Keep each under about 1-2 MB. | Everyone |
| `audio/` | All narration and sound. Name them like `colosseum-narration.mp3`. | Everyone |

## Wonders claimed

| Wonder | Person | Status |
|--------|--------|--------|
| Great Wall of China | Shannon | Started |
| Taj Mahal | Melissa | Started |
| Colosseum | Jeremiah | Started |
| (second wonder) | Shannon | Not claimed yet |
| (second wonder) | Melissa | Not claimed yet |
| (second wonder) | Jeremiah | Not claimed yet |

When you pick a wonder, edit only your own row. Status can be: Not started, Photos found, Narration recorded, Done.

## Every time you work

1. `git pull` (always first, to get everyone's latest changes)
2. Edit only your own files
3. `git add .`
4. `git commit -m "Say what you changed"`
5. `git push`

If your push is rejected, run `git pull` and then `git push` again.

## Running it on your computer

Opening `index.html` by double-clicking can block images and sound, so run a small local server in this folder:

```
python -m http.server 8000
```

(If that doesn't work, try `python3` instead of `python`.) Then open http://localhost:8000 in your browser.

## Credits

Add a line for every photo and sound you use, under your own name. Include the file name, the author, the link, and the license. Only use photos and sounds whose license allows reuse (Wikimedia Commons lists this on each file's page).

### Shannon (Great Wall of China)

### Melissa (Taj Mahal)

### Jeremiah (Colosseum)