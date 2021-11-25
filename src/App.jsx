import { useState } from 'react'

import { User } from './components/User'

import { GlobalStyle } from './styles/global'

import { SearchBar } from './components/SearchBar'

import { Container } from './styles/home'

import {RepostList} from './components/RepostList'



function App() {
  
  const [user, setUser] = useState()
  const [userRepos, setUserRepos] = useState()

  
  
  return (
    
     <Container>
      <SearchBar setUser={setUser} setUserRepos={setUserRepos} />
      {user && <User user={user} userRepos={userRepos}/>}
      
      <RepostList/>

      <GlobalStyle />

    </Container>
    
  )
}

export default App
