# 🔐 Password Generator

A simple, responsive **Password Generator** built with React — customize length, include numbers and special characters, and copy your secure password with one click.

🔗 **Live Demo:** [https://meerubcodes.github.io/Password-Generator/](https://meerubcodes.github.io/Password-Generator/)

## ✨ Features

- 🎚️ Adjustable password length (6–100 characters)
- 🔢 Option to include numbers
- 🔣 Option to include special characters
- 📋 One-click copy to clipboard
- ⚡ Instant password generation (updates live as you tweak settings)

## 🛠️ Tech Stack

- **React** — Hooks: `useState`, `useEffect`, `useCallback`, `useRef`
- **Tailwind CSS** — for styling
- **Vite** — as the build tool
- **GitHub Pages** — for deployment

## 🧠 What I Learned

This project was a hands-on deep dive into React hooks:
- Using `useCallback` to memoize the password generation logic and avoid unnecessary re-renders
- Using `useEffect` to auto-regenerate the password whenever length or options change
- Using `useRef` to directly access the input field for the copy-to-clipboard feature
- Deploying a Vite + React app to GitHub Pages, including handling the base path and build/deploy scripts

## 🚀 Getting Started

Clone the repo and run it locally:

```bash
git clone https://github.com/meerubcodes/Password-Generator.git
cd Password-Generator
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ and a lot of debugging.