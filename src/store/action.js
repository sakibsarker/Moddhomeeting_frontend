const Actions={
    SER_IS_ROOM_HOST:" SER_IS_ROOM_HOST",
};

export const setIsRoomHost=(isRoomHost)=>{
    return{
        type:Actions.SER_IS_ROOM_HOST,
        isRoomHost,
    };
};

export default Actions;