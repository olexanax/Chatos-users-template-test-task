import { UsersAddFormProps, Inputs } from "../../interfaces";
import Form from "../form/form";
import Div from "./styles";

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
