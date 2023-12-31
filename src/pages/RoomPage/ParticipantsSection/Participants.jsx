import React from 'react'
import { connect } from 'react-redux';

const SingleParticipants=(props)=>{
  const {identity,lastItem,participant}=props;

  return<>
  <p className='participants_paragraph'>{identity}</p>
  {!lastItem && <span className='participants_separator_line'>
    </span>
    }
  </>
}

const Participants = ({participants}) => {

  //error fix anoter methos
  console.log(participants);
  const participantsArray = Array.isArray(participants) ? participants : [participants];
  console.log(participantsArray)

  return (
    <div className='participants_container'>
      {participantsArray.map((participant,index)=>{
      return(
        <SingleParticipants
        key={participant.identity}
        lastItem={participantsArray.length===index+1}
        participant={participant}
        identity={participant.identity}
        />
      )
    })}
    </div>
  )
}

const mapStoreStateToProps=(state)=>{
  return{
    ...state,
    
  }
}

export default connect(mapStoreStateToProps)(Participants);