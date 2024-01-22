import { User } from "@/models/user.model";

type UserButtonProps = {
    user: User;
};

export const UserButton = ({ user }: UserButtonProps) => (
    <form className="w-full">
        <input type="hidden" name="id" value={user.username} />
        <button
            type="submit"
            className="my-2 p-2 border border-black bg-white w-full mt-1"
        >
            {user.username}
        </button>
    </form>
);
