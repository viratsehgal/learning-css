/* The catalogue. Add a work by appending an object here — the contents page,
   the entries and the index at the back are all generated from this list.
   Fields: numeral, folio (page number), title, subtitle, date, body[],
   notes[], materials[], imprint{path, run}, index[] (terms for the back index). */

const WORKS = [
  {
    numeral: "I",
    folio: 3,
    slug: "retracting-steel-tape",
    title: "Retracting Steel Tape",
    subtitle: "A tape measure, drawn frame by frame",
    date: "15 August 2026",
    body: [
      "A single canvas holds one object: a steel tape measure — yellow blade, black case — sitting at the centre of the screen and turning slowly on its own axis. Drag anywhere to pull the blade out of the mouth of the case; let go and it snaps back the way the real thing does, fast and then settling.",
      "The interesting part is the ruler. Graduations are computed rather than drawn from an image: pixels-per-inch is derived from the viewport at resize time, and the code then decides how fine to draw the imperial divisions — down to sixteenths — how fine to draw the metric ones, and how often to label the centimetres, so the blade stays legible at any size. Both scales run along the same strip of steel, imperial above, metric below.",
      { kind: "Post", href: "https://x.com/ViratSehgal__/status/2088433456640577770", label: "x.com — the component, in motion" }
    ],
    notes: [
      "Drag to extend, release to retract.",
      "Ticks thin out gracefully as the blade shortens on screen.",
      "Device-pixel-ratio aware; the whole tool redraws on resize.",
      "About 880 lines of canvas drawing. No libraries."
    ],
    materials: ["Canvas 2D", "Vanilla JavaScript", "requestAnimationFrame"],
    links: [
      { kind: "Live", href: "https://retracting-steel-tape.vercel.app/", label: "retracting-steel-tape.vercel.app" }
    ],
    imprint: { path: "~/retracting-steel-tape", run: "open index.html" },
    index: ["Canvas 2D", "Animation", "Vanilla JavaScript"]
  },

  {
    numeral: "II",
    folio: 11,
    slug: "back-gesture",
    title: "Back Gesture",
    subtitle: "A system-wide back button for iPhone, without a jailbreak",
    date: "26 August 2026",
    body: [
      "There is no universal back button on iOS, and no app is allowed to add one. So this one does the next best thing, and is candid about it: it walks you through building the gesture yourself out of AssistiveTouch’s custom actions — open Settings, turn on AssistiveTouch, record a left-edge swipe, assign it to a trigger — six steps, each on its own card.",
      "Then it hands you somewhere to practise. A small mock file browser — folders, screenshots, downloads, an invoice, a grocery list — lets you navigate in and swipe your way back out until the motion is muscle memory. Two closing sections state plainly what actually works and what isn’t possible without a jailbreak, which is the part most tutorials leave out. Added to the home screen it runs standalone, with a manifest, an icon set and a service worker that caches the whole thing for offline use.",
      { kind: "Post", href: "https://x.com/ViratSehgal__/status/2092701304321982695", label: "x.com — the gesture, demonstrated" }
    ],
    notes: [
      "Step-by-step AssistiveTouch walkthrough.",
      "A practice surface: navigate in, swipe back out.",
      "Installable as a progressive web app; works offline.",
      "An honest “what isn’t possible” section."
    ],
    materials: ["Progressive Web App", "Service Worker", "Web App Manifest", "Vanilla JavaScript"],
    links: [
      { kind: "Live", href: "https://universal-back-button-for-iphone.vercel.app/", label: "universal-back-button-for-iphone.vercel.app" }
    ],
    imprint: { path: "Engineering/universal back button for iphone", run: "python3 -m http.server 8000" },
    index: ["Progressive Web App", "Service workers", "iOS", "Vanilla JavaScript"]
  },

  {
    numeral: "III",
    folio: 19,
    slug: "rgb-light-controller",
    title: "RGB Light Controller",
    subtitle: "Philips WiZ bulbs, tuned to the album art",
    date: "27 August 2026",
    body: [
      "The server polls Spotify for what is playing, pulls the album art the moment the track changes, extracts its most vibrant colour, and pushes that colour to every configured bulb over UDP — WiZ’s setPilot command, port 38899. Because the lights are addressed directly on the local network, the app has to run on a machine on the same Wi-Fi as the lights. There is no cloud anywhere in the path.",
      "Setup is the honest kind. Create a Spotify app, add the loopback redirect URI — Spotify no longer accepts plain localhost, only the explicit 127.0.0.1 — authorise once, then add each light by name and IP address, with a Test button that flashes it white so you can confirm you have the right one. Tokens and saved lights live in a gitignored config file on disk; nothing leaves the machine."
    ],
    notes: [
      "Colour extraction by node-vibrant, straight from the cover image.",
      "Lights are spoken to over UDP, on your own network.",
      "Test flashes a bulb white to confirm its address.",
      "YouTube Music isn’t supported — there is no public “now playing” API for it."
    ],
    materials: ["Node.js", "Spotify Web API", "WiZ over UDP", "node-vibrant"],
    links: [
      { kind: "Post", href: "https://x.com/ViratSehgal__/status/2093100593418248644", label: "x.com — the lights running to the album art" }
    ],
    imprint: { path: "Engineering/rgb-light-controller", run: "npm install && npm start" },
    index: ["Node.js", "Spotify Web API", "UDP", "Colour extraction", "Smart lighting"]
  },

  {
    numeral: "IV",
    folio: 27,
    slug: "chopsticks",
    title: "Chopsticks",
    subtitle: "The playground hand game, with the rules written down",
    date: "28 August 2026",
    body: [
      "Everybody plays chopsticks slightly differently, which is exactly what makes it worth building: the arguments are all about the rules. Each player starts with one finger up on each hand. Tap one of your live hands, then an opponent’s, to add yours to theirs; a hand that lands on exactly five is dead. Instead of attacking you may split, redistributing between your own two hands. The last player with a hand still alive wins.",
      "So the house rules are settings rather than disputes. Rollover — does six become one, or die? Splitting on or off. Whether a split may revive a dead hand. Changing any of them starts a fresh game, and the whole rulebook sits in a panel on the same screen. A confirm step means a mis-tap never costs you the round.",
      { kind: "Post", href: "https://x.com/ViratSehgal__/status/2093407773879160902", label: "x.com — a round, played out" }
    ],
    notes: [
      "Two modes; turn indicator; play again without a reload.",
      "Three rule variants, each toggleable mid-session.",
      "Tap-to-select with a confirm step before the move lands.",
      "About 1,100 lines across three files."
    ],
    materials: ["Vanilla JavaScript", "CSS"],
    links: [
      { kind: "Live", href: "https://chopstick-hand-game.vercel.app/", label: "chopstick-hand-game.vercel.app" }
    ],
    imprint: { path: "Engineering/chopstick-hand-game", run: "open index.html" },
    index: ["Game", "Vanilla JavaScript", "CSS"]
  },

  {
    numeral: "V",
    folio: 37,
    slug: "centsible",
    title: "Centsible",
    subtitle: "A finance manager that opens your bank’s own export",
    date: "29–30 August 2026",
    body: [
      "Four screens: dashboard, transactions, budgets, recurring bills. The dashboard carries summary cards, a category breakdown, a spending trend and a list of bills about to come due. Budgets track against real spend as it lands. Recurring bills know what is monthly and what is annual, and the date arithmetic is done properly rather than by adding thirty days.",
      "Transactions arrive by import: point it at a CSV or XLSX export from your bank and a mapping step matches their column names to the app’s fields, so the format of the file is not your problem. Underneath it is React 19 on Vite with TypeScript throughout, Zustand holding the store, Recharts drawing, date-fns counting and Tailwind on the surface. Everything stays in the browser — the app never asks for a bank login.",
      { kind: "Post", href: "https://x.com/ViratSehgal__/status/2093793365922132375", label: "x.com — a walk through the app" }
    ],
    notes: [
      "CSV and XLSX import with a column-mapping step.",
      "Category pie, spending trend, upcoming bills.",
      "Budget progress tracked against live spend.",
      "Sidebar on the desktop, a nav bar on the phone."
    ],
    materials: ["React 19", "TypeScript", "Vite", "Zustand", "Recharts", "Tailwind CSS"],
    links: [
      { kind: "Live", href: "https://personel-finance-manager.vercel.app/", label: "personel-finance-manager.vercel.app" }
    ],
    imprint: { path: "Engineering/personel-finance-manager", run: "npm install && npm run dev" },
    index: ["React", "TypeScript", "Vite", "Zustand", "Recharts", "Tailwind CSS", "CSV and XLSX import"]
  },

  {
    numeral: "VI",
    folio: 47,
    slug: "harmonic-bench",
    title: "Harmonic Bench",
    subtitle: "Additive synthesis you can see",
    date: "1–3 September 2026",
    body: [
      "Eight harmonics, one bar each. Drag across the bars and the resultant wave redraws underneath — the sum of the partials, two cycles of it, labelled with its period in milliseconds. Press a key from C3 to C4 and you hear precisely the shape on screen; switch on Drone and you can keep sculpting while it sounds. There are attack and release sliders, an octave switch, presets for the classic waveforms, and a normalise toggle to stop the sum from clipping.",
      "The page is a single file — a little over two thousand lines of HTML, CSS and JavaScript, with nothing pulled in but the typefaces — and it dresses itself twice. Light is engineering graph paper; dark is a blueprint. The eight partials are drawn on one ordinal colour ramp running strongest to faintest, with the resultant wave as the only warm thing on the page, so the sum always reads as the answer rather than a ninth voice."
    ],
    notes: [
      "Drag across the amplitude bars to shape the tone.",
      "Resultant waveform redrawn live, with its period in milliseconds.",
      "Attack and release envelope; drone mode for continuous editing.",
      "Graph paper by day, blueprint by night."
    ],
    materials: ["Web Audio API", "SVG", "Single-file HTML"],
    links: [
      { kind: "Live", href: "https://sine-cosine-sound-creator.vercel.app/", label: "sine-cosine-sound-creator.vercel.app" }
    ],
    imprint: { path: "Engineering/sine:cosine-sound-creator", run: "open index.html" },
    index: ["Web Audio API", "Additive synthesis", "SVG", "Single-file HTML"]
  },

  {
    numeral: "VII",
    folio: 57,
    slug: "helmets-and-808s",
    title: "Helmets & 808s",
    subtitle: "A sixteen-pad sampler, two banks deep",
    date: "4 September 2026",
    body: [
      "An SP-16 in the browser: sixteen pads over two banks, A hazy psych trap and B filtered french house, with tempo and master controls, per-pad loops, a running loop count and a stop-all that means it. The transport reads STANDBY until something is actually sounding, so the pad tells you the truth about its own state.",
      "It is built to be played rather than clicked. The arrow keys move focus around the grid, Enter fires the focused pad and the whole instrument is reachable from the keyboard, which is the difference between a demo and something you can perform on. One file, about eight hundred lines, Web Audio all the way down, light and dark."
    ],
    notes: [
      "Two banks of eight, switchable while playing.",
      "Per-pad looping with a live loop counter.",
      "Fully keyboard-playable: arrows to focus, Enter to fire.",
      "Tempo and master level; one stop for everything."
    ],
    materials: ["Web Audio API", "Vanilla JavaScript", "Single-file HTML"],
    links: [
      { kind: "Live", href: "https://soundpad.vercel.app/", label: "soundpad.vercel.app" }
    ],
    imprint: { path: "Engineering/soundpad", run: "open index.html" },
    index: ["Web Audio API", "Sampler", "Keyboard interaction", "Single-file HTML"]
  },

  {
    numeral: "VIII",
    folio: 67,
    slug: "centrefield",
    title: "Centrefield",
    subtitle: "A mix controlled by where your pointer is",
    date: "5 September 2026",
    body: [
      "The centre of the tracked field is the focus point: everything is loudest there and fades to silence at the edges. Each frame the pointer’s distance from the centre is normalised against the distance to the corner and shaped by a falloff exponent, and that single number drives the lot — master gain, the cutoff of a six-oscillator drone, the stereo pan, and the volume of every YouTube layer pasted into the panel. Cross onto the panel or leave the window and the mix cuts in about thirty-six milliseconds: short enough to read as instant, long enough not to click.",
      "The field is drawn as a halftone whose dot radius is the volume at that spot, printed in multiply over a paper ground — ink contours, crop marks at the corners of the tracked area, and a violet disc on the focus point that swells as the mix opens up. Past the trimmed edge the sheet carries on as dead single-pixel dots. Three static files, a handwritten face, and glass panels floating over the page."
    ],
    notes: [
      "Paste any YouTube link; each becomes a layer with its own level.",
      "A built-in drone: six oscillators, detune LFOs, filter and panner.",
      "Off the field is silence — the cut is immediate, not throttled.",
      "Tracks and field settings persist between visits."
    ],
    materials: ["Web Audio API", "YouTube IFrame API", "Canvas 2D", "localStorage"],
    links: [
      { kind: "Live", href: "https://mouse-tracking-sound.vercel.app/", label: "mouse-tracking-sound.vercel.app" }
    ],
    imprint: { path: "~/mouse-tracking-sound", run: "python3 -m http.server 8123" },
    index: ["Web Audio API", "YouTube IFrame API", "Canvas 2D", "Halftone", "localStorage"]
  },

  {
    numeral: "IX",
    folio: 77,
    slug: "github-profile-finder",
    title: "GitHub Profile Finder",
    subtitle: "A profile, rendered as a twenty-four second film",
    date: "6 September 2026",
    body: [
      "Search any GitHub user and the app builds them a square, twenty-four second video with an original soundtrack. Four scenes: a welcome card with the avatar and how long they have been on GitHub, their five most-starred repositories ranked with a quip each, the languages they have actually been writing lately as animated bars, and a sign-off with the total star count. Rendered by Remotion at 1080 by 1080, H.264 and AAC.",
      "Scene lengths are chosen so every cut lands exactly on a musical bar — two seconds at 120 BPM — and one timeline module is the single source of truth that both the video and the soundtrack import, so the two cannot drift apart. The music is synthesised rather than sampled: oscillators, ADSR envelopes, a ping-pong delay, a one-pole filter and a WAV encoder, written from scratch in plain JavaScript with no Web Audio and no dependencies. Without Node, a small Python server still serves the finder as a static site; the video feature notices there is no backend and quietly hides itself."
    ],
    notes: [
      "Four scenes, cut to the bar, from one shared timeline.",
      "The soundtrack is generated by a synthesiser written for the job.",
      "A GitHub token, if given, stays on the server behind an allow-listed proxy.",
      "Degrades to a plain static profile finder with no backend at all."
    ],
    materials: ["Node.js", "Remotion", "GitHub API", "A hand-written synth", "Docker"],
    links: [
      { kind: "Live", href: "https://github-profile-finder-hazel.vercel.app/", label: "github-profile-finder-hazel.vercel.app" }
    ],
    imprint: { path: "Engineering/github-profile-finder", run: "npm install && npm start" },
    index: ["Node.js", "Remotion", "GitHub API", "Software synthesis", "Video rendering", "Docker"]
  }
];
