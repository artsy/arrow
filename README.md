# Arrow

The [arrow of time](https://en.wikipedia.org/wiki/Entropy_(arrow_of_time)), Artsy edition.

This 2020 Hackathon project implements a web-published timeline and a CMS for documenting milestones in Artsy's history.

![main](https://user-images.githubusercontent.com/140521/72076810-2a20e880-32c4-11ea-91a3-810fc62e5d98.gif)

The major pieces:

- A [NextJS](https://nextjs.org) project, with support for Typescript and Palette
- A [Netlify](https://www.netlify.com) deployment for the static site generated from the NextJS project
- A [NetlifyCMS](https://www.netlifycms.org) configuration that allows editors to update this repo (and trigger a new static site deploy on each push to main)
- Data, seeded originally from [the document created in 2019](https://docs.google.com/document/d/1dM_AqU21Mo6gE05G398dEtE0SzGTM7r7pAo07w2UMSQ/edit), and now managed via the CMS

## Meta

* __State:__ hackathon
* __Static site:__
  - [Main view][static_site_deployment]
  - [Slideshow view][static_site_slideshow]
* __Admin:__
  - [Netlify CMS][netlify_cms]
  - [Netlify admin][netlify_admin]
* __Deployment:__
  - Every push to `main`, whether via GitHub or NetlifyCMS, results in a new deployment of the static files to the [website][static_site_deployment], which is currently associated with [@anandaroop][anandaroop]'s Netlify account.
* __Point People:__ [@anandaroop][anandaroop]

## Getting started

Clone and install

```
git clone git@github.com:artsy/arrow.git
cd arrow
yarn install
```

Compile individual CMS-managed files in `_entries/*`
into a single JSON file at `data/entriesList.json`

```
yarn data
```

Start the NextJS dev server

```
yarn dev
```

You should now have a hot-reloading NextJS dev server running at http://localhost:3000/

The project is laid out as follows. The `pages` and `components` directories are where most of the action is:

```sh
.
├── _entries   # content directory, managed via NetlifyCMS
├── data       # derived from content files, with `yarn data`
├── pages      # NextJS page components
├── components # regular React components
├── public     # static files
│   └── admin  # static files for NetlifyCMS UI
└── scripts    # custom scripts for e.g. data munging
```

## Contributing

- **Developers**: Fork and PR as usual, even the CMS-managed data files under `_entries`. Merges to `main` will result in a deployment.
- **Editors**: Use the [CMS][netlify_cms]. A signup with Netlify Identity may be required.

[static_site_deployment]: https://artsy-timeline.netlify.com
[static_site_slideshow]: https://artsy-timeline.netlify.com/slideshow
[netlify_cms]: https://artsy-timeline.netlify.com/admin/#/
[netlify_admin]: https://app.netlify.com/sites/artsy-timeline/overview
[anandaroop]: https://github.com/anandaroop
