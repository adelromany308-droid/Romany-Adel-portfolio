# Romany Adel — React & Node.js Portfolio

A full-stack personal portfolio built with React, Vite, and a Node.js API. The browser loads portfolio data from the backend endpoint, with local fallback data so the page remains readable if the API is unavailable.

## Stack

- React and Vite for the client
- Node.js and Express for local API development
- Vercel Functions for the deployed API
- Shared data module for profile, skills, experience, and project content

## API

- GET /api/portfolio — profile and portfolio content
- GET /api/health — backend health status

## Run locally

Requires Node.js 18 or newer.

~~~bash
npm install
npm run dev
~~~

Open http://localhost:5173. Vite serves the React app and proxies API requests to the local Express server on port 4000.

To build and serve the production bundle locally:

~~~bash
npm run build
npm start
~~~

## Deploy

Import this repository into Vercel. Vercel builds the Vite frontend and deploys the functions in the api directory.

The root **romany-photo.png** is the profile image used by the React app.
