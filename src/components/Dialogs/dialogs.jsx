import React from 'react';
import DialogItem from './DialogItem/dialogitem';
import s from './dialogs.module.css';
import Message from './Message/message';



const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElements = props.messageData.map(message => <Message message={message.message} key={message.id} />);

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let messg = newMessageElement.current.value;
        props.updateNewMessageText(messg)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} placeholder='Введите ваше сообщение' /></div>
                    <div><button onClick={onAddMessage}>Add message</button></div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;