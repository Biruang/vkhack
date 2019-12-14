import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";


class DealsList extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Panel id={this.props.id}>
                    <PanelHeader
                        left={<HeaderButton onClick={this.props.go} data-to="dealsList">
                            <Icon24Back/>
                        </HeaderButton>}
                    >
                        Оцени других
                    </PanelHeader>
                    <Group>

                    </Group>
                </Panel>
            </React.Fragment>
        )
    }
}

export default DealsList;
