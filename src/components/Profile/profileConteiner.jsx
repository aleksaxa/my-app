import React from "react";
import Profile from "./profile";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 24965;
        }
       this.props.getUserProfile(userId);
    }
    render() {
        
        

        return (
            <Profile {...this.props} profile={this.props.profile} />
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
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
  //  withAuthRedirect
)(ProfileConteiner);


