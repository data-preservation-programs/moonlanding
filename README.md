![Moonlanding graph image](public/open-graph-image.png)

# Moon Landing

A Next website that uses the Tina.io CMS for Filecoin Moonlanding.

To make changes to site content visit the staging URL admin page and login with Tina Cloud: [filecoin-moonlanding.io/admin](https://www.filecoin-moonlanding.io/admin/)



# Filecoin Green

## Overview

- This is the repository for the _Filecoin Green_ microsite
- This repo represents a static site which requires compilation, but can then be served as a static resource
- This site is hosted on IPFS and is compatible with relative URLs, for IPFS and IPNS gateway paths
- The site's resources are served statically, but internal navigation is virtualized: in other words, the site acts as an SPA when browsed on the client
- While a static site, this app can be extended at any time to a full application by changing the `target` in settings

## Installation

Node 16 or higher and `npm` or `yarn` is required.

### To install locally

- Clone this repo and navigate to its directory
- Install dependencies with `npm ci`
- Run locally with `npm run dev`

## To generate the static site

- Install with `npm ci`
- Add any environment variables to `.env`
- Generate the static site with `npm run generate`
- The build will output to a new directory `dist`