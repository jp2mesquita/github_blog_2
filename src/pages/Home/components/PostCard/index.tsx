import { PostsProps } from "../..";
import { relativeDateToNowFormatter } from "../../../../utils/Formatter";
import { Card } from "./styles";

interface IPost {
  post: PostsProps;
}
export function PostCard({ post } : IPost){

 
  const createdAt = relativeDateToNowFormatter(post.created_at)

  return(
    
      <Card to={`/post/${post.number}`}>
        <div>
          <h2>{post.title}</h2>
          <span>{createdAt}</span>
        </div>
        <p>
          {post.body}
        </p>
      </Card>
    
  )
}