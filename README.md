<div align="center">

# 🦷 Dentwise

Dental platform with booking, subscriptions, admin dashboard, and an AI Voice Agent.

<p>
  <a href="https://nextjs.org/" target="_blank"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" /></a>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss" />
  <img alt="Prisma" src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-Neon-4169E1?logo=postgresql" />
  <img alt="Clerk" src="https://img.shields.io/badge/Auth-Clerk-3B82F6" />
  <img alt="Vapi" src="https://img.shields.io/badge/AI%20Voice-Vapi-6D28D9" />
</p>

</div>

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots (Story of App)](#screenshots-story-of-app)
- [Run the App](#run-the-app)
- [Acknowledgements](#acknowledgements)

---

## Features

- ✅ Modern Landing Page with gradients & images
- ✅ Authentication via Clerk (Google, GitHub, Email & Password)
- ✅ Email Verification (6-digit code)
- ✅ Appointment Booking System
- ✅ 3-Step Booking Flow (Dentist → Service & Time → Confirm)
- ✅ Email Notifications for Bookings (Resend)
- ✅ Admin Dashboard for Managing Appointments
- ✅ AI Voice Agent powered by Vapi (Pro Plans only)
- ✅ Subscription Payments with Clerk (Free + 2 Paid Plans)
- ✅ Automatic Invoices via Email
- ✅ Smart Subscription Upgrades (pay only the difference)
- ✅ PostgreSQL for Data Persistence
- ✅ Styling with Tailwind CSS + Shadcn
- ✅ Data Fetching with TanStack Query
- ✅ Git & GitHub Workflow (branches, PRs, merges)
- ✅ Dark theme and Light theme
- ✅ Internationalization (English and Arabic)
- ✅ Deployment on Vercel

---

## Tech Stack

- **Framework**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, next-themes
- **Auth & Users**: Clerk
- **Database**: PostgreSQL (Neon) + Prisma ORM
- **Data Fetching**: TanStack Query
- **Email**: Resend
- **AI Voice**: Vapi

---

## Screenshots (Story Of App)

<details>
  <summary><strong>Landing – Hero</strong></summary>

  - Green theme: ![Green Hero](/storyOfApp/grhero.jpg)
  - Dark theme: ![Dark Hero](/storyOfApp/darkhero.jpg)
  - Arabic hero: ![Arabic Hero](/storyOfApp/argrhero.jpg)
</details>

<details>
  <summary><strong>How It Works</strong></summary>

  - English Green: ![HIW English Green](/storyOfApp/engrhiw.jpg)
  - Arabic Green: ![HIW Arabic Green](/storyOfApp/argrhiw.jpg)
  - English Dark: ![HIW English Dark](/storyOfApp/endhiw.jpg)
</details>

<details>
  <summary><strong>What to Ask</strong></summary>

  - ![What To Ask](/storyOfApp/endwta.jpg)
</details>

<details>
  <summary><strong>Pricing</strong></summary>

  - ![Pricing](/storyOfApp/grenp.jpg)
</details>

<details>
  <summary><strong>Contact</strong></summary>

  - ![Contact](/storyOfApp/engrc.jpg)
</details>

<details>
  <summary><strong>Admin</strong></summary>

  <em>Admin can add new doctors and view data about doctors and patients.</em>

  - ![Admin](/storyOfApp/admin.jpg)
</details>

<details>
  <summary><strong>User Dashboard</strong></summary>

  <em>Dashboard with appointment management.</em>

  - ![Dashboard](/storyOfApp/dashboard.jpg)
</details>

<details>
  <summary><strong>AI Voice</strong></summary>

  <em>Available for Pro plan subscribers.</em>

  - ![Voice 1](/storyOfApp/nov.jpg)
  - ![Voice 2](/storyOfApp/aiv.jpg)
</details>

<details>
  <summary><strong>Appointments</strong></summary>

  <em>Select doctor and time, confirm, and receive email confirmation.</em>

  - ![Determine Doctor](/storyOfApp/determindoc.jpg)
  - ![Determine Time](/storyOfApp/determintime.jpg)
  - ![Confirm](/storyOfApp/conf.jpg)
  - ![Confirmation Modal](/storyOfApp/conmod.jpg)
</details>

<details>
  <summary><strong>Pro Plans</strong></summary>

  - ![Pro Plans](/storyOfApp/pro.jpg)
  - ![Stripe](/storyOfApp/str.jpg)
</details>

---

## Run the App

```bash
1- npm install
2- npm run dev
```