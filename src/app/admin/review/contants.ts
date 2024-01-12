export const FORM_NAMES = {
    ID: "id",
    COMMENT: "comment",
    RATING: "rating",
    CREATED: "created",
    CONTENT: "content",
    INFO: "info",
    USER_ID: "user_id",
    REVIEWABLE_ID: "reviewable_id",
};

export const ROWS = [
    {
        inputs: [
            {
                name: FORM_NAMES.USER_ID,
                label: "User ID",
                disabled: false,
                colSpan: 1,
                required: true,
                type: "input",
            },
            {
                name: FORM_NAMES.REVIEWABLE_ID,
                label: "Reviewable Id",
                disabled: false,
                colSpan: 1,
                required: true,
                type: "input",
            },
        ],
    },
    {
        inputs: [
            {
                name: FORM_NAMES.RATING,
                label: "Rating",
                disabled: false,
                colSpan: 1,
                required: true,
                type: "input",
            },
        ],
    },
    {
        inputs: [
            {
                name: FORM_NAMES.COMMENT,
                label: "Comment",
                disabled: false,
                colSpan: 2,
                required: false,
                type: "textarea",
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
];
