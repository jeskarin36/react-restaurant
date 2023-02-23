import React from 'react';
import {BsFillPlayFill,BsPauseFill} from "react-icons/bs";
import {meal} from "../../constants";
import './Intro.css';

const Intro = () => {

  const [play,setplay]=React.useState(false);
  const vidRef=React.useRef();

  const handleVideo=()=>{
    setplay((prevePlay)=> !prevePlay);
    if(play){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }

  return(
  <div className='app__video'>
    <video src={meal} type="video/mp4" ref={vidRef} Loop controls={false} muted></video>

    <div className="app__video-overlay flex__center">
      <div className="app__video-overlat_circle flex__center" onClick={handleVideo}>
        {play?(<BsPauseFill color="#fff" fontSize={30}></BsPauseFill>):(<BsFillPlayFill color="#fff" fontSize={30}></BsFillPlayFill>)}
      </div>
    </div>

</div>

)};

export default Intro;
