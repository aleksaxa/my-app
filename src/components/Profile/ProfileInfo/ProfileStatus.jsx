import React from 'react';
import Preloader from '../../Common/Preloader/preloader';
import s from './profileinfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        debugger;
        this.setState( {
            editMode : true
        } )
    }
    diactivateEditMode = () => {
        this.setState( {
            editMode : false
        } )
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={ this.diactivateEditMode } value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;