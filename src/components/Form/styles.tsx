import styled from "styled-components";

const Form = styled.form`
    display: flex;
    justify-content: flex-start;
    .name_input,
    .mail_input,
    .age_input {
        padding: 8px;
        display: flex;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .name_input,
    .mail_input {
        width: 30%;
    }
    .age_input {
        width: 5%;
        input {
            width: 100%;
        }
    }
    .change_button {
        margin-left: auto;
    }
    span {
        color: red;
        font-size: 14px;
    }
    input {
        width: 100%;
        height: 30px;
        padding-left: 5px;
    }
    label {
        font-size: 12px;
    }
`;

export default Form;
