// assets
import CopySvg from '../../assets/copy.svg';

// styles
import './styles.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {

    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }
    return(
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={CopySvg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    );
}