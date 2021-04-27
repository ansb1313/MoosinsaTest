import React, { useEffect, useRef, useState } from "react";
import cn from 'classnames';
import _ from 'lodash'
import styled from "styled-components";
import { MainIframe } from "../../../data/data";

const Main = () => {

  const [title, setTitle] = useState(false)
  const [mainView, setMainView] = useState(false)
  let mainSentinelRef;  
  mainSentinelRef = useRef(null);

  useEffect(() => {
      const title = setTimeout(()=>{
          setTitle(true)
      },1000)
      return () =>{
        clearTimeout(title)
      }
  }, [mainView])  

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(_.debounce((entry)=>{
        if(entry.isIntersecting){
            setMainView(true)
        }else{
            setMainView(false)
            setTitle(false)
        }
    },100))
  },{})

  if(mainSentinelRef.current){
    io.observe(mainSentinelRef.current)
  }

  return (
    <Container >
      <div>
        { mainView && MainIframe()}
      </div>
      <ScreenBlock >
          
      </ScreenBlock>
      <h1 className={cn({isActive:title})} >MOOSINSA SHOWCASE (MAIN LAYER)</h1>
      <Sentinel ref={mainSentinelRef}>
      </Sentinel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #eee;
  overflow: hidden;
  position: relative;
  div {
    width: 180vh;
    height: 100vh;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    align-items: center;
    justify-content: center;
    iframe {
      pointer-events: none;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  h1{
      color:#fff;
      font-weight: bold;
      letter-spacing: 2px;        
      padding:20px 0px;
      position: absolute;
      bottom:0;
      text-align:center;
      width:100%;
      height: 100%;
      background: #111;
      pointer-events:none;
      transform: translateY(100%);
      &.isActive{
        transition:all 0.3s;  
        transform:translateY(0%);
      }
  }
`;

const ScreenBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #111;
  opacity: 0.75;
  display: flex;
  justify-content:center;
  overflow-y: hidden;
  
`;

const Sentinel = styled.div`
    position: absolute;
    width:100%;
    top:40%;
    height: 100px!important;
    opacity: 0;
    pointer-events:none;
`

export default Main;
