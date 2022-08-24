import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { PostsProps } from "../Home";
import { PostDetails } from "./PostDetails";
import { PostContainer, PostTextArea } from "./styles";



export function Post(){
  
  const { issueNumber } = useParams()
  
  const [ post, setPost ] = useState<PostsProps>( {} as PostsProps)
  const [ isLoading, setIsloading ] =useState(true)
  
  const getPost = useCallback( 
    async () => {
      try{
        setIsloading(true)
        const response = await api.get(`/repos/jp2mesquita/GItHub_Blog_jp2mesquita/issues/${issueNumber}`)

        setPost(response.data)
      }finally{
        setIsloading(false)
      }

  },[])

  useEffect(() => {
    getPost()
   },[])

  return(
    <PostContainer>
      {isLoading ? (<Spinner />) : 
        ( 
          <>
            <PostDetails post={post}/>
            <PostTextArea>
              <ReactMarkdown>
                {post.body}
              </ReactMarkdown>
            </PostTextArea>
          </>      
        )
      }
    </PostContainer>
  )
}