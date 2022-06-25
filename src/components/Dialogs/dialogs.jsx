import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/dialogitem';
import s from './dialogs.module.css';
import Message from './Message/message';



const Dialogs = (props) => {
    debugger;
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElements = props.state.messageData.map(message => <Message message={message.message} />);


    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let messg = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(messg));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText} placeholder='Введите ваше сообщение' /></div>
                    <div><button onClick={addMessage}>Add message</button></div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;