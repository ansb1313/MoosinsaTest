import React from "react";
import styled from "styled-components";
import { data } from "../../../data/data";
import ShocaseItem from "./ShocaseItem";

const ShowcaseList = () => {

  return (
    <Container>
        {
            data.map((item, i) => {
                return(
                    <Items key={i}>
                        <ShocaseItem data={item} index={i} />
                    </Items>
                )
            })
        }
    </Container>
  );
};

const Container = styled.div``;

const Items = styled.div`
`;

export default ShowcaseList;
