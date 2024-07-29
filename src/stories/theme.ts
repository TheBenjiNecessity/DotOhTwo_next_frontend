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
        h1: "m-0 text-4xl font-bold",
        h2: "m-0 text-3xl font-bold",
        h3: "m-0 text-2xl font-bold",
        h4: "m-0 text-xl font-bold",
        h5: "m-0 text-lg font-bold",
        h6: "m-0 text-base font-bold",
        subtitle1: "m-0 text-base",
        subtitle2: "m-0 text-sm",
        body1: "m-0 text-base",
        body2: "m-0 text-sm",
        caption: "m-0 text-xs",
        overline: "m-0 text-xs",
    },
};

export default theme;
