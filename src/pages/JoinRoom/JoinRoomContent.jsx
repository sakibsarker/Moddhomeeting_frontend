import React, { useState } from 'react'
import { connect } from 'react-redux'
import JoinRoomInput from './JoinRoomInput'
import OnlyWithAudioCheck from './OnlyWithAudioCheck';
import { setConnectOnlyWithAudio } from '../../store/action'; // Updated the import here

const JoinRoomContent = (props) => {
    const { isRoomHost, setConnectOnlyWithAudio, connectOnlyWithAudio } = props;

    const [roomIdValue, setRoomIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');

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
