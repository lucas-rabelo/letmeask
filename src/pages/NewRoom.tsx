import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../assets/illustration.svg';
import LogoImg from '../assets/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala" 
                            onChange={event => setNewRoom(event.target.value)}
                        />
                        <Button>
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em sala já existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}