import { IUser } from "@/entities/user/model/user"

export const UserCard: React.FC<{ user: Pick<IUser, 'id' | 'avatar' | 'firstname' | 'lastname'> }> = ({ user }) => {
    return (
        <div>
            <div>
                {user.avatar ? <img src={user.avatar} alt="Not Found"/> : <p>No avatar</p>}
            </div>
            <p>{user.firstname + ' ' + user.lastname}</p>
        </div>
    )
} 