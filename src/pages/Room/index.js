import {useParams} from "react-router";
import useWebRTC, { LOCAL_VIDEO } from "../../hooks/useWebRTC";

export default function Room() {
    const { id: roomID } = useParams();
    const {clients, provideMediaRef} = useWebRTC(roomID);

    console.log(clients);

    return (
        <div>
            {
                clients.map((id) => {
                    return (
                        <div key={id}>
                            <video
                                ref={(instance => {
                                    provideMediaRef(id, instance);
                                })}
                                autoPlay
                                playsInline
                                muted={id === LOCAL_VIDEO}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}
