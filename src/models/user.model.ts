export type User = {
    id?: string;
    username: string;
    email: string;
    phone?: string;
    DOB?: Date;
    roles?: string; // TODO dto should be split from site model?
    content?: any;
    settings?: any;
    preferences?: any;
    statistics?: any;
};

export type CompleteProfile = {
    email: string;
};
