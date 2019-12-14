import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import DealsListComponent from "../components/dealsList";
import Icon24Back from '@vkontakte/icons/dist/24/back';
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";

class DealsList extends React.Component {
    render(){
        const arr = [
            {
                id: 1,
                name: 'ddd',
                description: 'ffdssd',
            },
            {
                id: 2,
                name: 'ddffd',
                description: 'ffasdadssd',
            },
        ]

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
                    <Group>
                        <Div>
                            <DealsListComponent deals={arr} />
                        </Div>
                    </Group>
                </Panel>
            </React.Fragment>
        )
    }
}

export default DealsList;
