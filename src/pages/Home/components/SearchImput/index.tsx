import { FormImput, SearchContainer } from "./styles";

export function SearchImput(){
  return(
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <p>6 Publicações</p>
      </div>

      <FormImput>
        <input type="text" placeholder="Buscar conteúdo" />
      </FormImput>

      
    </SearchContainer>
  )
}