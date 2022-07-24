import React from "react";
import Profile from "./profile";
import { connect } from 'react-redux';
import { /*useLocation, useNavigate,*/ Navigate, useParams } from 'react-router-dom';
import { getUserProfile } from "../../redux/profile-reducer";


class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
       this.props.getUserProfile(userId);
    }
    render() {
        if (this.props.isAuth === false) return <Navigate to={"/login"} />
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
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileConteiner);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
