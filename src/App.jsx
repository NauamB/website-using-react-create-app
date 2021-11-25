import { useState } from 'react'

import { User } from './components/User'

import { GlobalStyle } from './styles/global'

import { SearchBar } from './components/SearchBar'

import { Container } from './styles/home'



function App() {
  
  const[user, setUser] = useState()

  
  
  return (
    
     <Container>
      <SearchBar setUser={setUser} />
      {user && <User user={user}/>}
     <GlobalStyle/> 
    </Container>
    
  )
}

export default App
