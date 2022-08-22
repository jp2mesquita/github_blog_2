import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchImput } from "./components/SearchImput";
import { PostCardsContainer } from "./components/SearchImput/styles";
import { HomeContainer } from "./styles";

export function Home(){
  return(
    <HomeContainer>
      <Profile />
      <SearchImput />

      <PostCardsContainer>
        <PostCard />
        <PostCard />
        <PostCard />

      </PostCardsContainer>
    </HomeContainer>
  )
}