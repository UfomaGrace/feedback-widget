# Feedback Widget

A responsive and accessible feedback widget built with **React**, **TypeScript**, **Vite**, and **CSS**.

Created as a React fundamentals assignment covering state, controlled inputs, events, conditional rendering, list rendering, keyboard handling, `useEffect`, and cleanup.

---

## Features

- Controlled textarea with live character count (max 200)
- Submit via button or **Enter** (Shift + Enter for new line)
- Prevent empty/whitespace submissions
- Display and delete individual feedback items
- Show total feedback count
- Show/hide widget (demonstrates mount/unmount)
- Interval that logs every 5 seconds and cleans up on unmount

---

## React Concepts Demonstrated

| Concept                    | Usage                                      |
|---------------------------|--------------------------------------------|
| `useState`                | Text input, feedback list, ID counter      |
| Controlled components     | Textarea value bound to state              |
| Functional state updates  | Adding/deleting feedback safely            |
| List rendering            | `.map()` with unique `key`                 |
| Conditional rendering     | Empty state + show/hide widget             |
| Typed events              | `ChangeEvent`, `FormEvent`, `KeyboardEvent`|
| `useEffect` + cleanup     | Mount log, feedback count, interval timer  |

---

## How It Works

1. User types → `handleChange` updates `text` state  
2. Submit → trim & validate → create feedback object → add to list → clear input  
3. Delete → filter list by `id`  
4. Hide widget → component unmounts → interval is cleared  

---

## Accessibility & Responsive Design

- Proper label association and `aria-labelledby`
- Keyboard support (Enter, Shift+Enter, focus styles)
- Semantic HTML (`section`, `form`, `ul`, `li`, etc.)
- Accessible delete buttons (`aria-label`)
- Flexible layout that works on mobile and desktop

---

## Getting Started

```bash
npm install
npm run dev