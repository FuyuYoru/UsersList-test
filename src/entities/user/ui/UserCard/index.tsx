import { IUser } from "@/entities/user/model/user";
import { UserAvatar } from "@/entities/user/ui/UserAvatar";
import { FC } from "react";
import styles from './index.module.scss';

export const UserCard: FC<{ user: Pick<IUser, 'id' | 'avatar' | 'firstname' | 'lastname'> }> = ({ user }) => {
    return (
        <div className={styles['userCard_main-container']}>
            <div>
                {user.avatar
                    ? <UserAvatar avatar={user.avatar} />
                    : <p>No avatar</p>
                }
            </div>
            <p>{user.firstname + ' ' + user.lastname}</p>
        </div>
    )
} 