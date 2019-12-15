import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import PropTypes from 'prop-types';
import DealsListContainer from "../containers/DealsListContainer";

class DealsList extends React.Component {
    render(){


        return(
            <React.Fragment>
                <Panel id={this.props.id}>
                    <PanelHeader
                        left={<HeaderButton onClick={this.props.go} data-to="home">
                            <Icon24Back/>
                        </HeaderButton>}
                    >
                        Оцени других
                    </PanelHeader>

                    <DealsListContainer />
                </Panel>
            </React.Fragment>
        )
    }
}

DealsList.propTypes = {
    deals: PropTypes.array,
};

export default DealsList;
