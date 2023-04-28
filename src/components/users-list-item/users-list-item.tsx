import { useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { UsersListItemProps } from "../../interfaces";
import Form from "../form/form";
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

    const deleteUser = () => {
        request(`http://localhost:3001/users/${id}`, "DELETE").then(() =>
            setUsersData((data) => data.filter((user) => user.id !== id))
        );
    };

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
            <button type="button" className="delete" onClick={deleteUser}>
                delete
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
