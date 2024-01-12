export const FORM_NAMES = {
    USERNAME: "username",
    DOB: "DOB",
    EMAIL: "email",
    PHONE: "phone",
    ROLES: "roles",
    CONTENT: "content",
    SETTINGS: "settings",
    PREFERENCES: "preferences",
    STATISTICS: "statistics",
};

export const ROWS = [
    {
        inputs: [
            {
                name: FORM_NAMES.USERNAME,
                label: "Username",
                disabled: false,
                colSpan: 1,
                required: true,
                type: "input",
            },
            {
                name: FORM_NAMES.DOB,
                label: "Date of Birth",
                disabled: false,
                colSpan: 1,
                required: false,
                type: "input",
                isDate: true,
            },
        ],
    },
    {
        inputs: [
            {
                name: FORM_NAMES.EMAIL,
                label: "Email",
                disabled: false,
                colSpan: 1,
                required: false,
                type: "input",
            },
            {
                name: FORM_NAMES.PHONE,
                label: "Phone",
                disabled: false,
                colSpan: 1,
                required: false,
                type: "input",
            },
        ],
    },
    {
        inputs: [
            {
                name: FORM_NAMES.ROLES,
                label: "Roles",
                disabled: false,
                colSpan: 1,
                required: false,
                type: "input",
            },
        ],
    },
    {
        inputs: [
            {
                name: FORM_NAMES.CONTENT,
                label: "Content",
                disabled: false,
                colSpan: 2,
                required: false,
                type: "textarea",
                isJSON: true,
            },
        ],
    },
    {
        inputs: [
            {
                name: FORM_NAMES.SETTINGS,
                label: "Settings",
                disabled: false,
                colSpan: 2,
                required: false,
                type: "textarea",
                isJSON: true,
            },
        ],
    },
    {
        inputs: [
            {
                name: FORM_NAMES.PREFERENCES,
                label: "Preferences",
                disabled: false,
                colSpan: 2,
                required: false,
                type: "textarea",
                isJSON: true,
            },
        ],
    },
    {
        inputs: [
            {
                name: FORM_NAMES.STATISTICS,
                label: "Statistics",
                disabled: false,
                colSpan: 2,
                required: false,
                type: "textarea",
                isJSON: true,
            },
        ],
    },
];
