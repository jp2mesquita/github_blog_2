import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ExtenalLinks, PostDetailsContainer} from "./styles";

export function PostDetails(){
  return(
    <PostDetailsContainer>
      <ExtenalLinks>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </NavLink>
        <a href="#">
          Ver no GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </ExtenalLinks>

      <h1>JavaScript data types and data structures</h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          5 comentários
        </li>
      </ul>

    </PostDetailsContainer>

  )
}