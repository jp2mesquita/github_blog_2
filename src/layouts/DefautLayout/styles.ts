import styled from "styled-components";

export const LayoutContainer = styled.div`

  main{

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 54rem){
      padding: 0 1rem;
    }
  }

`