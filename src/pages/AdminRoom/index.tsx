import { useHistory, useParams } from 'react-router-dom';

// assets
import LogoSvg from '../../assets/logo.svg'; 
import DeleteSvg from '../../assets/delete.svg'; 

// components
import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';

// hook
// import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

// database
import { database } from '../../services/firebase';

// styles
import './styles.scss';

type RoomParams = {
    id: string;
}

export function AdminRoom() {

    // const { user } = useAuth();
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const { questions, title } = useRoom(roomId);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        });

        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string) {
        if( window.confirm('Você tem certeza que deseja excluir essa pergunta?') ) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    function handleLogoutRoom() {
        history.push('/');
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={LogoSvg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutLined onClick={handleEndRoom}>Encerrar sala</Button>
                        <Button onClick={handleLogoutRoom}>Sair</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala { title }</h1>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
                </div>
                
                <div className="question-list">
                    {questions.map(question => {
                        return(
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={DeleteSvg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </div>
    )
}