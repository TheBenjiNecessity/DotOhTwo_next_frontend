const theme = {
    button: {
        primary: {
            contained: {
                color: "text-white",
                backgroundColor: "bg-blue-400",
                borderColor: "transparent",
                hover: "hover:bg-blue-500",
                active: "active:bg-blue-600",
            },
            outlined: {
                color: "text-blue-400",
                backgroundColor: "transparent",
                borderColor: "border-blue-400",
                hover: "hover:bg-blue-100",
                active: "active:bg-blue-200",
            },
            text: {
                color: "text-blue-400",
                backgroundColor: "transparent",
                borderColor: "transparent",
                hover: "hover:bg-blue-100",
                active: "active:bg-blue-200",
            },
        },
        secondary: {
            contained: {
                color: "text-black",
                backgroundColor: "bg-gray-400",
                borderColor: "transparent",
                hover: "hover:bg-gray-500",
                active: "active:bg-gray-600",
            },
            outlined: {
                color: "text-gray-400",
                backgroundColor: "transparent",
                borderColor: "border-gray-400",
                hover: "hover:bg-gray-100",
                active: "active:bg-gray-200",
            },
            text: {
                color: "text-black",
                backgroundColor: "transparent",
                borderColor: "transparent",
                hover: "hover:bg-gray-100",
                active: "active:bg-gray-200",
            },
        },
    },
    typography: {
        h1: "m-0 text-8xl font-light",
        h2: "m-0 text-6xl font-light",
        h3: "m-0 text-5xl font-normal",
        h4: "m-0 text-4xl font-normal",
        h5: "m-0 text-2xl font-normal",
        h6: "m-0 text-xl font-medium",
        subtitle1: "m-0 text-base font-normal",
        subtitle2: "m-0 text-sm font-medium",
        body1: "m-0 text-base font-normal",
        body2: "m-0 text-sm font-normal",
        caption: "m-0 text-xs font-normal",
        overline: "m-0 text-xs font-normal",
    },
};

export default theme;
