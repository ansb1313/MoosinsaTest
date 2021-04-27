import React, {useState} from "react";
import _ from "lodash";
import styled from "styled-components";

import ShowcaseHorizontalLayer from "../components/Showcase/ShowcaseHorizontalLayer";
import Intro1 from "../components/Showcase/Intro1";
import Main from "../components/Showcase/Main";
import Showcase1 from "../components/Showcase/Showcase1";
import Intro2 from "../components/Showcase/Intro2";

const MainContainer = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [horizontalPage, setHorizontalValue] = useState(0);

  const onWheelTop = _.debounce((e, endPoint, pageIndex) => {
    if (e.deltaY < 0) {
      if (pageIndex > endPoint) setPageIndex((v) => v - 100);
      if (pageIndex <= endPoint) setPageIndex(endPoint);
    }
  }, 150);

  const onWheelBottom = _.debounce((e, endPoint, pageIndex) => {
    if (e.deltaY > 0) {
      if (pageIndex < endPoint) setPageIndex((v) => v + 100);
      if (pageIndex > endPoint - 100) setPageIndex(endPoint);
      console.log("bottom");
    }
  }, 150);

  const onWheelLeft = _.debounce((e, endPoint,horizontalPage) => {
    if (e.deltaY < 0) {
      if (horizontalPage > endPoint) setHorizontalValue((v) => v - 100);
      if (horizontalPage <= endPoint) setHorizontalValue(0);
    }
  }, 150);

  const onWheelRight = _.debounce((e, endPont,horizontalPage) => {
    if (e.deltaY > 0) {
      console.log("e.deltaYYY", e.deltaY);
      if (horizontalPage < endPont) setHorizontalValue((v) => v + 100);
      if (horizontalPage > endPont -100) setHorizontalValue(endPont);
    }
  }, 150);

  // onWheel 에 따라서 V H 
  return (
    <Container vh={`-${pageIndex}vh`}>
      <PageWarp
         onWheel={(e) => {
          onWheelBottom(e, 200, pageIndex);
        }}
      >
        <Main />
      </PageWarp>
      <PageWarp
         onWheel={(e) => {
          onWheelTop(e, 0, pageIndex);
          onWheelBottom(e, 200, pageIndex);
        }}
      >
        <Intro1></Intro1>
      </PageWarp>
      <HsliderWarp>
      <HorizontalPage wh={`-${100 / 4 / 100 * horizontalPage}%`}>
        <HorizontalMain
          onWheel={(e) => {
            onWheelTop(e, 0, pageIndex);
            onWheelRight(e, 300, horizontalPage);
          }}
        >
          <ShowcaseHorizontalLayer />
        </HorizontalMain>
        <HorizontalFirst
          onWheel={(e) => {
            onWheelLeft(e,0, horizontalPage);
            onWheelRight(e, 300, horizontalPage);
          }}
        >
          <ShowcaseHorizontalLayer />
        </HorizontalFirst>
        <HorizontalSecond
          onWheel={(e) => {
            onWheelLeft(e,0, horizontalPage);
            onWheelRight(e, 300, horizontalPage);
          }}
        >
          <ShowcaseHorizontalLayer />
        </HorizontalSecond>
        <HorizontalThird
          onWheel={(e) => {
            onWheelLeft(e,0, horizontalPage);
            onWheelBottom(e, 400, pageIndex);
          }}
        >
          <ShowcaseHorizontalLayer />
        </HorizontalThird>
      </HorizontalPage>
      </HsliderWarp>
      <PageWarp
       onWheel={(e) => {
        onWheelTop(e, 200, pageIndex);
        onWheelBottom(e, 400, pageIndex);
      }}
      >
        <Showcase1/>
      </PageWarp>
      <PageWarp
       onWheel={(e) => {
        onWheelTop(e, 300, pageIndex);
      }}
      >
        <Intro2></Intro2>
      </PageWarp>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  width:67vh;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.6s cubic-bezier(0.93, 0, 0.63, 0.1);
  top: ${(props) => props.vh};
  &.isActive {
  }
  .test {
    height: 100vh;
    border: solid 1px #111;
    &.one {
      background: #eee;
    }
    
  }
`;

const PageWarp = styled.div`

`
const HorizontalPage = styled.div`
  height: 100vh;
  box-sizing: border-box;
  border: solid 1px #999;
  display: flex;
  position: relative;
  transition: all 0.6s cubic-bezier(0.93, 0, 0.63, 0.1);
  transform: translateX(${(props) => props.wh});
`;
const HsliderWarp = styled.div`
  width: 400%;
`
const HorizontalMain = styled.div`
  width: 100%;
`;
const HorizontalFirst = styled.div`
width: 100%;
`;
const HorizontalSecond = styled.div`

width: 100%;
`;
const HorizontalThird = styled.div`

width: 100%;
`;

export default MainContainer;
