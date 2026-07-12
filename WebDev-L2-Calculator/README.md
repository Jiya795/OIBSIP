OIBSIP/WebDev-L2-Calculator

- Desk Calculator — Web Development & Designing, Level 2, Task 1

- Objective

A fully functional, browser-based calculator that performs basic arithmetic
(addition, subtraction, multiplication, division) through a clean, tactile
button interface — built with a retro "desk calculator" visual identity
(phosphor-green LCD display, warm keycap styling).

- Tech Stack

- HTML5
- CSS3 (CSS Grid for the keypad layout)
- JavaScript (Vanilla — no libraries, no 'eval()')

- Features Implemented

- Live display showing both the current input and a small expression trail
above it (e.g. 12 +) so you can see what's already been entered
- Digit buttons (0–9) and a decimal point
- Operators: +, −, ×, ÷
- Handles divide-by-zero properly — shows "Cannot divide by 0" instead of
breaking or showing Infinity
- Supports chained operations like 5 + 3 × 2 without needing to press =
in between
- Built entirely with addEventListener — no inline onclick in the HTML
- Also works with the keyboard (numbers, + - * /, Enter, Backspace, Esc)

- How It Works

What I Found Tricky
The hardest part for me was getting the operator chaining to actually
work correctly — i.e., typing 5 + 3 × 2 without pressing = after every
step and still getting the right running result.

At first I was just storing the last operator and the current number, but
that meant pressing a second operator (like (×) right after (+)) did
nothing with the previous calculation — it just silently overwrote things
and gave wrong answers.

What fixed it: every time a new operator button is pressed, the calculator
first checks if there's already a number and operator waiting. If there is,
it runs that calculation immediately, updates the running total
(previousValue), and then stores the new operator. So 5 + 3 × 2
actually resolves step by step in the background:


- 5 is stored as previousValue, operator becomes +
- 3 is typed, then × is pressed → this triggers 5 + 3 = 8 right away,
- 8 becomes the new previousValue, operator becomes ×
- 2 is typed, then = is pressed → 8 × 2 = 16

Once I understood that operators need to "settle" the previous step before
storing the new one, the rest of the logic clicked into place.

- File Structure

OIBSIP/WebDev-L2-Calculator/
├── index.html     
├── README.md        
└── screenshots/  

- Self-Sourcing

I referred to vanilla JS calculator tutorials and MDN docs for
addEventListener, switch statements, and parseFloat() while building
this, as suggested in the task guidelines. I deliberately avoided using
eval() and instead built the calculation logic manually using operator
and value tracking, as required.