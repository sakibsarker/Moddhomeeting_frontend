import { setShowOverlay } from '../store/action';
import store from '../store/store';
import * as wss from '../utils/wss';
import Peer from 'simple-peer';

const defaultConstraints={
    audio:true,
    // video:true,
    video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 576, ideal: 720, max: 1080 },
      },
}

let localStream;

export const getLocalPreviewAndInitRoomConnection=async (
    isRoomHost,
    identity,
    roomId=null,
)=>{
    navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream)=>{
        console.log('Successfuly received local stream')
        localStream=stream;
        showLocalVideoPreview(localStream);

        ///dispatch and action to hide overlay

        store.dispatch(setShowOverlay(false))
        isRoomHost? wss.createNewRoom(identity):wss.joinRoom(identity,roomId);

    }).catch(err=>{
        console.log('Error occurred when trying to get access to local stream');
        console.log(err);
    })
}

let peers={};
let streams=[];

const getConfiguration=()=>{
    return{
        iceServers:[
            {
                urls:'stun:stun.l.google.com:19302'
            }
        ]
    }
}
export const prepareNewPeerConnection=(connUserSocketId,isInitiator)=>{
    const configuration=getConfiguration();

    peers[connUserSocketId]=new Peer({
        initiator:isInitiator,
        config:configuration,
        stream:localStream,
    });
    peers[connUserSocketId].on('signal',(data)=>{
        //webRTC offer webrtc answer (sdp info) ice candidates
        
        const signalData={
            signal:data,
            connUserSocketId: connUserSocketId
        };

        wss.signalPeerData(signalData);
    })

    peers[connUserSocketId].on('stream',(stream)=>{
        
       
        console.log('new stream came');

        addStream(stream,connUserSocketId);
        streams=[...streams,stream]
    });
}


export const handleSignalingData=(data)=>{
    //add signaling data to peer connection
    peers[data.connUserSocketId].signal(data.signal);
}

//show local vide preview UI VIDEOS
const showLocalVideoPreview=(stream)=>{
    const videosContainer=document.getElementById('videos_portal');
    videosContainer.classList.add('videos_portal_styles');
    const videoContainer=document.createElement('div');
    videoContainer.classList.add('video_track_container');
    const videoElement=document.createElement('video');
    videoElement.autoplay=true;
    videoElement.muted=true;
    videoElement.srcObject=stream;

    videoElement.onloadedmetadata=()=>{
        videoElement.play();
    }

    videoContainer.appendChild(videoElement);
    videosContainer.appendChild(videoContainer);


}

 //display incoming stream

const addStream=(stream,connUserSocketId)=>{
    const videosContainer=document.getElementById('videos_portal');
    const videoContainer=document.createElement('div');
    videoContainer.id=connUserSocketId;

    videoContainer.classList.add('video_track_container');
    const videoElement=document.createElement('video');
    videoElement.autoplay=true;
    videoElement.srcObject=stream;
    videoElement.id=`${connUserSocketId}-video`;

    videoElement.onloadedmetadata=()=>{
        videoElement.play();
    }

    // videoElement.addEventListener("click",()=>{
    //     if(videoElement.classList.contains("full_screen")){
    //         videoElement.classList.remove("full_screen");
    //         videoContainer.style.width = "100";  
    //         videoContainer.style.height = "100"; 
    //     }else{
    //         videoElement.classList.add("full_screen");
    //     }
    // })

    videoElement.addEventListener("click", () => {
        if(videoElement.classList.contains("full_screen")) {
            videoElement.classList.remove("full_screen");
            videoContainer.style.width = "";  // Reset to original style
            videoContainer.style.height = ""; // Reset to original style
            videoContainer.style.zIndex = ""; // Reset to original style
            // Reset all other videos to their original sizes
            document.querySelectorAll('.video_track_container').forEach((el) => {
                el.style.width = "";
                el.style.height = "";
            });
        } else {
            videoElement.classList.add("full_screen");
            videoContainer.style.width = "100%";  
            videoContainer.style.height = "100%";
            videoContainer.style.zIndex = "10"; // This will place the full screen video above others
            // Make other videos smaller or hidden depending on the desired behavior
            document.querySelectorAll('.video_track_container').forEach((el) => {
                if(el !== videoContainer) {
                    el.style.width = "0";  // This hides other videos. Adjust or remove this line if you want a different behavior.
                    el.style.height = "0"; // This hides other videos. Adjust or remove this line if you want a different behavior.
                }
            });
        }
    });
    
    

    
    

    videoContainer.appendChild(videoElement);
    videosContainer.appendChild(videoContainer);

}