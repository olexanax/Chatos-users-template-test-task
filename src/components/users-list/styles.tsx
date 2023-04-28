import styled from "styled-components";

const Ul = styled.ul`
    background-color: #3d5a80;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 5px;
    .template {
        font-weight: 900;
        background-color: #3d5a80;
        color: #fff;
        display: flex;
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
        }
        .id {
            padding-left: 30px;
        }
    }
`;
export default Ul;
