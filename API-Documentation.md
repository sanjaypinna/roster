# 📘 API Documentation - Roster Talent Portfolio

This document outlines the mock API contract between the frontend and backend of the **Roster Talent Portfolio System**. These endpoints are essential for managing portfolio submissions, profile updates, and job matching workflows.

---

## ✨ Overview

The application enables talents (e.g., video editors, designers) to submit a portfolio website. The system then parses this information into a structured profile format with client projects. Jobs are matched based on profile tags.

---

## 🔁 1. Submit Portfolio URL

**Endpoint:** `POST /api/portfolio/submit`

**Purpose:** Accepts a portfolio URL and triggers the extraction process. Backend parses relevant info (name, summary, videos, etc.)

### Request:

```json
{
  "portfolioUrl": "https://sonuchoudhary.my.canva.site/portfolio"
}
```

### Response:

```json
{
  "success": true,
  "username": "sonuchoudhary",
  "message": "Data extraction started/successful"
}
```

---

## 👤 2. Get Profile By Username

**Endpoint:** `GET /api/profile/:username`

**Purpose:** Retrieve full structured profile, including name, summary, tags, and projects.

### Response:

```json
{
  "name": "Sonu Choudhary",
  "summary": "Creative editor with 5+ years experience...",
  "profileImage": "https://cdn...",
  "tags": ["video editing", "motion graphics", "content creation"],
  "employers": [
    {
      "name": "MrBeast",
      "projects": [
        {
          "video": "https://youtube.com/embed/...",
          "title": "Video Editor",
          "duration": "Jan 2022 – Dec 2022",
          "type": "Contract",
          "contribution": "Edited high-performance short form content."
        }
      ]
    }
  ]
}
```

---

## ✏️ 3. Update Basic Profile Info

**Endpoint:** `POST /api/profile/update`

**Purpose:** Update user's name, summary, or tags.

### Request:

```json
{
  "username": "sonuchoudhary",
  "name": "Sonu Choudhary",
  "summary": "Updated summary here...",
}
```

### Response:

```json
{
  "success": true
}
```

---

## 🧱 4. Update Employer Projects

**Endpoint:** `POST /api/profile/employer/update`

**Purpose:** Update project data under a specific employer (video, role, contribution).

### Request:

```json
{
  "username": "sonuchoudhary",
  "employerName": "MrBeast",
  "projectId": 1,
  "updates": {
    "title": "Lead Video Editor",
    "duration": "Feb 2022 – Dec 2022",
    "type": "Full-time",
    "contribution": "Led editing team to produce high-performing videos."
  }
}
```

### Response:

```json
{
  "success": true
}
```

---

## 💼 5. Get Matched Jobs

**Endpoint:** `GET /api/jobs/match?username=sonuchoudhary`

**Purpose:** Returns job listings scored based on tag overlap with user's profile.

### Response:

```json
[
  {
    "title": "Video Editor for YouTube Channel",
    "company": "Creative Studios",
    "tags": ["video editing", "YouTube", "final cut"],
    "matchScore": 75
  },
  {
    "title": "Motion Designer",
    "company": "Motion Inc.",
    "tags": ["motion graphics", "After Effects"],
    "matchScore": 50
  }
]
```

---

## ✅ Summary

| Feature                 | Endpoint                              | Method |
| ----------------------- | ------------------------------------- | ------ |
| Submit Portfolio URL    | `/api/portfolio/submit`               | POST   |
| Get User Profile        | `/api/profile/username`               | GET    |
| Update Basic Info       | `/api/profile/update`                 | POST   |
| Update Employer Project | `/api/profile/employer/update`        | POST   |
| Fetch Matched Jobs      | `/api/jobs/match?username={username}` | GET    |

---

