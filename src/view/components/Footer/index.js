import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Info>
        <h1>(주)무신사 사업자 정보</h1>
        <ul>
          <li>주식회사 무신사 (MUSINSA Co., Ltd.) 대표 조만호</li>
          <li>
            대표전화 1544-7199 (1번 배송,교환,환불 | 2번 결제,회원) 1:1문의
          </li>
          <li>주소 서울특별시 강남구 언주로 174길 30 로빈명품관 지하 1층</li>
          <li>사업자등록번호 211-88-79575 사업자정보</li>
          <li>통신판매업 2012-서울강남-01897</li>
          <li>개인정보관리책임자 이진우(help@musinsa.com)</li>
          <li>호스팅사업자 (주)무신사</li>
          <li>ⓒ MUSINSA Co.,Ltd.</li>
        </ul>
      </Info>
      <Items>
        <ul>
          <li>
            <a href="!#">회사소개</a>
          </li>
          <li>
            <a href="!#">공지사항</a>
          </li>
          <li>
            <a href="!#">입점∙제휴∙대량구매</a>
          </li>
          <li>
            <a href="!#">개인정보처리방침</a>
          </li>
          <li>
            <a href="!#">이용약관</a>
          </li>
          <li>
            <a href="!#">APP 다운로드</a>
          </li>
        </ul>
      </Items>
      <Guide>
          <div className="FAQ">
            FAQ
          </div>
          <div className="refund">
            교환/환불 가이드
          </div>
      </Guide>
      <SnsIcon>

      </SnsIcon>
      <Desc>
          <p>
          일부 상품의 경우 주식회사 무신사는
통신판매의 당사자가 아닌 통신판매중개자로서
상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로,
각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다
          </p>
      </Desc>
    </Container>
  );
};

const Container = styled.div`
    text-align: center;
`;
const Info = styled.div`
  text-align: center;
`;
const Items = styled.div`
    align-items:center;
    display: flex;
    justify-content:center;
   ul{   
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    width: 50%;
    li{
        margin-right: 10px;
    }
   }
`;
const Guide = styled.div``;
const SnsIcon = styled.div``;
const Desc = styled.div`
    text-align:center;
    display: flex;
    justify-content: center;
    p{
        display: inline-block;
        width: 50%;
    }
`;

export default Footer;
