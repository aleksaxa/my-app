import React from 'react';
import DialogItem from './DialogItem/dialogitem';
import s from './dialogs.module.css';
import Message from './Message/message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> ); 
    let messageElements = props.state.messageData.map( message => <Message message={message.message}/>);
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
              {dialogsElements}
            </div>
            <div className={s.messages}>
            {messageElements}
            </div>
        </div>
    );
}


export default Dialogs;