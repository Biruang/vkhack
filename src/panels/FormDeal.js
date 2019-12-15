import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { FormLayout, Button, Textarea, Input } from '@vkontakte/vkui';
import connect from "@vkontakte/vk-connect"


let url = "http://astarott.beget.tech/";

class FormDeal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            deal: '',
            description: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { name, value } = e.currentTarget;
        console.log(this.state.deal, this.state.description);
        this.setState({ [name]: value });

    }

    async addNewDeal(deal, description){
        const response = {
            name: deal,
            text: description
        };
        let data = await connect.sendPromise("VKWebAppGetUserInfo");
        await fetch(url + data.id +"/acts/create", {
            method: 'POST',
            body: JSON.stringify(response),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        this.props.go()
    }

    render() {
        const { deal, description } = this.state;
        return(
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<HeaderButton onClick={this.props.go} data-to="home">
                        <Icon24Back/>
                    </HeaderButton>}
                >
                    Добавить поступок
                </PanelHeader>
                <FormLayout>
                    <Input
                        type="text"
                        name="deal"
                        value={deal}
                        placeholder="Введите название"
                        onChange={this.onChange}
                        maxLength='100'
                        status={deal ? 'valid' : 'error'}
                        bottom={deal ? '' : 'Введите название!'}
                    />

                    <Textarea
                        placeholder="Введите описание"
                        maxLength="300"
                        name="description"
                        value={description}
                        onChange={this.onChange}
                    />

                    <Button onClick={() => {
                        this.addNewDeal(this.state.deal, this.state.description);
                        this.props.go()
                    }} data-to="home">Сохранить</Button>
                </FormLayout>
            </Panel>
        )
    }


}

export default FormDeal;