import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ava from './../../../assets/images/user-male.png'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) =>{

  if(!props.profile){
    return <Preloader/>
  }

  return (
    <div>
      <div>
        {/*<img*/}
        {/*  className={classes.pic}*/}
        {/*  src="https://s1.1zoom.me/big0/930/Coast_Sunrises_and_sunsets_Waves_USA_Ocean_Kaneohe_521540_1280x775.jpg"*/}
        {/*></img>*/}
      </div>
      <div>
        <img src={props.profile.photos.large || ava} alt=""/>
        <ProfileStatus status={'hello'} />
      </div>
    </div>
  );
}



export default ProfileInfo;
