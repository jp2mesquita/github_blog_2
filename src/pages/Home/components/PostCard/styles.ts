import { Link } from "react-router-dom";
import styled from "styled-components";



export const Card = styled(Link)`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  background: ${(props) => props.theme["base-post"]};
  border: 2px solid ${(props) => props.theme["base-post"]};
  border-radius: 10px;

  transition: border .2s;

  text-decoration: none;
  
  &:hover{
    border: 2px solid ${(props) => props.theme["base-label"]}
  }

  div{
    width:100%;
    display: flex;  
    gap: 1rem;

    h2{
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};
      margin-bottom: 1.25rem;
      flex: 1%;
    }

    span{
      width: max-content;
      font-size: .875rem;
      color: ${(props) => props.theme["base-span"]}
    }
  }

 

  p{
    text-align: justify;
    color: ${(props) => props.theme["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; 
    -webkit-box-orient: vertical
  }


`