type SetUsersData = (
    newValue: User[] | ((prevValue: User[]) => User[])
) => void;
type SetUpdateMode = (
    newValue: boolean | ((prevValue: boolean) => boolean)
) => void;

export interface User {
    name: string;
    age: number;
    mail: string;
    id: string;
    dateOfAddition: Date;
}

export type SortFrom = "inc" | "decr";
export type SortBy = "age" | "dateOfAddition";

export type Inputs = {
    name: string;
    mail: string;
    age: number;
};

export interface AppInfoProps {
    total: number;
}

export interface UserListProps {
    users: User[];
    setUsersData: SetUsersData;
}

export interface UsersListItemProps extends User {
    setUsersData: SetUsersData;
}

export interface UsersAddFormProps {
    setUsersData: SetUsersData;
}

export interface UsersFilterProps {
    sortFrom: SortFrom;
    setSortFrom: (
        newValue: SortFrom | ((prevValue: SortFrom) => SortFrom)
    ) => void;
    sortBy: SortBy;
    setSortBy: (newValue: SortBy | ((prevValue: SortBy) => SortBy)) => void;
}
export interface FormProps<T extends "create" | "update"> {
    type: T;
    userInfo: T extends "update" ? User : undefined;
    setUpdateMode?: T extends "update" ? SetUpdateMode : undefined;
    setUsersData: SetUsersData;
}
export interface SearchProps {
    setSearch: (newValue: string | ((prevValue: string) => string)) => void;
}
