import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { NavLink } from "react-router-dom";
import { relativeDateToNowFormatter } from "../../../utils/Formatter";
import { PostsProps } from "../../Home";
import { ExtenalLinks, PostDetailsContainer} from "./styles";

interface Props {
  post: PostsProps
}

export function PostDetails(  { post }: Props ){
  
  const createdAt = relativeDateToNowFormatter(post.created_at)

  
  return(
    <PostDetailsContainer>
      <ExtenalLinks>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </NavLink>
        <a href={post.html_url}>
          Ver no GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </ExtenalLinks>

      <h1>{post.title}</h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {post.user.login}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          {createdAt}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {post.comments} comentários
        </li>
      </ul>

    </PostDetailsContainer>

  )
}