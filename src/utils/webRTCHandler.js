import { setShowOverlay } from '../store/action';
import store from '../store/store'

const defaultConstraints={
    audio:true,
    video:true,
}

let localStream;

export const getLocalPreviewAndInitRoomConnection=async (
    isRoomHost,
    identity,
    roomId=null,
)=>{
    navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then(strem=>{
        console.log('Successfuly received local stream')
        localStream=strem;
        showLocalVideoPreview(localStream);
        store.dispatch(setShowOverlay(false))
        
        //dispatch and action to hide overlay



        // isRoom? wss.createNewRoom(identity):wss.joinRoom(roomId,identity);
    }).catch(err=>{
        console.log('Error occurred when trying to get access to local stream');
        console.log(err);
    })
}

const showLocalVideoPreview=(strem)=>{

}