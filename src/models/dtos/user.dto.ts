export type UserDTO = {
    id?: string;
    username: string;
    email: string;
    phone?: string;
    DOB?: Date;
    roles?: string;
    isComplete: boolean;
    content?: any;
    settings?: any;
    preferences?: any;
    statistics?: any;
};
