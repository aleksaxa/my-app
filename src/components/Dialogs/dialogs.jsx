import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../Common/FormsControls/FormsControls';
import DialogItem from './DialogItem/dialogitem';
import s from './dialogs.module.css';
import Message from './Message/message';



const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElements = props.messageData.map(message => <Message message={message.message} key={message.id} />);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

const maxLength30 = maxLengthCreator(30);
const minLength2 = minLengthCreator(2);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageText" placeholder='Введите ваше сообщение' validate={[required, minLength2, maxLength30]} />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs;