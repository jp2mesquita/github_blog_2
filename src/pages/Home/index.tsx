import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchImput } from "./components/SearchImput";
import { PostCardsContainer } from "./components/SearchImput/styles";
import { HomeContainer } from "./styles";


export type User = {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  company?: string;
  twitter_username: string;
  bio: string;
  followers: number;
}

export interface PostsProps{
  title: string;
  html_url: string;
  number: number;
  body: string;
  comments: number;
  created_at: string;
  user: User;
}

export function Home(){

  const [posts, setPosts] = useState<PostsProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts =  useCallback(
    async (query: string = '') => {

      try{
        setIsLoading(true)
        const response = await api.get(`/search/issues?q=${query}%20repo:jp2mesquita/GItHub_Blog_jp2mesquita`)

        setPosts(response.data.items)
      } finally{
        setIsLoading(false)
      }
    }
  ,[posts])

  useEffect(() => { 
    getPosts()
  },[])
  
  return(
    <HomeContainer>
      <Profile />
      {isLoading ? (<Spinner /> ):
      (
        <>
          
          <SearchImput postsAmount={posts.length} getPosts={getPosts}/>

          <PostCardsContainer>
            {posts.map( post => {
              return(
                <PostCard key={post.number} post={post}/>
              ) 
            })}

          </PostCardsContainer>
        </>
      )
      }
    </HomeContainer>
  )
}