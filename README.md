# Smart Quotes Converter

Smart Quotes Converter (live [here](https://thiagovscoelho.github.io/smart-quotes-converter/)) is a lightweight, client-side web app that automatically converts plain straight quotes (`'` and `"`) into proper typographic “smart” quotes (also called curly or typographer’s quotes). It works as you type and also offers bulk conversion.

This project is released under [CC0 (Public Domain)](https://creativecommons.org/publicdomain/zero/1.0/).

---

## ✨ Features

- **Live conversion while typing**
  - Straight quotes are automatically replaced with contextually correct smart quotes.
  - Handles apostrophes (e.g., `can't` → `can’t`) and decade elisions (e.g., `'90s` → `’90s`).

- **Bulk conversion**
  - Convert all straight quotes in the textarea to smart quotes.
  - Convert all smart quotes back to straight quotes.

- **Quick character insertion**
  - Insert `'`, `"`, `‘`, `’`, `“`, `”`, `′`, `″`, or backtick at the cursor.

- **Themes**
  - Light (default)
  - Dark
  - High-contrast White (black on white)
  - High-contrast Black (white on black)

- **Keyboard shortcuts**
  - **Ctrl/Cmd + B** → Bulk convert to smart quotes
  - **Ctrl/Cmd + Shift + B** → Bulk convert to straight quotes

---

## 📦 Usage

1. Open the `index.html` file in your browser.
2. Type or paste text into the textarea.
   - Quotes typed directly are auto-converted.
   - To convert pasted text, click **Convert → Smart**.
3. Use toolbar buttons to:
   - Switch theme
   - Insert special characters
   - Bulk convert between straight and smart quotes

---

## 🛠️ Development

This is a pure client-side web app:

- **HTML/CSS/JS only** — no dependencies.
- Uses [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) and [IBM Plex Serif](https://fonts.google.com/specimen/IBM+Plex+Serif) from Google Fonts.
- Works entirely offline once loaded.

---

## 📄 License

This project is licensed under the [CC0 1.0 Universal (Public Domain Dedication)](https://creativecommons.org/publicdomain/zero/1.0/). You can copy, modify, distribute, and use it, even for commercial purposes, without asking permission.

---

## 🙌 Acknowledgments

Inspired by the old website SmartQuotes.info, from which the code for older versions was copied. New versions were clean-room rewritten, so the code is all mine now (really ChatGPT’s), and I dedicate the code of all these later versions to the public domain.

---

Enjoy better typography with **Smart Quotes Converter** ✍️