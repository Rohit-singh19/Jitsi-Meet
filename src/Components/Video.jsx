import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Video() {

    const { state } = useLocation();
    const {name, roomName} = state;

    const navigate = useNavigate();

    const domain = 'meet.jit.si';
    let api ={};

    const onStartMeeting = () => {
        const options = {
            roomName : roomName,
            user : {
                name : name
            },
            height : 500,
            configOverwrite : {prejoinPageEnabled : false},
            interfaceConfigOverwrite : {

            },
            parentNode: document.querySelector('#jitsi-iframe'),
            userInfo:{
                displayName : name
            }
        }
        api = new window.JitsiMeetExternalAPI(domain, options);

        api.addEventListeners({
            readyToClose: handleClose,
            participantLeft: handleParticipantLeft,
            participantJoined: handleParticipantJoined,
            videoConferenceJoined: handleVideoConferenceJoined,
            videoConferenceLeft: handleVideoConferenceLeft,
            audioMuteStatusChanged: handleMuteStatus,
            videoMuteStatusChanged: handleVideoStatus
        });
    }

    const handleClose = () => {
        console.log('handleClose');
    }

    const handleParticipantLeft = async (participant) => {
        console.log('handleParticipantLeft', participant);
        const data = await getParticipants();
    }

    const handleParticipantJoined = async (participant) => {
        console.log('handleParticipantJoined', participant);
        const data = await getParticipants();
    }

    const handleVideoConferenceJoined = async (participant) => {
        console.log("handleVideoConferenceJoined", participant); // { roomName: "bwb-bfqi-vmh", id: "8c35a951", displayName: "Akash Verma", formattedDisplayName: "Akash Verma (me)"}
        const data = await getParticipants();
    }

    const handleVideoConferenceLeft = () => {
        console.log("handleVideoConferenceLeft");
        return navigate('/endcall');
    }

    const handleMuteStatus = (audio) => {
        console.log("handleMuteStatus", audio); // { muted: true }
    }

    const handleVideoStatus = (video) => {
        console.log("handleVideoStatus", video); // { muted: true }
    }

    const getParticipants = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(this.api.getParticipantsInfo());
            }, 500);
        })
    }


    useEffect(() => {
      if(window.JitsiMeetExternalAPI){
          onStartMeeting();
      }
      else {
          alert('Not Connected');
      }
    }, [])
    



  return (
      <div className='videoPageContainer'>
          <div className='header'>Custom Header</div>

            <div className='videoContainer'>
                <div id='jitsi-iframe'></div>
            </div>
      </div>
  )
}

export default Video