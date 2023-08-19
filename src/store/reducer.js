import Actions from "./action";

const initState={
    identity:"",
    isRoomHost:false,
    connectOnlyWithAudio:false,
}


const reducer=(state=initState,action)=>{
    switch(action.type){
        case Actions.SER_IS_ROOM_HOST:
            return{
                ...state,
                isRoomHost:action.isRoomHost,
            };
        case Actions.SET_CONNECT_ONLY_WITH_AUDIO:
            return{
                ...state,
                connectOnlyWithAudio:action.onlyWithAudio,

            };
            default:
                return state;
    }
}

export default reducer;