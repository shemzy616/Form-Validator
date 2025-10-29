# Form Validator

A lightweight, modern client‑side form validation project built with HTML, CSS, and vanilla JavaScript. It provides instant feedback, clear error messaging, and accessible interactions—no frameworks or dependencies required.

## Features

- Real‑time validation with debounced input handling
- Friendly, accessible error messages (ARIA live region)
- Regex/email/length/required validations out of the box
- Touched/dirty state handling to avoid noisy errors
- Disable/enable submit button based on validity
- Keyboard and screen‑reader friendly focus management
- Minimal, theme‑friendly CSS with clear states

## Preview

- Repository: [`shemzy616/Form-Validator`](https://github.com/shemzy616/Form-Validator)
- Clone to run locally (no build step needed)

## Getting Started

1) Clone the repo

```bash
git clone https://github.com/shemzy616/Form-Validator.git
cd Form-Validator
```

2) Open `index.html`

- Double‑click `index.html`, or
- Serve locally for better testing:

```bash
# Python 3
python -m http.server 5500
# then open http://localhost:5500
```

## Usage

- Fill the form fields; validation runs on blur and during typing.
- Invalid fields show inline messages; the submit button is locked until valid.
- On submit, the form re‑validates and prevents submission if any rule fails.

## Validation Rules (common examples)

- Required fields: non‑empty check
- Email: RFC‑like pattern check
- Password: min length + optional complexity
- Confirm password: equality check
- Username: length and allowed characters

You can tweak rules in `script.js` to match your product requirements.

## Project Structure

```
form validator/
├─ index.html   # Form markup and ARIA hooks
├─ style.css    # Base styles + valid/invalid states
└─ script.js    # Validation logic and behaviors
```

## Customization Guide

- Add a new field:
  - Add the input + an error container in `index.html`.
  - Register its rule(s) in `script.js` validation map.
- Change messages: update the message strings in `script.js`.
- Theming: update CSS variables/selectors in `style.css` for colors and spacing.

## Accessibility

- Error messages announced via ARIA `aria-live` regions
- Clear focus outlines and focus trapping on error summary (if present)
- Uses labels tied to inputs (`for`/`id`) to aid SR users

## Performance

- No dependencies, small footprint
- Debounced input listeners to reduce layout thrash

## Testing Tips

- Try keyboard‑only navigation (Tab/Shift+Tab)
- Toggle system reduced‑motion settings and verify transitions
- Paste invalid emails and boundary case passwords

## Roadmap

- Optional error summary banner linking to fields
- i18n for messages
- Configurable rule presets via data‑attributes

## Contributing

PRs and suggestions are welcome! If you find a bug or have an idea:

1) Open an issue describing the change
2) Fork and create a feature branch
3) Add/adjust examples if needed
4) Open a PR with a clear description

## License

MIT License. See `LICENSE` if present, or include your preferred license.

## Author

Built by Shemzy. Questions or feedback? Open an issue in the repo.
