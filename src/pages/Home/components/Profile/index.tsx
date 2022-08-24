import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { ProfileContainer, ProfileData, ProfileImage } from "./styles";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";

interface ProfileInfoProps{
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  company?: string;
  twitter_username: string;
  bio: string;
  followers: number;
}

export function Profile(){

  const [profileInfo, setProfileInfo] = useState<ProfileInfoProps>( {} as ProfileInfoProps)
  const [ isLoading, setIsLoading ] = useState(true)

  const getProfileData = useCallback(
    async () => {

      try{
        setIsLoading(true)
        const response = await api.get('/users/jp2mesquita')
        setProfileInfo(response.data)
      } finally{
        setIsLoading(false)
      }
    },[profileInfo]
  )

  useEffect( () =>{
      getProfileData()
  },[])

  return(
    <ProfileContainer>
     {isLoading ? (<Spinner /> ) :
     (
      <>
        <ProfileImage src={profileInfo.avatar_url} />

        <ProfileData>
            <div>
              <h1>{profileInfo.name}</h1>
              <a href={profileInfo.html_url} target="_blank">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            <div>
              <p>
                {profileInfo.bio}
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub}/>
                  {profileInfo.login}
                </li>
                { 
                  profileInfo.company && 
                  <li>
                    <FontAwesomeIcon icon={faBuilding}/>
                    Rocketseat
                  </li>
                }
                
                <li>
                  <FontAwesomeIcon  icon={faTwitter} />
                  {profileInfo.twitter_username}
                </li>
                <li>
                  <FontAwesomeIcon icon={faUserGroup} />
                  {profileInfo.followers} seguidores
                </li>
              </ul>
            </div>
        </ProfileData>
      </>
     )
     }
    </ProfileContainer>
  )
}