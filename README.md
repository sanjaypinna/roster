# Roster Portfolio Management UI

This project is a portfolio management UI built with **Next.js** and **TypeScript**, allowing creative talents to submit external portfolios and manage structured data like video projects and work experiences. It also includes a **Job Match** feature to recommend roles based on skill tags.

## ✨ Features

### 1. **Portfolio Submission and Extraction**

* Talent can submit a link to an external portfolio.
* Mock API simulates extraction of structured data from the portfolio (name, summary, clients, videos).

### 2. **Profile Page**

* Shows Basic Info (name, summary) and Employers/Clients.
* Each client has related video projects.
* Each video supports:
  * Job Title
  * Duration
  * Employment Type (Full-time / Contract)
  * Contribution Description
* Video metadata can be edited in a responsive modal.

### 3. **Job Matching**

* New `/profile/[username]/match` page.
* Fetches mock jobs and scores them against the profile based on overlapping tags.
* Scores are bucketed (100%, 75%, 50%, 25%) and styled with contextual colors.

## 📚 Tech Stack

* React + Next.js
* TypeScript
* TailwindCSS
* Zustand (for state management in profile)

## 📝 Component Structure

* `pages/index.tsx` - Portfolio submission form
* `pages/profile/[username].tsx` - Main profile page
* `pages/profile/[username]/match.tsx` - Job match UI
* `lib/fakeApi.ts` - Mock data generation (profiles, jobs)

## ⚖️ State Management

* Local state used for modal interactions
* Profile-level state managed through Zustand

## ✈️ Scalability Ideas

* Future: pagination/lazy loading for video-heavy profiles

## 🪡 AI Use

* Used **Windsurf** to speed up component scaffolding and styling
* Logic, interactivity, and data wiring were done manually

## 📲 Demo Instructions

1. Clone the repo
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`

## 🌟 Bonus

* Responsive modal with editable video data
* Real-time match scoring UI
* Flexible enough to support multiple portfolio types

---


