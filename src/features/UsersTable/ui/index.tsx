import { IUser } from "@/entities/user/model/user";
import { FC, useId, useMemo } from "react"
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { RootState } from "@/app/store/store";
import { setPage, setType } from "@/features/UsersTable/store";
import { pagesForSelectType, paginationVariable, paginationVariables } from "@/features/UsersTable/model";

interface IUsersTableProps {
    data: Pick<IUser, "id" | "firstname" | "lastname" | "email">[]
}

export const UsersTable: FC<IUsersTableProps> = ({ data }) => {

    const dispatch = useAppDispatch();

    const currentPage = useAppSelector((state: RootState) => state.tableParams.selectedPage);
    const currentPagination = useAppSelector((state: RootState) => state.tableParams.paginationType);

    const navigate = useNavigate();
    const pagesForSelect: pagesForSelectType = useMemo(() => {

        const totalPages = Math.ceil(data.length / currentPagination.value);

        const prev = [currentPage - 2, currentPage - 1].filter((page) => page >= 0);
        const next = [currentPage + 1, currentPage + 2].filter((page) => page < totalPages);

        return { prev, next };
    }, [currentPage, currentPagination, data]);

    const paginatedData = useMemo(() => {
        const start = currentPage * currentPagination.value;
        const end = start + currentPagination.value;
        return data.slice(start, end);
      }, [data, currentPage, currentPagination]);
      
    const onChangePagination = (paginationItem: paginationVariable) => {
        dispatch(setType(paginationItem));
    }

    const changePage = (page: number) => {
        dispatch(setPage(page));
    }

    const rowClickAction = (rowItem: Pick<IUser, "id" | "firstname" | "lastname" | "email">) => {
        navigate(`/users/details/${rowItem.id}`)
    }

    const listId = useId();
    const pagesID = useId();
    const pagesVars = useId();

    return (
        <div className={styles['users-table_main']}>
            <table className={styles['users-table_table']}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData?.map((user) => (
                        <tr onClick={() => rowClickAction(user)} key={`${listId}-${user.id}`}>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles['users-table_settings']}>
                <div>
                    <ul>
                        <li
                            onClick={() => changePage(0)}
                        >
                            <ChevronsLeft strokeWidth={1.5} />
                        </li>
                        {pagesForSelect.prev
                            .map((item) => (
                                <li
                                    key={`${pagesID}-${item}`}
                                    onClick={() => changePage(item)}
                                >
                                    {item}
                                </li>
                            ))
                        }
                        <li style={{ borderBottom: '1px solid #4d6078' }}>{currentPage}</li>
                        {pagesForSelect.next
                            .map((item) => (
                                <li
                                    key={`${pagesID}-${item}`}
                                    onClick={() => changePage(item)}
                                >
                                    {item}
                                </li>
                            ))
                        }
                        <li
                            onClick={() => changePage(Math.ceil(data.length / currentPagination.value) - 1)}
                        >
                            <ChevronsRight strokeWidth={1.5} />
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        {paginationVariables
                            .map((item) => (
                                <li
                                    key={`${pagesVars}-${item.id}`}
                                    onClick={() => onChangePagination(item)}
                                    style={{ borderBottom: item.id === currentPagination.id ? '1px solid #4d6078' : '' }}
                                >
                                    {item.value}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}