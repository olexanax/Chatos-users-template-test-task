import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";
import sort from "../../utils/sort";
import filterBySearch from "../../utils/filter-by-search";
import { User, SortFrom, SortBy } from "../../interfaces";

import React from "react";
import AppInfo from "../app-info/app-info";
import UsersFilter from "../users-filter/users-filter";
import Search from "../search/search";
import Userslist from "../users-list/users-list";
import UsersAddForm from "../users-add-form/users-add-form";
import Spiner from "../spiner/spiner";
import ErrorMessage from "../error-message/ErrorMessage";

import Div from "./styles";

const App: React.FC = () => {
    const [usersData, setUsersData] = useState<User[]>([]);
    const [sortFrom, setSortFrom] = useState<SortFrom>("inc");
    const [sortBy, setSortBy] = useState<SortBy>("dateOfAddition");
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
