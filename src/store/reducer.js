import Actions from "./action";

const initState={
    identity:"",
    isRoomHost:false,
}


const reducer=(state=initState,action)=>{
    switch(action.type){
        case Actions.SER_IS_ROOM_HOST:
            return{
                ...state,
                isRoomHost:action.isRoomHost,
            };
            default:
                return state;
    }
}

export default reducer;