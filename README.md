This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Dot Oh Two

## About

Dot Oh Two is a review sharing app built around the idea that users should be able to review anything from anywhere and find reviews easily without having to jump through any hoops. This Nextjs application represents the web frontend for the website. Currently it not only allows users to signup and write reviews but also lets admin users use internal apps to test and debug functionality.

## Getting Started

1. Set up you local environment file
   To connect to a local version of the postgres database, you will need to setup a local environment file with values such as connection strings to connect to a local database. TODO

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

3. Run storybook

This project uses storybook to display UI components for debugging purposes. To run the storybook, simply run:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see storybook running.

## Sections

## TODO:

### Pages:

-   Home
-   User
-   Review
-   Reviewable

### SubPages (sections within multiple pages):

-   Search
