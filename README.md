# AutoPlay QA - Playwright QA Automation Project

## Overview

This project demonstrates **end-to-end QA automation** using [Playwright](https://playwright.dev/). It includes **UI test automation, Page Object Model (POM) design, environment-based selectors, feature branches, and CI/CD integration**.

The tests cover **login, product, and health-check functionalities** of a demo web application. The project also implements **smoke and regression tags** for selective test execution.

---

## Features

- **Automated UI Testing**  
  Tests written in **Playwright + TypeScript** to verify web application functionality.

- **Page Object Model (POM)**  
  - Encapsulates page selectors and methods for maintainability  
  - Supports **reusable login, health, and product workflows**

- **Environment Configuration**  
  - Centralized selector and environment variables in `utils/env.ts`  
  - Easy to update and scale

- **Test Tags**  
  - `@smoke` for critical feature tests  
  - `@regression` for full functional validation  
  - Run selectively using `--grep "@smoke"` or `--grep "@regression"`

- **Branching & Pull Requests**  
  - Feature branches for new functionality  
  - Pull requests with clear descriptions and reviews

- **CI/CD Integration**  
  - GitHub Actions configured to run tests on push/PR  
  - Future support for smoke/regression selective runs, artifacts, and test reports

---

## Getting Started

### Prerequisites

- Node.js >= 18  
- npm >= 9  
- Playwright CLI

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/playwright-testing.git
cd playwright-testing

# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps



