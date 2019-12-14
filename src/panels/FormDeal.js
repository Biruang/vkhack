import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { FormLayout, Button, Textarea, Input } from '@vkontakte/vkui';


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
        this.setState({ [name]: value });
      }

    render() {
        const { deal } = this.state;
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
                    maxLength='40'
                    status={deal ? 'valid' : 'error'}
                    bottom={deal ? '' : 'Введите название!'}
                    />
                    
                    <Textarea 
                    placeholder="Введите описание"
                    maxLength="150"
                    />
                    
                    <Button onClick={this.props.go} data-to="home">Сохранить</Button>
                </FormLayout>
            </Panel>
        )
    }


}

export default FormDeal;
