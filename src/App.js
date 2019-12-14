import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import  connect from '@vkontakte/vk-connect';
import FormDeal from './panels/FormDeal';
import Home from './panels/Home';
import DealsList from './panels/DealsList';
import StatisticList from './panels/Statistic';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();

	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} back={false}/>
			<FormDeal id="formDeal" go={go}/>
			<DealsList id="dealsList" go={go} />
			<StatisticList id="statistic" go={go}
			                  day_allPoints={100}
							  day_positive={50}
							  history={[
								  {
									  name:"w",
									  date:new Date('2019-12-14'), 
									  type: 'good',
									  karma: 10
								  },
								  {
									  name:"m",
									  date:new Date('2019-12-3'), 
									  type: 'good',
									  karma: 9
								  },
								  {
									name:"y",
									date:new Date('2019-10-3') ,
									type: 'bad',
									karma: -54
								},
								{
									name:"d",
									date:new Date('2019-12-15') ,
									type: 'bad',
									karma: -7
								}
							  ]}/>
		</View>
	);
};

export default App;

