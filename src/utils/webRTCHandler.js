import { setShowOverlay } from '../store/action';
import store from '../store/store';
import * as wss from '../utils/wss';

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
    .then((strem)=>{
        console.log('Successfuly received local stream')
        localStream=strem;
        showLocalVideoPreview(localStream);

        ///dispatch and action to hide overlay

        store.dispatch(setShowOverlay(false))
        isRoomHost? wss.createNewRoom(identity):wss.joinRoom(identity,roomId);

    }).catch(err=>{
        console.log('Error occurred when trying to get access to local stream');
        console.log(err);
    })
}

const showLocalVideoPreview=(strem)=>{

}