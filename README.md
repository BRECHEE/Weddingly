# Weddingly

Weddingly is a modern wedding planning application built with Next.js, Prisma, and Tailwind CSS.

## Features

- Wedding creation and management
- Guest management with RSVP tracking
- Wedding gallery and media organization
- Personalized guest pages
- Login and registration flows
- Admin dashboard for event planning

## Stack

- Next.js 15
- React 18
- TypeScript
- Prisma ORM
- PostgreSQL
- Tailwind CSS

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```

2. Create your environment file
   ```bash
   copy .env.example .env
   ```
   On Linux/macOS:
   ```bash
   cp .env.example .env
   ```

3. Configure your database connection in `.env`

4. Generate Prisma client
   ```bash
   npx prisma generate
   ```

5. Run the app in development mode
   ```bash
   npm run dev
   ```

6. Open http://localhost:3000

## Useful scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npx prisma migrate dev
npm run seed
```

## Environment variables

The project expects variables such as:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/weddingly?schema=public"
NEXTAUTH_SECRET="change-me"
NEXTAUTH_URL="http://localhost:3000"
R2_ENDPOINT="https://your-account.r2.cloudflarestorage.com"
R2_BUCKET="weddingly"
R2_ACCESS_KEY_ID="your-key"
R2_SECRET_ACCESS_KEY="your-secret"
```

## Project structure

```text
app/
lib/
prisma/
public/
.next/
```

## Notes

This repository is intended to be published on GitHub as a collaborative project. Before pushing, make sure your GitHub credentials and repository URL are available.
