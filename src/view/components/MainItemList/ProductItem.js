import React from "react";
import styled from "styled-components";

const ProductItem = ({ data }) => {
    if (!data) return "...loading";
    return (
        <Container>
            <Item>{data}</Item>
        </Container>
    );
};

const Container = styled.div``;
const Item = styled.div`
    background: #999;
    width: 100%;
    height: 100px;
`;

export default ProductItem;
