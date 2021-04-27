import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const ItemList = () => {
    const data = ["LIST", "LIST", "LIST", "LIST"];

    return (
        <Container>
            <Row>
                {data.map((item, i) => {
                    return (
                        <Col key={i}>
                            <ProductItem data={item} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
`;

const Col = styled.div`
    padding: 10px;
    width: 50%;
`;
const Row = styled.div`
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    border: solid 1px;
    flex-wrap: wrap;
`;

export default ItemList;
