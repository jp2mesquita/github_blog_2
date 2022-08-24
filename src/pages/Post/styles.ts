import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  
  margin-top: -5.5rem;
`


export const PostTextArea = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;

  p{
    line-height: 130%;
    margin-bottom: .5rem;
  }



  h1, h2{
    color: ${(props) => props.theme.blue}
  }

  h3{
    font-size: 1.125rem;
  }

  h1, h2, h3, h4{
    margin: .5rem 0;
  }

  a{
    color: ${(props) => props.theme["base-text"]}  ;
    cursor: pointer;
  }

  ul{
    margin-top: 1rem;
    margin-left: 2rem;

    li + li{
      margin-top: 1rem;
    }
  }
`