import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import ProfileContainer from '../containers/ProfileContainer'

class Home extends React.Component {
	render(){
		return(
			<React.Fragment>
				<Panel id={this.props.id}>
					<PanelHeader>
						VKarma
					</PanelHeader>
					<Group>
						<Div>
							<ProfileContainer newDealsCount={2} go={this.props.go}/>
						</Div>
					</Group>
				</Panel>
			</React.Fragment>
		)
	}
}

export default Home;
