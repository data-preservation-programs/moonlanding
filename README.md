# Moon Landing
 
![Moonlanding graph image](public/open-graph-image.png)


## Overview

- This is the repository for the _Moon Landing_ microsite
- This is a Next JS website that uses the Tina.io CMS for Filecoin Moonlanding
- This site is hosted on IPFS
- The site's resources are served statically, but internal navigation is virtualized: in other words, the site acts as an SPA when browsed on the client

## Content management
- To make changes to site content visit the staging URL admin page and login with Tina Cloud at [filecoin-moonlanding.io/admin](https://www.filecoin-moonlanding.io/admin/)
- Making edits in this interface commits them directly to the `main` branch, which builds into production

## Installation

Node 16 or higher and `npm` or `yarn` is required.

### Running locally

- Clone this repo and navigate to its directory
- Install dependencies with `npm ci`
- Run locally with `npm run dev`

### Static site
- Install with `npm ci`
- Add any environment variables to `.env`
- Generate the static site with `npm run export`
- The build will output to a new directory `out`

### Testing
- The site may be tested with `npm run lint` which invokes Next's linter

### Environment variables
- For the production site, the following envs are required to work correctly with Tina
  - `TINA_CLOUD_CLIENT_ID`
  - `TINA_CLOUD_TOKEN`
- These should not be exposed in this readme and must be set as secrets
