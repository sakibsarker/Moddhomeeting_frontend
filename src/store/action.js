const Actions={
    SER_IS_ROOM_HOST:"SER_IS_ROOM_HOST",
    SET_CONNECT_ONLY_WITH_AUDIO:"SET_CONNECT_ONLY_WITH_AUDIO",
    SET_ROOM_ID:"SET_ROOM_ID",
    SET_IDENTITY:"SET_IDENTITY",
    SET_SHOW_OVERLEY:"SET_SHOW_OVERLEY",
    SET_PARTICIPANTS:"SET_PARTICIPANTS"
};

export const setIsRoomHost=(isRoomHost)=>{
    return{
        type:Actions.SER_IS_ROOM_HOST,
        isRoomHost,
    };
};

export const setConnectOnlyWithAudio=(onlyWithAudio)=>{
    return{
        type:Actions.SET_CONNECT_ONLY_WITH_AUDIO,
        onlyWithAudio

    };
}


export const setIdentity=(identity)=>{
    return{
        type:Actions.SET_IDENTITY,
        identity
    }
}

export const setRoomId=(roomId)=>{
    return{
        type:Actions.SET_ROOM_ID,
        roomId
    }
}

export const setShowOverlay=(showOverlay)=>{
    return{
        type:Actions.SET_SHOW_OVERLEY,
        showOverlay
    }
}

export const setParticipants=(participants)=>{
    return{
        type:Actions.SET_PARTICIPANTS,
        participants
    }
}

export default Actions;