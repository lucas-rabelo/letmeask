import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import Illustration from '../assets/illustration.svg';
import LogoImg from '../assets/logo.svg';
import GoogleImg from '../assets/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {

    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if(!user) {
            await signInWithGoogle();
        }
        history.push('/rooms/new');
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={Illustration} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas  da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={GoogleImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala" 
                        />
                        <Button>
                            Entrar em uma sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}