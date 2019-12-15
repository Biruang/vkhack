import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import ProfileContainer from '../containers/ProfileContainer'
import FriendsListContainer from "../containers/friendsListContainer";
import '../components/profile/style.css';

class Home extends React.Component {

	changeStyle(carma) {
		var el = document.getElementsByClassName('homePage')[0];
		if (carma <-20) {
			el.style.backgroundImage = 'linear-gradient(#477482, white)';
		} else {
			el.style.backgroundImage = 'linear-gradient(#69DBFF, white)';
		}
	}

	render(){
		return(
			<React.Fragment>
				<Panel id={this.props.id}>
					<PanelHeader>
						VКарма
					</PanelHeader>

					<Group className="homePage">
						<Div>
							<ProfileContainer changeStyle={this.changeStyle} newDealsCount={2} go={this.props.go}/>
						</Div>
					</Group>

					<FriendsListContainer />
				</Panel>
			</React.Fragment>
		)
	}
}

export default Home;
