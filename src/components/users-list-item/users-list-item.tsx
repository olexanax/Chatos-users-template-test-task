import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";

import Form from "../form/form";

import { UsersListItemProps } from "../../interfaces";
import Li from "./styles";

const UsersListItem: React.FC<UsersListItemProps> = ({
    name,
    age,
    mail,
    id,
    dateOfAddition,
    setUsersData,
}) => {
    const [updateMode, setUpdateMode] = useState<boolean>(false);
    const { request } = useHttp();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const deleteUser = () => {
        setLoading(true);
        request(`http://localhost:3001/users/${id}`, "DELETE")
            .then(() =>
                setUsersData((data) => data.filter((user) => user.id !== id))
            )
            .then(() => setLoading(false))
            .catch(() => setError(true));
    };

    useEffect(() => {
        if (error) {
            alert("Помилка завантаження даних, спробуйте пізніше");
            setUpdateMode!(false);
            setError(false);
            setLoading(false);
        }
    }, [error]);

    const user = (
        <>
            <p className="name">{name}</p>
            <p className="age">{age}</p>
            <p className="mail">{mail}</p>
            <p className="id">{id}</p>
            <button
                type="button"
                className="update"
                onClick={() => setUpdateMode(true)}
            >
                update
            </button>
            <button
                disabled={loading}
                type="button"
                className="delete"
                onClick={deleteUser}
            >
                {loading ? "loading..." : "delete"}
            </button>
        </>
    );

    return (
        <Li>
            {!updateMode ? (
                user
            ) : (
                <Form
                    type="update"
                    setUsersData={setUsersData}
                    setUpdateMode={setUpdateMode}
                    userInfo={{ name, age, mail, id, dateOfAddition }}
                />
            )}
        </Li>
    );
};

export default UsersListItem;
