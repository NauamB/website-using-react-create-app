import {User} from './components/User'

import { GlobalStyle } from './styles/global'

import { SearchBar } from './components/SearchBar'

import { Container } from './styles/home'



function App() {
  return (
    
     <Container>
      <SearchBar />
      <User/>
     <GlobalStyle/> 
    </Container>
    
  )
}

export default App
