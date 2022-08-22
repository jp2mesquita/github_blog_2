import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;
  margin-bottom: 3rem;

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const FormImput = styled.form`
  
  margin-top: .875rem;

  input{
    width: 100%;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    color: ${(props) => props.theme["base-text"]};
    border-radius: 6px;

    padding: .875rem 1rem;

    transition: border-color .2s;

    &::placeholder{
      color: ${(props) => props.theme["base-label"]}
    }

    &:focus{
      border-color: ${(props) => props.theme.blue};
      outline: none;
    }
  }
`

export const PostCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  
`