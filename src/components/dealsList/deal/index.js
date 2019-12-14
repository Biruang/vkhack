import React from 'react'
import PropTypes from 'prop-types'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import Button from "@vkontakte/vkui/dist/components/Cell/Cell";
import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal"
import Div from "@vkontakte/vkui/dist/components/Div/Div"
import Icon24ThumbUp from '@vkontakte/icons/dist/24/thumb_up';
import Icon24ThumbDown from '@vkontakte/icons/dist/24/thumb_down';
import Icon24User from "@vkontakte/icons/dist/24/user"

import './style.css'

class Deal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {name, description} = this.props;
        return(
            <Cell
                className="card"
                size="l"
                description={description}
                asideContent={<Icon24MoreHorizontal />}
                before={<Icon24User />}
                bottomContent={
                    <div style={{ display: 'flex' }}>
                        <Div>
                            <Button level="commerce" size="m"><Icon24ThumbUp /></Button>
                        </Div>
                        <Div>
                            <Button level="destructive" size="m" style={{ marginLeft: 8 }}><Icon24ThumbDown /></Button>
                        </Div>
                    </div>
                }
            >
                {name}
            </Cell>
        )
    }
}

Deal.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Deal;