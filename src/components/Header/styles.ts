import styled from "styled-components";

import cover from '../../assets/cover.png'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 18.5rem;
  background: url(${cover}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;


  img{
    width: 9.25rem;
    height: 6.125rem;
    margin-top: -4rem;
  }
`