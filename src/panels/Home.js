import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { HeaderButton } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Profile from "../components/profile";

class Home extends React.Component {
	
	addBut () {
		if (this.props.back) {
			return (<HeaderButton><Icon24Back/></HeaderButton>)
		}
		return;
	}

	render(){
		return(
      <React.Fragment>
        <Panel id={this.props.id}>
          <PanelHeader left={this.addBut()}>
            VKarma
          </PanelHeader>
          <Group>
			      <Div>
				      <Profile carma={2} newDealsCount={2} go={this.props.go}/>
			      </Div>
		      </Group>
        </Panel>
      </React.Fragment>
		)
	}
}

export default Home;
