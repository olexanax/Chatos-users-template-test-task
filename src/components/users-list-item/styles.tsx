import styled from "styled-components";

const Li = styled.li`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .name,
    .id,
    .mail {
        width: 25%;
    }
    .age {
        width: 5%;
    }
    .name,
    .id,
    .mail,
    .age {
        padding: 8px;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    form {
        width: 100%;
    }
    button {
        margin: 5px;
    }
    .delete {
        color: red;
    }
`;
export default Li;
