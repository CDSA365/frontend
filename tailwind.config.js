module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            borderWidth: {
                1: "1px",
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};
