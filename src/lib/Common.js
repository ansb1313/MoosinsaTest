import moment from "moment";
import "moment/locale/ko";
import _ from "lodash";
moment.locale("ko");

export const placementDirection = (i) => {
  //index에 따라 true, false
  if (i % 2 !== 0) {
    return true;
  }
};

// watch container

// export const onWheelTop = _.debounce((e, endPoint, pageIndex) => {
//   if (e.deltaY < 0) {
//     if (pageIndex > endPoint) setPageIndex((v) => v - 100);
//     if (pageIndex <= endPoint) setPageIndex(endPoint);
//   }
// }, 150);

// export const onWheelBottom = _.debounce((e, endPoint, pageIndex) => {
//   if (e.deltaY > 0) {
//     if (pageIndex < endPoint) setPageIndex((v) => v + 100);
//     if (pageIndex > endPoint - 100) setPageIndex(endPoint);
//     console.log("bottom");
//   }
// }, 150);

// export const onWheelLeft = _.debounce((e, endPoint, horizontalPage) => {
//   if (e.deltaY < 0) {
//     if (horizontalPage > endPoint) setHorizontalValue((v) => v - 100);
//     if (horizontalPage <= endPoint) setHorizontalValue(0);
//   }
// }, 150);

// export const onWheelRight = _.debounce((e, endPont, horizontalPage) => {
//   if (e.deltaY > 0) {
//     console.log("e.deltaYYY", e.deltaY);
//     if (horizontalPage < endPont) setHorizontalValue((v) => v + 100);
//     if (horizontalPage > endPont - 100) setHorizontalValue(endPont);
//   }
// }, 150);

// scroll Test

// import React, {useState, useRef, useEffect} from "react";
// import {useSelector} from "react-redux";
// import {useCallback} from "react";
// import cn from "classnames";
// import _ from "lodash";
// import styled from "styled-components";
// import ItemList from "../components/MainItemList/ItemList";
// import {appActions} from "../../redux/ActionCreators";

// const MainContainer = () => {
//   const {pageValue} = useSelector((state) => state.app);
//   const [aab, setAab] = useState(0);
//   const [pagePositon, setPagePositon] = useState(false)
//   const conRef = useRef(null);
//   const test3Ref = useRef(null);

//   const onScroll = () => {
//     window.addEventListener(
//       "scroll",
//       _.throttle(function (e) {
//         // const windowScrollPoint = window.scrollY;
//         // console.log("windowScrollPoint", windowScrollPoint);
//       }, 500)
//     );
//   };

//   useEffect(() => {
//     onScroll();
//   });

//   // const sclEvent = () => {
//   //   conRef.current.dispatchEvent(new Event('scroll'))
//   // }

//   // useEffect(() => {
//   //   sclEvent();
//   // },[]);

//   useEffect(() => {
//     console.log("aab", aab);
//   }, [aab]);

//   // let scrollToRef = () => {
//   //   pageValueV()
//   //  if(pageValue > 100){
//   //   conRef.current.scrollIntoView({behavior:"smooth"})
//   //   console.log('click')
//   //  }
//   // }

//   const wheelDirection = (e) => {
//     let val = aab;
//     let test2location = conRef?.current?.offsetTop;
//     let test3location = test3Ref?.current?.offsetTop;
//     if (e.deltaY < 0) {
//       console.log("scrolling up");
//       // console.log('e.deltaY', e.deltaY)
//       if (aab > 0) setAab((v) => v - 100);
//       if (aab <= 0) setAab(0);
//     } else if (e.deltaY > 0) {
//       console.log("scrolling downs");
//       const windowScrollPoint = window.scrollY;
//       console.log("sc", windowScrollPoint);
//       if (aab < 300) setAab((v) => v + 100);
//       if (aab >= 300) setAab(300);
//       // if (aab > 10)
//       //   window.scrollTo({top: test3location, behavior: "smooth"});
//         // console.log('e.deltaY', e.deltaY)
//     }

//     // if (val == 100 ) {
//     //   console.log("window.scrollY", window.scrollY);
//     //   window.scrollTo({top: test2location, behavior: "smooth"});
//     // }
//     // if (val > 50 && val <= 200 ) {
//     //   console.log("window.scrollY", window.scrollY);
//     //   window.scrollTo({top: '100vh', behavior: "smooth"});
//     // }
//   };

//   const onClick = () => {
//     setPagePositon(!pagePositon)
//   }

//   // className={cn("moo",{isActive:aab == 200})}
//   return (
//     <Container onWheel={wheelDirection} onClick={onClick} vh={`-${aab}vh`}>
//       <div className={cn("test one")} ref={conRef}>
//         page1
//       </div>
//       <div className="test 2" ref={test3Ref}>
//         page2
//       </div>
//       <div className="test 3">page3</div>
//       <div className="test 4">page4
//         <h1 className={cn('yoshi',{isYoshi:aab==300})}>요시</h1>

//       </div>
//     </Container>
//   );
// };

// const Container = styled.div`
//   overflow: hidden;
//   position: absolute;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   transition:all 0.65s cubic-bezier(.93,0,.63,0.1);
//   top:${props => props.vh};
//   &.isActive{

//   }
//   .test {
//     height: 100vh;
//     border: solid 1px #111;
//     &.one {
//       background: #eee;
//     }
//     .yoshi{
//       &.isYoshi{
//         font-weight: bold;
//       }
//     }
//   }
// `;

// const onHorizontalWheel = (e) => {
//     if (e.deltaY < 0) {
//       if (horizontalValue > 0) setHorizontalValue((v) => v - 100);
//       if (horizontalValue <= 0) setHorizontalValue(0);
//     } else if (e.deltaY > 0) {
//       if (horizontalValue < 300) setHorizontalValue((v) => v + 100);
//       if (horizontalValue > 200) setHorizontalValue(300);
//     }
//   };

// const wheelDirection = (e) => {
//     if (e.deltaY < 0) {
//     //   console.log('e.deltaY', e.deltaY)
//       if (page > 0) setPage((v) => v - 100);
//       if (page <= 0) setPage(0);
//     } else if (e.deltaY > 0) {
//         // console.log('e.deltaY', e.deltaY)
//       if (page < 300) setPage((v) => v + 100);
//       if (page > 200) setPage(300);
//     }
// };

// export default MainContainer;
