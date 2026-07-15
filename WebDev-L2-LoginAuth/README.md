OIBSIP/WebDev-L2-LoginAuth

SecureVault — Login Authentication System — Web Development & Designing, Level 2, Task 4

About This Project
My submission for Task 4 of Level 2 in the Web Development track — a
front-end authentication system with registration, login, and a protected
dashboard page. I went with a dark "security vault" visual theme (teal
accents on charcoal) to match the subject matter.

Approach Chosen
Option (A) from the task — front-end only, using HTML/CSS/JavaScript with
localStorage as the data store. No backend or server needed, so it can be
opened directly in a browser or hosted as a static site.

Tech Stack
- HTML5 (three pages: register.html, login.html, dashboard.html)
- CSS3 (shared stylesheet, style.css)
- JavaScript (Vanilla — shared logic in auth.js, plus a small inline
  script per page for that page's form handling)
- Web Crypto API (SubtleCrypto) for SHA-256 password hashing — built into
  the browser, no external library needed

Features
- Registration page with username/email and password fields, plus a
  confirm-password field, and a "Register" button
- Password validation on registration: minimum 8 characters and at least
  one number, checked before the form submits
- Duplicate account check — trying to register a username/email that
  already exists shows an error instead of creating a second account
- Login page with username/email and password fields and a "Login" button
- Incorrect credential handling — wrong username or wrong password both
  show the same generic "Incorrect username/email or password" message,
  so a bad actor can't tell which one was wrong
- Protected dashboard page — checks for an active session as soon as the
  page loads and redirects straight to login.html if there isn't one, so
  it can't be viewed just by opening the file directly
- Logout button on the dashboard that clears the session and redirects
  back to the login page
- Passwords are never stored in plain text — each one is hashed with
  SHA-256 before being saved, and only the hash is ever written to
  localStorage
- Basic validation on both forms — empty fields are rejected with an
  inline error message next to the relevant field

How It Works
auth.js is shared across all three pages and holds every piece of the
logic: hashing passwords, reading/writing the list of registered users,
and reading/writing the current session. Registered users are stored as
an array in localStorage under oibsip_users, where each entry is a
{ username, passwordHash } pair — never the raw password. Logging in
re-hashes whatever password was typed and compares the two hashes, rather
than comparing plain text. A separate oibsip_session key just holds the
username of whoever is currently logged in; the dashboard checks for this
key the moment it loads (requireAuth()) and bounces back to the login
page if it's missing, which is what makes the dashboard "protected."

File Structure
OIBSIP/WebDev-L2-LoginAuth/
- register.html
- login.html
- dashboard.html     
- style.css             
- auth.js               
- README.md             


Note on Hosting
Because this uses localStorage, registered accounts are tied to whichever
browser you registered in — they won't be visible from a different
browser or device. This is expected for a front-end-only, no-backend
approach.

Self-Sourcing Note
Referred to general tutorials on building a localStorage-based login flow
in JavaScript, plus MDN's documentation on the Web Crypto API (for SHA-256
hashing) and on HTTP cookies/sessions (for understanding how session
concepts generally work, even though this front-end version uses
localStorage rather than real server-side sessions).
