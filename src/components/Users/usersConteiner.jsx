import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Users from './users';
import React from 'react';
import Preloader from '../Common/Preloader/preloader';
import { Navigate } from 'react-router-dom';


class UsersConteiner extends React.Component {
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        if (this.props.isAuth === false) return <Navigate to={"/login"} />
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(UsersConteiner);



    /*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalActionCreator(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching));
        }
    }
}*/