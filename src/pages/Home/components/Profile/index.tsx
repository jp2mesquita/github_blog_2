import { ProfileContainer, ProfileData, ProfileImage } from "./styles";
import avatar from '../../../../assets/avatar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile(){
  return(
    <ProfileContainer>
      <ProfileImage src={avatar}/>

      <ProfileData>
          <div>
            <h1>Cameron Willianson</h1>
            <a href="#">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
          </div>
          <div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub}/>
                cameronwll
              </li>
              <li>
                <FontAwesomeIcon icon={faBuilding}/>
                Rocketseat
              </li>
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                32 seguidores
              </li>
            </ul>
          </div>
      </ProfileData>
    </ProfileContainer>
  )
}