import { PostDetails } from "./PostDetails";
import { PostContainer, PostTextArea } from "./styles";

export function Post(){
  return(
    <PostContainer>
      <PostDetails />
      <PostTextArea>
      <p>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        <br />
        <br />
        <strong>Dynamic typing</strong>
        <br />
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
      </p>
      </PostTextArea>
    </PostContainer>
  )
}