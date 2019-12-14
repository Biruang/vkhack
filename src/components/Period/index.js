import React from 'react';
import { Button, Cell, Div, Group } from '@vkontakte/vkui';
import './style.css';


class Period extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            arrPeriod : ['За день', 'За неделю' , 'За месяц', 'За год'],
            curIndex : 0,
        }
        this.changePeriod = this.changePeriod.bind(this);
    }
    changePeriod(act) {
        var cur = this.state.curIndex;
            if ((act == '+') && (cur + 1 < 4)) {
                this.setState({curIndex : cur+1}); 
                this.props.updatePeriod(cur+1);
            } else if ((act == '-') && (cur - 1 >= 0)) {
                this.setState({curIndex : cur-1});
                this.props.updatePeriod(cur-1);
            }
    }

    render() {
        const {arrPeriod,curIndex} = this.state;
        return(
            <Group>
            <Cell 
                before={<Button level="outline" className="periodBut" onClick={() => this.changePeriod('-')}> {"<"} </Button>}
                asideContent={<Button level="outline" className="periodBut" onClick={() => this.changePeriod('+')}>{">"}</Button>}
            >
                <Div className="periodDiv">
                    {arrPeriod[curIndex]}
                </Div>
            </Cell>
        </Group>
        )
    }
}


export default Period;