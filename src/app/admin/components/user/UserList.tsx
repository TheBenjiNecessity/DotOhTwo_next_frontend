import { UserListItem } from "@/stories/components/User/UserListItem";
import { UserButton } from "./UserButton";
import { User } from "@/models/user.model";

type UserListProps = {
    users: Array<User>;
};

export const UserList = ({ users }: UserListProps) =>
    users.map((user: User, index: number) => (
        <UserButton key={index} user={user} />
    ));
