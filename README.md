# Yet Another Electronics Tools (YAET) ⚡️

**Yet Another Electronics Tools** (YAET) is a modern, visually-stunning desktop application designed to help students and electronics hobbyists perform complex calculations quickly and accurately. Built with a focus on UI/UX aesthetics, YAET combines the elegance of **Liquid Glassmorphism** with the tactile feedback of **Neumorphism**.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-green)
![Electron](https://img.shields.io/badge/platform-Electron-lightgrey)

## ✨ Features

- **Beautiful Equation Rendering**: No more "raw" text formulas. We use **KaTeX** to render scientific equations that look exactly like your textbooks or Microsoft Word.
- **Liquid Glass UI**: A fluid, transparent interface with animated background blobs that make the app feel "alive."
- **Neumorphic Inputs**: Soft UI controls with inner and outer shadows for a modern, tactile feel.
- **Instant Calculations**: Results appear as you type or by pressing the **Enter** key.
- **Comprehensive Formula Library**:
  - **Op-Amp**: Inverting/Non-inverting gain, Summing/Difference amplifiers, Gain Error.
  - **Power Amp**: Class A/B/AB Power and Efficiency calculations.
  - **Power Electronics**: Zener limiters, Line/Load regulation.
  - **Semiconductors**: Rectifiers (Half-wave & Bridge), Electron shell capacity.
  - **Transistors**: JFET & MOSFET saturation characteristics.
- **Dark & Light Mode**: Seamlessly switch themes with a single click.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation (Development)
1. Clone the repository:
   ```bash
   git clone https://github.com/klauszealot/Yet-Another-Electronics-Tools.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Yet-Another-Electronics-Tools
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app in development mode:
   ```bash
   npm start
   ```

### Building the Executable
To generate a portable `.exe` file for Windows:
```bash
npm run dist
```
The output will be located in the `dist/` folder.

## 🛠 Tech Stack

- **Framework**: [Electron.js](https://www.electronjs.org/)
- **Frontend**: Vanilla HTML5, CSS3 (Custom Properties), JavaScript (ES6+)
- **Mathematics**: [KaTeX](https://katex.org/)
- **Design Concepts**: Glassmorphism, Neumorphism, Apple's San Francisco Typography

## 📄 License
This project is licensed under the ISC License.

---
*Created with ❤️ for the Electronics Engineering community.*
