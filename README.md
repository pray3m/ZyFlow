# ZyFlow : Visual Web Scraping SaaS with Next.js

Build scrapers visually. Powered by AI. Built with Next.js, TypeScript, React, React Flow, Prisma, and React Query.

This project is a full-stack SaaS web application where users can create, edit, and run web scraping workflows using a drag-and-drop interface. It includes authentication, billing, credit tracking, workflow scheduling, and AI-powered data extraction.

## 🚀 Features

- 🔐 Authentication — Clerk integration for secure login/signup
- 🧩 Visual Workflow Builder — Drag-and-drop UI using React Flow
- 🧠 AI Tasks — Auto-detect fields like username/password with AI
- 🗃️ Database — Prisma ORM with SQLite
- 💳 Billing System — Stripe integration for credit purchases
- 🧮 Credit Consumption — Track usage per workflow execution
- 📅 Scheduler — Run workflows on a schedule (no 3rd-party tools)
- 🔍 Execution Viewer — See logs, inputs, outputs, and credit usage
- 🔐 Credentials Manager — Securely store API keys and passwords
- 🌐 Webhooks — Deliver scraped data to external services
- 📊 Dashboard — View stats, past executions, and credit usage
- 🌓 Dark Mode — Theme toggle with next-themes

## 📦 Tech Stack

- Frontend: Next.js 14, TypeScript, TailwindCSS, ShadCN UI
- State Management: React Query
- Database: Prisma + SQLite
- Auth: Clerk
- Payments: Stripe
- AI: OpenAI (for field detection)
- Other: React Flow, Zod, Zustand, Next-themes

## 🛠 To-Do / Roadmap

This roadmap mirrors the development flow ↗.

#### ⭕ Phase 1: Project Setup
- [x] Initialize Next.js app with TypeScript, Tailwind, ESLint
- [x] Install and configure ShadCN UI (via npx shadcn-ui@latest init)
- [ ] Setup Tailwind config and theme
- [ ] Setup folder structure with route groups

#### ⭕ Phase 2: Layout & Navigation
- [ ] Create reusable layout components
- [ ] Add sidebar with navigation (Home, Workflows, Credentials, Billing)
- [ ] Add responsive mobile sidebar
- [ ] Add breadcrumb navigation
- [ ] Implement dark mode with next-themes
- [ ] Add 404 Not Found page

#### ⭕ Phase 3: Clerk Authentication
- [ ] Install and configure Clerk
- [ ] Setup sign in / sign up pages
- [ ] Add middleware for protected routes
- [ ] Add user button in header

#### ⭕ Phase 4: Database Setup with Prisma
- [ ] Install Prisma and setup SQLite
- [ ] Define schema for Workflow model
- [ ] Create database migration
- [ ] Setup Prisma client with singleton pattern

#### ⭕ Phase 5: Workflows Page
- [ ] Create workflows dashboard page
- [ ] Fetch and display user workflows
- [ ] Add skeleton loading UI
- [ ] Create “Create Workflow” dialog
- [ ] Validate form with Zod
- [ ] Create workflow via server action
- [ ] Redirect to editor after creation
- [ ] Setup React Flow for visual workflow builder

#### ⭕ Phase 6: Workflow Editor
- [ ] Setup React Flow for visual workflow builder
- [ ] Add task menu and draggable nodes
- [ ] Connect nodes with edges
- [ ] Save workflow definition to DB
- [ ] Add support for task inputs and outputs
- [ ] Delete / duplicate tasks
- [ ] ✅ Validate workflow structure

#### ⭕ Phase 7: Workflow Execution
- [ ] Build execution engine (headless browser)
- [ ] Create execution viewer page
- [ ] Display logs, inputs, outputs, credit usage
- [ ] Show past executions table

#### ⭕ Phase 8: Task Types
- [ ] Navigate to URL task
- [ ] Fill input field task
- [ ] Click element task
- [ ] Wait for element task
- [ ] Scroll to element task
- [ ] Extract text from element task
- [ ] Extract data with AI task
- [ ] Read/Add property to JSON task
- [ ] Deliver data via webhook task
- [ ] Bypass scraping protection (BrightData)

#### ⭕ Phase 9: User Account & Billing
- [ ] Add user account settings page
- [ ] Setup Stripe integration
- [ ] Create billing page
- [ ] Display credit balance, history, invoices
- [ ] Track credit usage per execution

#### ⭕ Phase 10: Execution Scheduler
- [ ] Build custom scheduler (no 3rd-party tools)
- [ ] Allow users to set execution intervals
- [ ] Store and run scheduled jobs

#### ⭕ Phase 11: Credentials System
- [ ] Add credentials manager page
- [ ] Store encrypted API keys/passwords
- [ ] Integrate credentials into tasks

#### ⭕ Phase 12: Final Touches
- [ ] Add workflow publish/unpublish toggle
- [ ] Add duplicate workflow button
- [ ] Add dashboard with workflow stats
- [ ] Polish UI and loading states

#### 🔜 Bonus / Future Improvements
- [ ] Add unit/integration tests (Jest + RTL)
- [ ] Dockerize app for deployment
- [ ] Add OAuth providers (GitHub, Discord)
- [ ] Improve AI field detection accuracy
- [ ] Import/export workflows as JSON
- [ ] Add analytics dashboard
- [ ] Improve mobile UX
- [ ] Plugin system for custom tasks
- [ ] Add i18n support

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Make sure to set your `.env.local` with Clerk + Stripe keys.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
