import React, { useState } from 'react'
import { connect } from 'react-redux'
import JoinRoomInput from './JoinRoomInput'
import OnlyWithAudioCheck from './OnlyWithAudioCheck';
import { setConnectOnlyWithAudio } from '../../store/action'; // Updated the import here
import ErrorMessage from './ErrorMessage';
import JoinRoomButtons from './JoinRoomButtons';

const JoinRoomContent = (props) => {
    const { isRoomHost, setConnectOnlyWithAudio, connectOnlyWithAudio } = props;

    const [roomIdValue, setRoomIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [errorMessage,setErrorMessage] =useState(null);

    const handleJoinRoom=()=>{
        //joining the room

        console.log('Joining')
    }

    return (
        <>
            <JoinRoomInput
                roomIdValue={roomIdValue}
                setRoomIdValue={setRoomIdValue}
                nameValue={nameValue}
                setNameValue={setNameValue}
                isRoomHost={isRoomHost}
            />
            {/* Updated the prop name being passed */}
            <OnlyWithAudioCheck
                setConnectOnlyWithAudio={setConnectOnlyWithAudio}
                connectOnlyWithAudio={connectOnlyWithAudio}
            />

            <ErrorMessage errorMessage={errorMessage}/>
            <JoinRoomButtons
            handleJoinRoom={handleJoinRoom}
            isRoomHost={isRoomHost}
            />
        </>
    );
}

const mapStoreStateProps = (state) => {
    return {
        ...state,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        setConnectOnlyWithAudio: (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio))
    };
};

export default connect(mapStoreStateProps, mapActionsToProps)(JoinRoomContent);
