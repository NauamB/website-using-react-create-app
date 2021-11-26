import { Container } from './styles'

export function User({user, userRepos, setIsRepostListActive}) {
    
    console.log(user)
    return (

        <Container>

            <img src={user.avatar_url} alt={user.name}/>

            <h1>{user.name}</h1>
            <h2>{user.login}</h2>
            <p>{user.bio}</p>
            
            <section>
                
                <button type='button' onClick ={() => setIsRepostListActive(true)}>
                    <strong>{userRepos?.length}</strong>
                    <span>repositorios</span>
               </button>
                
                <div>
                    <strong>{user.followers}</strong>
                    <span>seguidores</span>
                </div>
                
                <div>
                    <strong>{user.following}</strong>
                    <span>Seguindo</span>
                </div>
            
            </section>
        
        </Container>

    )
}