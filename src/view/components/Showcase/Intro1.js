import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import cn from 'classnames';
import { showCaseImages } from "../../../data/data";

const Intro1 = () => {

    const [imagePosition, setImagePosition] = useState(false);
    let intro2SentinelRef;
    intro2SentinelRef = useRef(null);

    useEffect(()=>{
        imageBoxSentinel()
    },[imagePosition])

    const imageBoxSentinel =() => {
        const intro2Io = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setTimeout(()=>{
                        setImagePosition(true);
                    },1100)

                }else{
                    setImagePosition(false);
                }
            })
        },{})
    
        if(intro2SentinelRef.current){
            intro2Io.observe(intro2SentinelRef.current)
        }
    }

    console.log('imagePosition', imagePosition)
    return (
    <Container>
        <TextArea>
               <h1>무신사와 유아인의 <br></br> 두 번째 만남</h1>
               <p>무신사의 뮤즈, 유아인과 함께한 <br></br>
                2021년 상반기 TV 광고를 공개한다.
               </p>
         </TextArea>
        <ImageBox  
        className={cn("mainImage",{isActive:imagePosition})} >
        </ImageBox>
       
        <Intro2Sentinel ref={intro2SentinelRef}/>
        
    </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    width: 200%;
    background: #444;
    overflow:hidden;
    position: relative;
`;
const ImageBox = styled.div`
    width: 200%;
    height:100%;
    border:solid 1px #fff;
    transform: translateX(-70%);
    background: url(${showCaseImages.intro});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-x:center;
    background-position-y:center;
    filter: contrast(1.2);
    
    &.isActive{
        transform: translateX(-5%);
        transition: all 1.7s cubic-bezier(0.93, 0, 0.83, 0.5);
    }
`
const Intro2Sentinel = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom:50%;
    height: 50px;
    background:#fff;
    opacity: 0;
    z-index:500;
`

const TextArea = styled.div`
    z-index:1500;
    position: absolute;
    left: 0;
    top:0;
    right: 50%;
    bottom: 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align:center;
    line-height: 1.4;
    transform: translateY(7%);
    h1{
        margin-bottom:20px;
        font-size: 40px;
        font-weight: bold;
    }
    p{
        font-weight: bold;
        font-size: 20px;
    }
    &.isActive{
        transform: translateY(-5%);
    }
`

export default Intro1;
