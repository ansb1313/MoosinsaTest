import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styled/Reset.Styled";
import Routes from "./routes/Routes";

const App = () => {
    return (
        <Container>
            <GlobalStyle />
            <Routes />
        </Container>
    );
};

const Container = styled.div``;

export default App;
