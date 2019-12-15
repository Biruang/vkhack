import React from 'react';
import { Button, Cell, Div, InfoRow } from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import './style.css';


class Period extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            arrPeriod : ['За день', 'За неделю' , 'За месяц', 'За год'],
            curIndex : 0,
        };
        this.changePeriod = this.changePeriod.bind(this);
    }
    changePeriod(act) {
        var cur = this.state.curIndex;
            if ((act === '+') && (cur + 1 < 4)) {
                this.setState({curIndex : cur+1}); 
                this.props.updatePeriod(cur+1);
            } else if ((act === '-') && (cur - 1 >= 0)) {
                this.setState({curIndex : cur-1});
                this.props.updatePeriod(cur-1);
            }
    }
    render() {
        const {arrPeriod,curIndex} = this.state;
        return(
            <Cell 
                before={<Button level="outline" className="periodBut" onClick={() => this.changePeriod('-')}> <Icon24BrowserBack/> </Button>}
                asideContent={<Button level="outline" className="periodBut" onClick={() => this.changePeriod('+')}><Icon24BrowserForward/></Button>}
            >
                <Div className="periodDiv">
                    <Button 
                        disabled
                        align="center"
                        level="outline" >
                        {arrPeriod[curIndex]}
                    </Button>
                </Div>
            </Cell>
        )
    }
}


export default Period;