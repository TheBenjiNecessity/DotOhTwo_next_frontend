import { User } from "../user.model";

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

export const getUserFromDTO = (dto: UserDTO): User => {
    return {
        id: dto.id,
        username: dto.username,
        email: dto.email,
        phone: dto.phone,
        DOB: dto.DOB,
        roles: dto.roles,
        content: dto.content,
        settings: dto.settings,
        preferences: dto.preferences,
        statistics: dto.statistics,
    };
};
