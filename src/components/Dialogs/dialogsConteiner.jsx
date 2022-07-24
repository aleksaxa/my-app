import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messageData: state.messagePage.messageData,
        dialogsData: state.messagePage.dialogsData,
        newMessageText: state.messagePage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (messg) => {
            dispatch(updateNewMessageTextActionCreator(messg));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsConteiner;