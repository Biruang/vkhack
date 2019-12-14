import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { HeaderButton } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

class Home extends React.Component {
	
	addBut () {
		if (this.props.back) {
			return (<HeaderButton><Icon24Back/></HeaderButton>)
		}
		return;
	}

	render(){
		return(
		<Panel id={this.props.id}>
			<PanelHeader left={this.addBut()}>
				VKarma
			</PanelHeader>
			<Button size="xl" level="2" onClick={this.props.go} data-to="formDeal">
					addDeal
				</Button>
		</Panel>
		)
	}
}

export default Home;
