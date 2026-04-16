# True Path Retreat — Website

Landing page for the True Path Retreat (August 19–23, 2026, Marble Falls TX).

---

## How to Go Live (5 minutes)

### Option A — Drag & Drop (easiest)

1. Go to **[netlify.com](https://netlify.com)** and sign up for a free account
2. From your dashboard, click **"Add new site" → "Deploy manually"**
3. Drag the entire `true-path-retreat/` folder onto the upload zone
4. Done — Netlify gives you a live URL instantly (e.g. `random-name.netlify.app`)

### Option B — Deploy from GitHub (best for updates)

1. Push this folder to a GitHub repo
2. In Netlify: **"Add new site" → "Import an existing project"** → connect GitHub
3. Set **publish directory** to `.` (just a dot) — no build command needed
4. Every `git push` auto-deploys the site

---

## Connect Your Domain (www.truepathretreat.com)

1. In Netlify dashboard → **Domain settings** → **Add custom domain**
2. Enter `truepathretreat.com`
3. Netlify shows you two nameserver values (e.g. `dns1.p01.nsone.net`)
4. Log in to wherever you bought the domain → update nameservers to Netlify's values
5. Wait up to 24 hours — Netlify handles SSL (HTTPS) automatically for free

---

## View Form Submissions

1. Netlify dashboard → your site → **Forms** tab
2. All applications appear here with name, email, message, and timestamp
3. Optional: go to **Forms → Notifications** to get an email every time someone applies

---

## Add Real Photos

Open `index.html` in any text editor and search for `TO ADD`:

**Hero background photo** (search: `TO USE A REAL PHOTO`):
```html
<!-- Replace the two CSS lines with: -->
background-image: linear-gradient(...), url('hero-marble-falls-texas.jpg');
background-size: cover;
background-position: center;
```
Drop your photo file in the same `true-path-retreat/` folder.

**Facilitator headshots** (search: `TO ADD BRENT'S PHOTO` / `TO ADD ZACHARY'S PHOTO`):
```html
<!-- Replace the <div class="bio-avatar"> block with: -->
<img src="brent-mccann.jpg" alt="Brent McCann" class="bio-photo mb-6" />
```

---

## Update Copy

All text lives in `index.html`. Open it in any text editor (TextEdit, Notepad, VS Code).

Key spots to find:
- **Dates / location** → search `August 19`
- **Price** → search `3,497`
- **Email** → search `info@truepathretreat.com`
- **Facilitator bios** → search `Brent McCann` / `Zachary LaFever`

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire website — all content and structure |
| `index.css` | Visual styling — colors, fonts, spacing |
| `app.js` | Mobile nav, form submission behavior |
| `netlify.toml` | Netlify deploy settings (don't edit) |
