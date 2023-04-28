import { UsersFilterProps } from "interfaces";
import Div from "components/UsersFilter/styles";

const UsersFilter: React.FC<UsersFilterProps> = ({
    sortFrom,
    setSortFrom,
    sortBy,
    setSortBy,
}) => {
    const activeSortFromStyle = (filter: typeof sortFrom) =>
        sortFrom === filter ? "btn active" : "btn";

    const activeSortByStyle = (filter: typeof sortBy) =>
        sortBy === filter ? "btn active" : "btn";

    return (
        <Div>
            <div className="btn_group">
                спочатку:
                <button
                    className={activeSortFromStyle("inc")}
                    type="button"
                    onClick={() => setSortFrom("inc")}
                >
                    {sortBy === "age" ? "молодші" : "новіші"}
                </button>
                <button
                    className={activeSortFromStyle("decr")}
                    type="button"
                    onClick={() => setSortFrom("decr")}
                >
                    {sortBy === "age" ? "старші" : "старіші"}
                </button>
            </div>
            <div className="btn_group">
                сортувати за:
                <button
                    className={activeSortByStyle("age")}
                    type="button"
                    onClick={() => setSortBy("age")}
                >
                    За віком
                </button>
                <button
                    className={activeSortByStyle("dateOfAddition")}
                    type="button"
                    onClick={() => setSortBy("dateOfAddition")}
                >
                    За датою додавання
                </button>
            </div>
        </Div>
    );
};

export default UsersFilter;
