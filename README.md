# Glass Calculator

A sleek, modern calculator web application featuring a glassmorphism design. This project showcases a clean UI with smooth interactions and full calculator functionality.

## 🎨 Features

- **Glasmorphism Design**: Modern, frosted glass aesthetic with smooth blur effects and layered backgrounds
- **Full Calculator Operations**: Addition, subtraction, multiplication, division, and modulo
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Smooth Interactions**: Hover animations and visual feedback on button presses
- **Clean Display**: Dual display panel showing current operand and previous operation
- **Smart Number Input**: Prevents multiple decimals and handles edge cases gracefully
- **Error Handling**: Division by zero protection

## 📁 Project Structure

```
calculator/
├── index.html       # HTML structure and layout
├── styles.css       # Glasmorphism styling and responsive design
├── script.js        # Calculator logic and event handling
└── README.md        # This file
```

## 🚀 Getting Started

### Prerequisites
No build tools or dependencies required! This is a vanilla HTML, CSS, and JavaScript project.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Brevin288/calculator.git
   cd calculator
   ```

2. Open `index.html` in your web browser
   - Double-click the file, or
   - Use a local server (recommended for best results):
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```

## 🎮 Usage

### Calculator Operations
- **Number buttons (0-9)**: Input numbers
- **Decimal (.)**: Add decimal point (prevented from being added twice)
- **Operations (+, −, ×, ÷, %)**: Select operation
- **= button**: Calculate result
- **AC button**: Clear all values
- **DEL button**: Delete last digit

### Examples
- `5 + 3 =` → `8`
- `10 − 4 =` → `6`
- `7 × 8 =` → `56`
- `20 ÷ 4 =` → `5`
- `15 % 4 =` → `3`

## 🎨 Design Highlights

### Glasmorphism Elements
- **Backdrop blur effect**: Creates the frosted glass appearance
- **Semi-transparent backgrounds**: Uses `rgba()` colors with opacity
- **Gradient overlays**: Subtle radial gradients create depth
- **Clean borders**: Thin, subtle borders with low opacity

### Color Scheme
- **Dark theme**: Base color `#0f172a` (dark slate)
- **Accent colors**: Cyan (`#70d9f2`), Purple, and Emerald green
- **Operations buttons**: Blue-purple gradient
- **Equals button**: Emerald-cyan gradient
- **Function buttons**: Indigo accent

## 💻 Technology Stack

- **HTML5**: Semantic markup with data attributes for button actions
- **CSS3**: Grid layout, flexbox, backdrop filters, gradients, and animations
- **Vanilla JavaScript**: No frameworks or external libraries

## 🔧 How It Works

### State Management
The calculator maintains three pieces of state:
- `previousOperand`: The first number in the operation
- `currentOperand`: The number being displayed
- `operation`: The selected mathematical operation

### Key Functions
- `appendNumber()`: Adds digits to current operand
- `chooseOperation()`: Sets the operation and prepares for next number
- `compute()`: Performs the actual calculation
- `clearAll()`: Resets calculator state
- `deleteLast()`: Removes the last digit
- `updateDisplay()`: Refreshes the UI with current state

## 📱 Responsive Design

The calculator is fully responsive with:
- Flexible container widths using `min()`
- Clamp functions for scalable typography
- Mobile-optimized button sizes
- Adjusted padding for smaller screens

## ✨ Features Explained

### Preventing Multiple Decimals
```javascript
if (number === "." && currentOperand.includes(".")) return;
```
Ensures only one decimal point per number.

### Smart Number Input
```javascript
if (currentOperand === "0" && number !== ".") {
  currentOperand = number;
}
```
Replaces leading zero when entering the first digit.

### Error Handling
```javascript
result = current === 0 ? "Error" : prev / current;
```
Displays "Error" instead of Infinity for division by zero.

## 🎯 Future Enhancements

Potential improvements:
- Keyboard support for number input and operations
- Calculation history
- Dark/light theme toggle
- Scientific calculator mode
- Memory functions (M+, M-, MR, MC)
- Copy result to clipboard

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Brevin288** - [GitHub Profile](https://github.com/Brevin288)

---

Made with ❤️ | Feel free to fork, modify, and use this project!
