# QA Bootcamp Week 2 – Playwright Test Suite

This repository contains UI and API automated tests written using TypeScript and Playwright for the Practice Software Testing Toolshop application.

## Prerequisites

- [Node.js](https://nodejs.org/) (current LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Setup

Clone the repository and open the project folder:

```bash
git clone <repo-url>
cd qa-bootcamp-week2-starter
```

Complete these three setup steps:

1. **Install dependencies and the Playwright browser:**

   ```bash
   npm install
   npx playwright install chromium
   ```

2. **Configure environment variables:**

   Copy `.env.example` to `.env`.

   ```bash
   cp .env.example .env
   ```

   The `.env` file contains the Toolshop website and API URLs. Do not commit this file.

3. **Run the test suite:**

   ```bash
   npm test
   ```

   To list all discovered tests without executing them:

   ```bash
   npx playwright test --list
   ```

## Project Structure

| Folder/File | Purpose |
|---|---|
| `tests/` | Contains Playwright UI and API tests |
| `tests/homepage.spec.ts` | Tests the homepage title |
| `tests/login.spec.ts` | Tests invalid login behaviour |
| `tests/search.spec.ts` | Tests product search using a Page Object |
| `tests/api-products.spec.ts` | Tests product and cart API behaviour |
| `pages/` | Contains Page Object classes |
| `pages/SearchPage.ts` | Encapsulates search page locators and actions |
| `scripts/` | Contains helper scripts |
| `playwright.config.ts` | Playwright test configuration |

## Available Commands

- `npm run check` – checks the project setup and API connectivity.
- `npm test` – runs the complete Playwright test suite.
- `npx playwright test --list` – lists all discovered tests.
- `npx playwright test --headed` – runs tests with a visible browser.

## Test Coverage

The suite includes:

- Homepage title verification.
- Invalid login validation.
- Product search.
- Retrieving products through the API.
- Creating a cart and adding a product.
- Handling a request for a nonexistent cart.

## Security

Never commit `.env` or expose passwords, API keys or other secrets. The `.env` file is excluded through `.gitignore`.