import React from 'react'
import { connect as rconnect} from 'react-redux'
import Profile from "../components/profile";
import {InitUser} from "../actions/user";
class ProfileContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user_id: null
        }
    }

    async componentDidMount() {
        await this.props.InitUser()
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
    InitUser: () => dispatch(InitUser()),
});

export default rconnect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
