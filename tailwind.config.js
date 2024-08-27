import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-base': '#f43f5e',
      },
      fontFamily: {
        'morabba': ['morabba', 'serif'],
        'morabba-medium': ['morabba-medium', 'serif'],
        'morabba-bold': ['morabba-bold', 'serif'],
        'kalame-light': ['kalame-light', 'serif'],
        'kalame-medium': ['kalame-medium', 'serif'],
        'kalame-regular': ['kalame-regular', 'serif'],
      },
    },
  },
  plugins: [],
});