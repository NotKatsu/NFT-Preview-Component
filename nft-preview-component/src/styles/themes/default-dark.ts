import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
    type: "dark",
    theme: {
        fonts: {
            sans: "Outfit, sans-serif",
        },
        colors: {
            white: "#1B1B1A",
            black: "#0D1A2D",

            primary: "#FFFFFF"
        },
    },
});

export default darkTheme;