import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Button from "@vkontakte/vkui/dist/components/Button/Button";

import './style.css'


class Profile extends Component{

    colorStyleFromCarma(){
        if(this.props.carma > 0){
            return "carma-green"
        }else{
            if (this.props.carma < 0){
                return "carma-red"
            }
        }
        return "carma-red"
    }

    render() {
        return(
            <React.Fragment>
                <Div className="carma-box">
                    <div onClick={this.props.go} data-to="statistic" className={"carma " + this.colorStyleFromCarma()}>
                        {this.props.carma}
                    </div>

                    <div onClick={this.props.go} data-to="dealsList" className="friends-deals">
                        {this.props.newDealsCount}
                    </div>
                </Div>
                <Div>
                    <Button size="xl" level="2" onClick={this.props.go} data-to="formDeal">
                        Add Deal
                    </Button>
                </Div>

            </React.Fragment>
        )
    }
}

Profile.propTypes = {
    carma: PropTypes.number.isRequired,
    newDealsCount: PropTypes.number.isRequired,
    go: PropTypes.func.isRequired
};

export default Profile;