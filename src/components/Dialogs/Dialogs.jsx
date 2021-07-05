import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogsItem'
import Message from "./Message/Message";
import { Button } from "antd";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {

  let state = props.dialogsPage
  
  let dialogsElements = state.dialogs.map((item) => <DialogItem name={item.name} key={item.id} id={item.id} />)
  let messagesElements = state.messages.map((item) => <Message message={item.message} key={item.id}/>)
  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.sendMessage()
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  return (
    <div className={style.dialogs}>
      <div className={style.users}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder='Enter your message'>
            </textarea>
          </div>
          <div><Button onClick={onSendMessageClick} type='primary'>Send</Button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
