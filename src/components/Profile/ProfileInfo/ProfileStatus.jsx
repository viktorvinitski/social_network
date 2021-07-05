import React from 'react'
import classes from "./ProfileInfo.module.css";
import ava from './../../../assets/images/user-male.png'

class ProfileStatus extends React.Component{

  state = {
    editMode: false
  }

  activateEditMode () {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode () {
    this.setState({
      editMode: true
    })
  }


  render () {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
          </div>
        }
      </div>
    );
  }
}



export default ProfileStatus;
