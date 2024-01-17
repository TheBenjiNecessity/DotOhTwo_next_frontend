export const FORM_NAMES = {
    TITLE: "title",
    DESCRIPTION: "description",
    TYPE: "type",
    CONTENT: "content",
    INFO: "info",
    STATISTICS: "statistics",
};

export const ROWS = [
    {
        inputs: [
            {
                name: FORM_NAMES.TITLE,
                label: "Title (For internal purposes only. Not visible to user.)",
                disabled: false,
                colSpan: 1,
                required: false,
                type: "input",
                isJSON: false,
            },
            {
                name: FORM_NAMES.DESCRIPTION,
                label: "Description",
                disabled: false,
                colSpan: 1,
                required: false,
                type: "input",
                isJSON: false,
            },
        ],
    },
    {
        inputs: [
            {
                name: FORM_NAMES.TYPE,
                label: "Type",
                disabled: false,
                colSpan: 1,
                required: false,
                type: "input",
                isJSON: false,
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
                name: FORM_NAMES.INFO,
                label: "Info",
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
