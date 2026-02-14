
  # Portfolio website for James Wayne

  This is a code bundle for Portfolio website for James Wayne. The original project is available at https://www.figma.com/design/oTkiPKokRfLUkTtvyqOPrk/Portfolio-website-for-James-Wayne.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Contact form

The contact section sends messages via [Formspree](https://formspree.io). To enable it:

1. Create a free account at https://formspree.io and create a new form.
2. Set the form’s receiving email (e.g. your Gmail).
3. Copy the form ID from the form URL (e.g. `xyzwqabc` from `https://formspree.io/f/xyzwqabc`).
4. Create a `.env` file (see `.env.example`) and set `VITE_FORMSPREE_FORM_ID=your_form_id`.

Without this, the form will show a configuration error when submitted.
