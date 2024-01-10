import { User } from "@/models/user.model";

const USER_ROLES_DELIMITER = ",";

export const getRolesArray = (user: User) =>
    user.roles ? user.roles.split(USER_ROLES_DELIMITER) : [];

// TODO should this file be split from user/userdto utils?
