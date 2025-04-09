import { FC, useId } from "react";
import styles from './index.module.scss';
import { useGetUsersQuery } from "@/entities/user/api";
import { TriangleAlert } from "lucide-react";
import { TRowSceleton } from "@/shared/ui/TRowSceleton";

export const UsersList: FC = () => {
    const { data: users, isLoading, error } = useGetUsersQuery(undefined, {
        pollingInterval: 20000,
    });

    const listId = useId();

    if (isLoading) return (
        <div className={styles['page_main-container']}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading && Array.from({ length: 25 }).map((_, index) => (
                        <TRowSceleton key={`${listId}-${index}`} rowLength={4} />
                    ))}
                </tbody>
            </table>
        </div>
    );

    if (error) return (
        <div className={styles['page_error-container']}>
            <TriangleAlert
                size={300}
                strokeWidth={1.5}
            />
            <p className={styles['page_error-text']}>
                Упс.. Возникла проблема в соединении с сервером..
            </p>
        </div>
    )

    return (
        <div className={styles['page_main-container']}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && !error && users?.map((user) => (
                        <tr key={`${listId}-${user.id}`}>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
