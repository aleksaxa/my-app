import React from "react";
import Profile from "./profile";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";
import { compose } from "redux";


class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 24965;
        }
       this.props.getUserProfile(userId);
       this.props.getStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

export function withRouter(Children){
    return(props)=>{
        const match = {params: useParams()};
        return <Children {...props} match = {match}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
  //  withAuthRedirect
)(ProfileConteiner);


