import error from "./error_gif.gif";

const ErrorMessage: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <img
                style={{ width: "300px" }}
                src={error}
                alt="error message"
            ></img>
            <p>Цейво... Щось зламалося :( перезавантажте сторінку </p>
        </div>
    );
};

export default ErrorMessage;
