import React, { useState } from 'react';
import { connect } from 'react-redux';
import JoinRoomInput from './JoinRoomInput';
import OnlyWithAudioCheck from './OnlyWithAudioCheck';
import { setConnectOnlyWithAudio,setIdentity,setRoomId} from '../../store/action'; // Updated the import here
import ErrorMessage from './ErrorMessage';
import JoinRoomButtons from './JoinRoomButtons';
import {useNavigate} from 'react-router-dom';
import { getRoomExists } from '../../utils/api';

const JoinRoomContent = (props) => {

    const navigate=useNavigate()


    const { isRoomHost,
         setConnectOnlyWithAudio, 
         connectOnlyWithAudio,
         setIdentityAction,
         setRoomIdAction } = props;



    const [roomIdValue, setRoomIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [errorMessage,setErrorMessage] =useState(null);

    const handleJoinRoom=async()=>{
        setIdentityAction(nameValue);

       if(isRoomHost){
        createRoom();
       }else{
        await joinRoom();
       }
    }

    const joinRoom=async()=>{
        const responseMessage=await getRoomExists(roomIdValue);
        const {roomExists,full}=responseMessage;
        
        if(roomExists){
            if(full){
                setErrorMessage('Meeting is full.Please try agian later')
            }else{
                //join room
                //save in our redux store meeting id which was provider by user id who whould like to join
                setRoomIdAction(roomIdValue)
                navigate("/room")
            }

        }else{
            setErrorMessage('Meeting not found.Check your meeting ID')

        }
    }

    const createRoom=()=>{
        navigate("/room")
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
        setConnectOnlyWithAudio: (onlyWithAudio) => 
        dispatch(setConnectOnlyWithAudio(onlyWithAudio)),

        setIdentityAction:(identity)=>
        dispatch(setIdentity(identity)),

        setRoomIdAction:(roomId)=>dispatch(setRoomId(roomId)),
    };
};

export default connect(mapStoreStateProps, mapActionsToProps)(JoinRoomContent);
