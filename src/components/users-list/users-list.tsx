import UsersListItem from "../users-list-item/users-list-item";

import { UserListProps } from "../../interfaces";
import Ul from "./styles";

const Userslist: React.FC<UserListProps> = ({ users, setUsersData }) => {
    const elements = users.map((user) => {
        return (
            <UsersListItem
                key={user.id}
                {...user}
                setUsersData={setUsersData}
            />
        );
    });

    return (
        <Ul>
            <li className="template">
                <p className="name">name</p>
                <p className="age">age</p>
                <p className="mail">mail</p>
                <p className="id">id</p>
            </li>

            {elements.length ? (
                elements
            ) : (
                <li className="no_users_banner">
                    наразі немає жодного користувача
                </li>
            )}
        </Ul>
    );
};

export default Userslist;
