import React from 'react'
import { connect } from 'react-redux'
import Profile from "../components/profile";

class ProfileContainer extends React.Component{
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

export default connect(mapStateToProps)(ProfileContainer)
