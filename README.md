# 🚀 TypeScript + Express + MongoDB Starter Project

A complete boilerplate for backend development using **TypeScript**, **Express.js**, and **MongoDB (with Mongoose)**. This setup ensures strong type safety, scalable structure, and easy maintainability.

---

## 📦 Step-by-Step Setup Instructions

### 1. Initialize a Node.js project

```bash
npm init -y
```

Creates a `package.json` with default values.

---

### 2. Install TypeScript as a dev dependency

```bash
npm install --save-dev typescript
```

Installs the TypeScript compiler used only during development.

---

### 3. Install Express.js

```bash
npm install express
```

Installs the Express framework for building APIs.

---

### 4. Initialize TypeScript configuration

```bash
tsc --init
```

Generates a `tsconfig.json` file for TypeScript compiler options.

---

### 5. Install type definitions for Express

```bash
npm install --save-dev @types/express
```

Provides TypeScript type support for Express.

---

### 6. Compile and watch TypeScript files

```bash
tsc -w
```

Compiles `.ts` files to `.js` and watches for changes.

---

### 7. Install MongoDB

```bash
npm i mongodb
```

---

## 📁 Project Folder Structure

```
project-root/
├── src/
│   └── index.ts          # Main server file
├── dist/                 # Compiled JS output
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 tsconfig.json Configuration (Update this!)

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## 🛠 Recommended Scripts in `package.json`

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "tsc -w"
}
```

---

## 💡 Optional Enhancements

### 🔁 Enable Hot Reload with `ts-node-dev`

```bash
npm install --save-dev ts-node-dev
```

Then update your scripts:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
}
```

---

### 🔐 Use Environment Variables

```bash
npm install dotenv
npm install --save-dev @types/dotenv
```

Use like this in `index.ts`:

```ts
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
```

---

## ✅ Summary of Tools

| Tool           | Purpose                             |
|----------------|-------------------------------------|
| TypeScript     | Adds static typing to JavaScript    |
| Express.js     | Web framework for Node.js           |
| Mongoose       | MongoDB object modeling             |
| @types/*       | Type definitions for TypeScript     |
| tsc            | TypeScript compiler                 |
| ts-node-dev    | Hot reloading in dev                |
| dotenv         | Manage environment variables        |

---

> Created with ❤️ for clean backend development.