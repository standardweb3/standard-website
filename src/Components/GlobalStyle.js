import { createGlobalStyle } from "styled-components";
const AppStyle = createGlobalStyle`
    body {
        background: ${(props) => props.theme.bg};
    }
`;

export default AppStyle;
