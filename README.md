# Kidrove Clone — GEMA Assignment

A basic front-end clone of the [Kidrove](https://kidrove.com) website, built as part of a GEMA assignment. It replicates the look and feel of the Kidrove landing page — a platform promoting AI & Robotics summer workshops for kids aged 8–14.

> **Note:** This is a UI clone for educational/assignment purposes only and is not affiliated with or endorsed by Kidrove.

---

## What It Is

This project is a single-page React application that clones the Kidrove website's visual design and layout, featuring:

- **Navbar** — Sticky navigation with responsive hamburger menu and Gaussian blur mobile drawer
- **Hero Section** — Full-width section with an image carousel and workshop detail cards
- **Contact & FAQ Section** — A two-column layout with a contact form (name, email, phone) and an interactive FAQ accordion
- **Backend API** — A lightweight Express server (using ViteExpress Package) (`server.js`) that handles contact form submissions at `POST /api/enquiry`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v3 |
| UI Components | @material-tailwind/react |
| Backend | Express 5 + vite-express |

---

## How to Run

### Prerequisites
- Node.js (v18 or higher)
- npm

### 1. Install dependencies

```bash
npm install
```

### 2. Run the frontend dev server (Vite only)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Run with the Express backend (for form submission API)

```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The Express server uses `vite-express` to serve the Vite app in production mode alongside the API. For active development, use `npm run dev` and keep `node server.js` running separately.

### 4. Build for production

```bash
npm run build
```

---

## Folder Structure

```
GEMA_ASSIGNMENT/
├── public/                   # Static assets served as-is
├── src/
│   ├── assets/               # Images and other imported assets
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navbar with responsive hamburger menu
│   │   ├── Hero.tsx          # Hero section (carousel + workshop info)
│   │   ├── Carousel.tsx      # Image carousel (Material Tailwind)
│   │   ├── Details.tsx       # Workshop stat cards (date, mode, age, duration)
│   │   ├── ContactFaqSection.tsx  # Wrapper for the second page section
│   │   ├── ContactForm.tsx   # Contact form (name, email, phone)
│   │   └── FaqSection.tsx    # FAQ accordion with expand/collapse
│   ├── App.tsx               # Root component — composes all sections
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles and Tailwind directives
├── server.js                 # Express backend — handles POST /api/enquiry
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.ts            # Vite build configuration
├── tsconfig.app.json         # TypeScript config for the app
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

---

## API Reference

### `POST /api/enquiry`

Handles contact form submissions.

**Request body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

**Responses:**
- `200 OK` — `"Thank you! {name} We'll contact you soon."`
- `400 Bad Request` — Validation error message (name required, email/phone format)
