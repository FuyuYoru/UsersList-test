import { FC, useId, useState, useMemo } from "react";
import styles from './index.module.scss';
import { useGetUsersQuery } from "@/entities/user/api";
import { TriangleAlert } from "lucide-react";
import { TRowSceleton } from "@/shared/ui/TRowSceleton";
import { UsersTable } from "@/features/UsersTable/";
import { Input } from "@/shared/ui/Input";

export const UsersList: FC = () => {
    const { data: users, isLoading, error } = useGetUsersQuery(undefined, {
        pollingInterval: 20000,
    });

    const [filterValue, setFilterValue] = useState('');
    const listId = useId();

    const filteredUsers = useMemo(() => {
        if (!users) return [];

        if (!filterValue) return users;

        const lowercasedValue = filterValue.toLowerCase();
        return users.filter(user => {
            const fullName = `${user.firstname} ${user.lastname}`.toLowerCase();
            return user.email.toLowerCase().includes(lowercasedValue) || fullName.includes(lowercasedValue);
        });
    }, [users, filterValue]);

    const handleFilter = (value: string) => {
        setFilterValue(value);
    };

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
                    {Array.from({ length: 25 }).map((_, index) => (
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
    );

    return (
        <div className={styles['page_main-container']}>
            <h1>Пользователи</h1>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                <span>Фильтр:</span>
                <Input 
                    withDebounce={true} 
                    onChange={handleFilter} 
                    placeholder="Введите имя или email" 
                />
            </div>
            <UsersTable data={filteredUsers} />
        </div>
    );
};
