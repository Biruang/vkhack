import React from 'react'
import { connect as rconnect} from 'react-redux'
import Profile from "../components/profile";
import {InitUser} from "../actions/user";
import connect from '@vkontakte/vk-connect';
import {fetchFriends} from "../actions/friends";
class ProfileContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user_id: null
        }
    }

    async getUserData(){
        let data = await connect.sendPromise("VKWebAppGetUserInfo");
        setTimeout(this.props.InitUser(data.id), 5000);
    }

    componentDidMount() {
        this.getUserData();
        console.log(this.props.carma)
    }

    render(){
        const {carma, go, newDealsCount} = this.props;
        return(
            <Profile carma={carma} newDealsCount={newDealsCount} go={go}/>
        )
    }
}

const mapStateToProps = state => ({
    carma: state.user.carma,
    newDealsCount: state.user.newDealsCount
});

const mapDispatchToProps = dispatch => ({
    InitUser: id => dispatch(InitUser(id)),
    fetchFriends: arrayId => dispatch(fetchFriends(arrayId))
});

export default rconnect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
