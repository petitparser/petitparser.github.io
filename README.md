# PetitParser Website

Website of [petitparser.github.io](https://petitparser.github.io/), hosted on [GitHub Pages](https://pages.github.com/).

### Local Development

#### 1. Start Jekyll Development Server

Ensure Jekyll's gem bin directory is on your `PATH`:

```bash
export PATH="$(gem env | awk -F': ' '/EXECUTABLE DIRECTORY/{print $2}'):$PATH"
```

Start the local server with auto-regeneration and live reloading:

```bash
jekyll serve --livereload
```

Open [http://localhost:4000/](http://localhost:4000/) in your browser.

#### 2. Alternative: Build and Serve with Python

```bash
jekyll build
python3 -m http.server 4000 --directory _site
```

#### 3. Alternative: Run via Docker

```bash
docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll jekyll serve
```
