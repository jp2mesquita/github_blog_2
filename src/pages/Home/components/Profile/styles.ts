import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;

  background: ${(props) => props.theme["base-profile"]};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

`

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const ProfileData = styled.section`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
      text-decoration: none;
      text-transform: uppercase;
      font: 700 .875rem Nunito, sans-serif;
      line-height: 160%;
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid transparent;

      transition: border .2s;

      &:hover{
        border-bottom: 1px solid ${(props) => props.theme.blue}
      }

      svg{
        margin-left: .5rem; 
      }
    }

    h1{
      font-weight: 700;
      color: ${(props) => props.theme["base-title"]};
      line-height: 130%;
      font-size: 1.5rem;
      margin-bottom: .5rem;
    }

    p{
      font-weight: 400;
      color: ${(props) => props.theme["base-text"]};
      line-height: 160%;
      font-size: 1rem;
    }

    ul{
      list-style: none;
      display: flex;
      line-height: 0;
      gap: 1.5rem;

      li{
        display: flex;
        align-items: center;
        justify-content: center;

        gap: .5rem;
      }
    }
  }
  
  div:nth-child(3){
    margin-top: auto;
  }
  
`