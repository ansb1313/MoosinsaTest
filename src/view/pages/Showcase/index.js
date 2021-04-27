import React from "react";
import styled from "styled-components";
import ShowcaseContainer from "../../container/ShowcaseContainer";

const Main = () => {
    return (
        <Container>
            <ShowcaseContainer />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export default Main;
