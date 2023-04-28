import { UsersAddFormProps } from "interfaces";

import Form from "components/Form/Form";
import Div from "components/UsersAddForm/styles";

const UsersAddForm: React.FC<UsersAddFormProps> = ({ setUsersData }) => {
    return (
        <Div>
            <h3 className="title">Додайте нового користувача</h3>
            <Form
                type="create"
                setUsersData={setUsersData}
                setUpdateMode={undefined}
                userInfo={undefined}
            />
        </Div>
    );
};

export default UsersAddForm;
