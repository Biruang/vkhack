import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Profile from "../components/profile";
import ListFriends from "../components/listFriends";

const arr = [
	{
		id:1928903,
		first_name:'Pupkin',
		last_name:'Zalupkin',
		photo:'https://pp.userapi.com/c845121/v845121950/63c02/4hP61FL56YM.jpg?ava=1',
		karma:400
	},
	{
		id:1890390,
		first_name:'Pupkin',
		last_name:'Zalupkin',
		photo:'https://pp.userapi.com/c845121/v845121950/63c02/4hP61FL56YM.jpg?ava=1',
		karma:400
	},
	{
		id:2389324,
		first_name:'Pupkin',
		last_name:'Zalupkin',
		photo:'https://pp.userapi.com/c845121/v845121950/63c02/4hP61FL56YM.jpg?ava=1',
		karma:400
	},
]

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
				      <Profile carma={2} newDealsCount={2} go={this.props.go}/>
			      </Div>
		      </Group>
			  <Group title="Рейтинг друзей">
			  	<ListFriends arrayUsers={arr}/>
			</Group>
        </Panel>
      </React.Fragment>
		)
	}
}

export default Home;
