# Password Generator

A configurable password generator built with JavaScript. Select the length and character options, generate secure passwords, and copy them to your clipboard with a single click.

## Live Demo
https://secure-passwords-generator.netlify.app/

## Features
- Generate passwords with a custom length
- Toggle character sets (e.g., uppercase, lowercase, numbers, symbols)
- One-click copy to clipboard
- Basic input validation and friendly UI feedback

## Built With
- JavaScript (ES6)
- HTML
- CSS

## What I Learned
- Building dynamic character sets based on user selections
- Validating user inputs and handling edge cases cleanly
- Updating the DOM in response to user actions
- Using the Clipboard API (`navigator.clipboard`) for copy-to-clipboard

## Getting Started
1. Clone the repo
2. Open `index.html` in your browser

## Next Improvements
- Add password strength hints (length + variety indicators)
- Add “exclude similar characters” option (e.g., O/0, l/1)
- Improve accessibility (labels, keyboard flow, focus states)
- Add basic tests for the generation logic
