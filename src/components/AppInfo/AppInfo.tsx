import { AppInfoProps } from "interfaces";
import Div from "components/AppInfo/styles";

const AppInfo: React.FC<AppInfoProps> = ({ total }) => {
    return (
        <Div>
            <h1 className="info_title">
                Загальна кількість користувачів: {total}
            </h1>
        </Div>
    );
};

export default AppInfo;
