import { useState, useEffect } from "react";
import { useHttp } from "hooks/useHttp";
import sort from "utils/sort";
import filterBySearch from "utils/filter-by-search";

import React from "react";
import AppInfo from "components/AppInfo/AppInfo";
import UsersFilter from "components/UsersFilter/UsersFilter";
import Search from "components/Search/Search";
import Userslist from "components/UsersList/UsersList";
import UsersAddForm from "components/UsersAddForm/UsersAddForm";
import Spiner from "components/Spiner/Spiner";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";

import { User, SortFrom, SortBy } from "interfaces";
import Div from "components/App/styles";

const App: React.FC = () => {
    const [usersData, setUsersData] = useState<User[]>([]);
    const [sortFrom, setSortFrom] = useState<SortFrom>("inc");
    const [sortBy, setSortBy] = useState<SortBy>("age");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const { request } = useHttp();

    useEffect(() => {
        request("http://localhost:3001/users")
            .then((data) => setUsersData(data))
            .then(() => setLoading(false))
            .catch(() => {
                setLoading(false);
                setError(true);
            });
        //eslint-disable-next-line
    }, []);

    const list =
        !loading && !error ? (
            <Userslist
                users={sort(
                    filterBySearch(usersData, search),
                    sortFrom,
                    sortBy
                )}
                setUsersData={setUsersData}
            />
        ) : null;
    const spiner = !error && loading ? <Spiner /> : null;
    const errorBanner = error && !loading ? <ErrorMessage /> : null;

    return (
        <Div>
            <AppInfo total={usersData.length} />
            <UsersFilter
                sortFrom={sortFrom}
                setSortFrom={setSortFrom}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <Search setSearch={setSearch} />
            {errorBanner}
            {list}
            {spiner}
            <UsersAddForm setUsersData={setUsersData} />
        </Div>
    );
};

export default App;
