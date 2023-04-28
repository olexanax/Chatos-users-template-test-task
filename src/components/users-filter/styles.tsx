import styled from "styled-components";

const Div = styled.div`
    background-color: #3d5a80;
    padding: 15px;
    display: flex;
    gap: 100px;
    color: #fff;
    .btn_group {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .btn {
        padding: 5px 10px;
        background-color: #686868;
        color: #fff;
    }
    .active {
        background-color: #fff;
        color: #686868;
        font-size: 24px;
    }
`;
export default Div;
