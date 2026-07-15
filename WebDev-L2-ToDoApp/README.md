OIBSIP/WebDev-L2-ToDoApp

To-Do Web App — Web Development & Designing, Level 2, Task 3

About This Project
My submission for Task 3 of Level 2 in the Web Development track — an
interactive to-do list where tasks move between a Pending list and a
Completed list. I went with a "paper notebook" look for this one — cream
background, a washi-tape sticker on the header, and a handwritten-style
font for headings — since it felt more personal than a plain flat to-do UI.

Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla — no libraries)

Features
- Input field + "Add Task" button (also works by pressing Enter)
- New tasks appear immediately at the top of the Pending list
- Each task has a round checkbox — tapping it marks the task complete and
  moves it into the Completed list (tapping again moves it back)
- Each task has an Edit (pencil) button that turns the task text into an
  inline input box you can type into directly, saved on Enter or on
  clicking away
- Each task has a Delete (trash) button that removes it permanently
- Live task count indicators above each list ("X pending" / "Y completed")
- Bonus: every task shows a timestamp — "Added [date/time]" while pending,
  or "Completed [date/time]" once checked off
- Bonus: tasks persist across page refreshes using localStorage, so your
  list is still there if you close and reopen the page
- Friendly empty-state messages when a list has no items

How It Works
Tasks are stored as an array of objects in localStorage, each with an id,
text, a completed flag, and createdAt/completedAt timestamps. Every action
(add, toggle, edit, delete) updates that array, saves it back to
localStorage, then re-renders both lists by filtering on the completed
flag — so the Pending/Completed split is always driven from one single
source of truth rather than two separate lists that could drift out of
sync.

File Structure
OIBSIP/WebDev-L2-ToDoApp/
- index.html        (structure, styling, and logic, single-file build)
- README.md          (this file)
- screenshots/         (add screenshots of the working app here)

How to Run
1. Open index.html in any browser — no build step or server required.
2. Tasks you add will be saved in that browser's localStorage, so they'll
   still be there next time you open the file in the same browser.

Self-Sourcing Note
Referred to general JavaScript to-do list tutorials for the core
add/toggle/delete pattern, and MDN's localStorage documentation for the
persistence layer, as suggested in the task guidelines.
