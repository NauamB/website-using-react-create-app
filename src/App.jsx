import { useState } from 'react'

import { User } from './components/User'

import { GlobalStyle } from './styles/global'

import { SearchBar } from './components/SearchBar'

import { Container } from './styles/home'

import {RepostList} from './components/RepostList'



function App() {
  
  const [user, setUser] = useState()
  const [userRepos, setUserRepos] = useState()
  const [isRepostListActive, setIsRepostListActive] = useState (false)

  
  
  return (
    
     <Container>
      <SearchBar setUser={setUser} setUserRepos={setUserRepos} />

      {isRepostListActive
        ? userRepos && (
          <RepostList user={user} userRepos={userRepos}
            setIsRepostListActive={setIsRepostListActive}/>
        )
        : user && (
          <User user={user} userRepos={userRepos}
            setIsRepostListActive={setIsRepostListActive}/>
      )}

     
      
      

      <GlobalStyle />

    </Container>
    
  )
}

export default App
