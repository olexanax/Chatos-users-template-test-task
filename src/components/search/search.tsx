import React, { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

import { SearchProps } from "../../interfaces";
import Input from "./styles";

const Search: React.FC<SearchProps> = ({ setSearch }) => {
    const [loacalSearch, setlocalSearch] = useState("");
    const debouncedValue = useDebounce<string>(loacalSearch, 300);

    useEffect(() => {
        setSearch(debouncedValue);
    }, [debouncedValue]);
    return (
        <Input
            onChange={(e) => setlocalSearch(e.target.value)}
            value={loacalSearch}
            type="text"
            placeholder="search"
            className="form-control search-panel"
        />
    );
};

export default Search;
