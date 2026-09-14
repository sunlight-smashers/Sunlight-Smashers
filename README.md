# Sunlight Smashers Badminton Academy

A responsive, static website for badminton coaching in Melbourne’s western suburbs. It uses the academy’s supplied logo, photos, coaching video, brochure, coach profile and student checklist. No installation or build is required.

## Host on GitHub Pages

1. Create a public GitHub repository named `sunlight-smashers` (or any name you prefer).
2. Extract this ZIP. Upload **the contents of the `sunlight-smashers` folder** to the repository, so `index.html`, `styles.css`, `script.js`, `assets/` and `downloads/` are at the repository root. Do not upload the ZIP itself.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch **main**, folder **/(root)**, then **Save**.
6. When deployment finishes, GitHub displays the website URL in Settings → Pages. A project repository usually uses `https://YOUR-USERNAME.github.io/sunlight-smashers/`.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

All assets use relative paths, so the website also works under a repository subdirectory. `.nojekyll` is included for static publishing. If you upload through a browser and omit that hidden file, this plain HTML site still works.

## Preview on your computer

Open `index.html` in your browser, or serve the folder with:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Update the website

- Text, session times, dates, phone, links and email: edit `index.html`.
- Colours, fonts, spacing and layout: edit `styles.css`.
- Menu and enquiry email behaviour: edit `script.js`.
- Photos and video: replace the relevant file in `assets/`, keeping the filename, or update the HTML reference.
- Downloadable information: replace PDFs in `downloads/`.

Commit edits to `main` to update GitHub Pages.

## Content used

- Friday junior coaching: 7:00–8:00 PM, ages 7–18, Eagle Stadium, Werribee.
- Saturday women’s coaching: **6:30–7:30 PM**, Eagle Stadium. This uses the latest time supplied in conversation, rather than the older attached posters.
- Tuesday and Thursday adult socials: 8:00–9:30 PM, ACM Sports, Point Cook; intermediate and advanced players, men and women welcome.
- Kiran’s BA and BWF Level-1 certifications and coaching since 2022 are taken from the supplied coach profile.
- Primary academy contact: 0405 441 224 and sunlightsmashers@gmail.com, as supplied on coaching posters and in the holiday course details. The downloadable older student checklist has a different coach phone number (0481 087 595).
- Fees and bookings are confirmed by the academy; no unverified prices or testimonials have been added.

## Enquiries

The form prepares an email using the visitor’s email application. Visitors must send that email themselves. It does not submit a booking, process payments or store personal details. Direct call, email and WhatsApp enquiry links are also included. For a server-backed form in future, connect a form service and update the privacy wording to match its operation.

The site includes no analytics, tracking scripts, external fonts or automatic video playback. Opening directions or WhatsApp takes the visitor to those external services.

## Reference links

The website includes the supplied Wyndham City directory, Facebook share link and Superprof coaching profile, opening in new tabs. Text on navy backgrounds now has explicit white, pale blue or gold colours to preserve readability in embedded previews.

## Latest updates

The temporary September–October holiday course section and enquiry option have been removed. The supplied new coach portrait is used in the coach section, and the full-length coach photo is included in the court gallery.

The photo extracted from the latest coach profile PDF is now displayed beneath Kiran’s profile text and profile link.

Removed the separate coach portrait with the “Your coach. Your corner.” label. The photo beneath the coach profile remains.
