import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Button from "@vkontakte/vkui/dist/components/Button/Button";

import './style.css'


class Profile extends Component{

    componentDidMount() {
        this.changeClouds();
    }

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

    imgCarma(){
        if (this.props.carma<=-100) {
            return 'chaotic_evil.svg'
        } else if (this.props.carma <=-50) {
            return 'neutral_evil.svg'
        } else if (this.props.carma <= -20) {
            return 'lawful_evil.svg'
        } else if (this.props.carma <= -6) {
            return 'chaotic_neutral.svg'
        } else if (this.props.carma <= 5) {
            return 'true_neutral.svg'
        } else if (this.props.carma <= 19) {
            return 'lawful_neutral.svg'
        } else if (this.props.carma <= 49) {
            return 'chaotic_good.svg'
        } else if (this.props.carma <= 99) {
            return 'neutral_good.svg'
        } else {
            return 'lawful_good.svg'
        }
    }

    changeClouds() {
        if (this.props.carma <= -20 ) {
            return "url('bad_clouds.svg')";
        } else if (this.props.carma < 20) {
            return  "";
        } else {
            return "url('clouds.svg')";
        }
    }

    changePos() {
        if (this.props.carma <= -20 ) {
            return 'top'
         } else {
            return 'bottom'
        }
    }


    render() {
        return(
            <React.Fragment>
                <Div className="profileBack" style={{backgroundImage: this.changeClouds(), backgroundPosition: this.changePos(), backgroundSize: 'contain'}}>
                    <Div className="carma-box">
                        <div className="carma-rate">
                            {this.props.carma}
                        </div>
                        <div onClick={this.props.go} data-to="dealsList" className="friends-deals">
                            <img src='button_libra.svg'/>
                        </div>
                    </Div>
                    <Div className="carma-box">
                        <div onClick={this.props.go} data-to="statistic" className="carma">
                            <img src={this.imgCarma()} />
                        </div>
                    </Div>
                    <Div className="addBut">
                        <Button onClick={this.props.go} data-to="formDeal">
                            Добавить поступок
                        </Button>
                    </Div>
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