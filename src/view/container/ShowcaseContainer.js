import React from "react";
import styled from "styled-components";
import Main from "../components/Showcase/Main";
import Intro1 from "../components/Showcase/Intro1";
import ShowcaseList from "../components/Showcase/ShowcaseList";
import Footer from "../components/Footer";

const ShowcaseContainer = () => {
    return (
        <Container>
            <Main />
            <Intro1 />
            <ShowcaseList />
            <Footer/>
        </Container>
    );
};

const Container = styled.div``;

export default ShowcaseContainer;
