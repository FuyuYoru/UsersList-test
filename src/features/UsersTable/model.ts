import { IUser } from "@/entities/user/model/user"

export interface IUsersTableProps {
    data: Pick<IUser, "id" | "firstname" | "lastname" | "email">[]
}

export type paginationVariable = {
    id: string,
    value: number
}

export type pagesForSelectType = {
    prev: number[],
    next: number[]
}

export const paginationVariables: paginationVariable[] = [
    {
        id: 'pagination_25',
        value: 25
    },
    {
        id: 'pagination_50',
        value: 50
    },
    {
        id: 'pagination_100',
        value: 100
    },
]