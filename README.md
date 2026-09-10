# My Website

A simple static website built with plain HTML, CSS, and JavaScript. No build step.

## Structure

```
.
├── index.html        # Home page
├── 404.html          # Not-found page (used by GitHub Pages)
├── favicon.svg       # Site icon
├── css/
│   └── style.css     # Styles
└── js/
    └── main.js       # Scripts
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then **Save**.
5. Your site will be live at `https://<username>.github.io/<repo>/` in a minute or two.

## License

See [LICENSE](LICENSE).
