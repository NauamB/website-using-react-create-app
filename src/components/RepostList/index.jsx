import { Container} from './styles'
import { FiArrowLeft } from 'react-icons/fi'

export function RepostList() {
    return (
        <Container>
    <div>
        <button type='button'><FiArrowLeft/>Voltar
        
        </button>
        <h1>Repositorios de Nauam</h1>
        </div>
    
    <ul>
        <li>
                    <h2>Nome do Repositório</h2>
                    <p> Descrição do Repositório</p>
                    <a href='/'> Acessar repositorio</a>
        </li>
    </ul>
    </Container>
        
   )     
}