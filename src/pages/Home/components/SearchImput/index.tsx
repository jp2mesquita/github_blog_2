import * as z from 'zod'
import { zodResolver }from  '@hookform/resolvers/zod'

import { FormImput, SearchContainer } from "./styles";
import {  useForm } from 'react-hook-form';


interface Props{
  postsAmount: number,
  getPosts: (query: string) => void
}

const searchFormSchema = z.object({
  query: z.string()
})

type SeachFormInput = z.infer<typeof searchFormSchema>

export function SearchImput( { postsAmount, getPosts }: Props){

  const { register, handleSubmit} = useForm<SeachFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchPosts(data: SeachFormInput){
    await getPosts(data.query)
  }

  return(
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <p>{postsAmount} Publicações</p>
      </div>

      <FormImput onSubmit={handleSubmit(handleSearchPosts)}>
        <input 
          type="text" 
          placeholder="Buscar conteúdo" 
          {...register("query")}
        />
      </FormImput>

      
    </SearchContainer>
  )
}