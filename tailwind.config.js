/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js","./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        stylish: ['"Montserrat Alternates"', 'sans-serif'],
        elegant: ['"Playfair Display"', 'serif'],
        modern: ['"Raleway"', 'sans-serif'],
        trendy: ['"Poppins"', 'sans-serif'],
        classic: ['"Merriweather"', 'serif'],
        timeless: ['"Roboto Slab"', 'serif'],
        cursive: ['"Great Vibes"', 'cursive'],
        artistic: ['"Indie Flower"', 'cursive'],
        minimalist: ['"Roboto"', 'sans-serif'],
        simplicity: ['"Lato"', 'sans-serif'],
        retro: ['"VT323"', 'monospace'],
        formal: ['"Libre Baskerville"', 'serif'],
        vintage: ['"Cinzel Decorative"', 'cursive'],
    },
  },
  plugins: [],
}
};
