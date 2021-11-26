import { Container} from './styles'
import { FiArrowLeft } from 'react-icons/fi'

export function RepostList({ user, userRepos, setIsRepostListActive }) {
    
    
    return (
        <Container>
    <div>
        <button type='button' onClick ={() => setIsRepostListActive(false)}><FiArrowLeft/>Voltar
        
        </button>
                <h1>Repositorios de {user.name}</h1>
        </div>
    
    <ul>
                {userRepos.map(repo => (
                    

                    <li key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                        <a target='_blank' rel='noreferrer' href={repo.html_url}>Acessar Repositório</a>
                        </li>
        ))}
    </ul>
    </Container>
        
   )     
                }
            