import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

export const GlobalStyled = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }
`;

// npm i styled-reset
// styled-reset 다운로드