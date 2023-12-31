const palette = {
    primary: {
        main: "blue-400",
        light: "blue-200",
        dark: "blue-600",
        contrastText: "white",
    },
    secondary: {
        main: "gray-200",
        light: "gray-100",
        dark: "gray-400",
        contrastText: "black",
    },
    error: {
        main: "red-400",
        light: "red-200",
        dark: "red-600",
        contrastText: "white",
    },
    warning: {
        main: "orange-400",
        light: "orange-200",
        dark: "orange-600",
        contrastText: "black",
    },
    info: {
        main: "blue-800",
        light: "blue-600",
        dark: "blue-900",
        contrastText: "white",
    },
    success: {
        main: "green-400",
        light: "green-200",
        dark: "green-600",
        contrastText: "white",
    },
};

const theme = {
    button: {
        primary: {
            contained: {
                color: `text-${palette.primary.contrastText}`,
                backgroundColor: `bg-${palette.primary.main}`,
                borderColor: "transparent",
            },
            outlined: {
                color: `text-${palette.primary.main}`,
                backgroundColor: "transparent",
                borderColor: `border-${palette.primary.main}`,
            },
            text: {
                color: `text-${palette.primary.main}`,
                backgroundColor: "transparent",
                borderColor: "transparent",
            },
        },
        secondary: {
            contained: {
                color: `text-${palette.secondary.contrastText}`,
                backgroundColor: `bg-${palette.secondary.main}`,
                borderColor: "transparent",
            },
            outlined: {
                color: `text-${palette.secondary.main}`,
                backgroundColor: "transparent",
                borderColor: `border-${palette.secondary.main}`,
            },
            text: {
                color: `text-${palette.secondary.main}`,
                backgroundColor: "transparent",
                borderColor: "transparent",
            },
        },
    },
};

export default theme;
