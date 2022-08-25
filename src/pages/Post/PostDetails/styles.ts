import styled from "styled-components";

export const PostDetailsContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme["base-profile"]};

  height: 10.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;

  

  h1{
    margin-top: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
  }

  ul{
    list-style: none;
    display: flex;
    gap: 2rem;
    margin-top: .5rem;

    li{
      display: flex;
      align-items: center;
      gap: .5rem;
      color: ${(props) => props.theme["base-span"]};

      svg{
        color: ${(props) => props.theme["base-label"]}
      }
    }
  }

`

export const ExtenalLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  a{
    text-decoration: none;
    font: 700 .75rem Nunito, sans-serif;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;

    display: flex;
    align-items: center;
    gap: .5rem;

    transition: border .2s

  }

  a:hover{
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
  
`
