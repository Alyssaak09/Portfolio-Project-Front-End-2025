# Portfolio Project Front-End (2025)

This is the front-end portfolio site built with **React**. It consumes the REST API I created in Assignment 1 to dynamically display data for my projects and skills.

---

## What I Did

- Built the front-end entirely in **React**
- Used **Axios** to fetch data from my backend API
- Created a structured layout for a professional portfolio
- Displayed data dynamically from `about` and `projects` collections
- Created a contact section with my information
- Fully styled and made responsive using a custom CSS approach
- Deployed the site online 

---

## Live Site

- Frontend URL: (https://portfolio-project-front-end-2025.vercel.app/)

---

## Tech Stack

- React.js (with Vite )
- Axios (for API requests)
- CSS (custom + framework)
- Deployed using Vercel

---

## Data Consumed From Backend API

| API Endpoint         | Data Used           |
|----------------------|---------------------|
| `/api/about`         |   Description       |
| `/api/projects`      |   Project listings  |
| `/api/contacts`      |   Messaging         |

---

## Sections of the Site

### About Me
- Name: [Alyssa]
- Role: [Full Stack Developer]

### Projects
- Pulled dynamically from `/api/projects`
- Each includes:
  - Project name
  - Screenshot/image
  - Short description
  - Technologies used
  - Live URL 

### Contact
- Contact form 

---

## Testing & Deployment

- Site fetches data from live backend
- API tested and verified working with deployed frontend
- CORS configured correctly on backend

---

## Notes

- All data stored and managed via MongoDB Atlas
- Admin pages used only for content management — this site is public-facing
- Designed for mobile and desktop use
