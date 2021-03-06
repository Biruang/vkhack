import React from 'react';
import List from '@vkontakte/vkui/dist/components/List/List';
import PropTypes from 'prop-types';
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Group from "@vkontakte/vkui/dist/components/Group/Group"
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Icon24ThumbDown from '@vkontakte/icons/dist/24/thumb_down';
import Icon24ThumbUp from '@vkontakte/icons/dist/24/thumb_up';
import connect from "@vkontakte/vk-connect";

let url = "http://astarott.beget.tech/";


class DealsLists extends React.Component {

    async sendVote(type, id){
        let data = await connect.sendPromise("VKWebAppGetUserInfo");
        console.log(data);

        fetch(url + data.id + "/acts/vote/"+ id + "/" + type, {method: "PUT"})
    }

    render() {
        const Cells = this.props.deals.map(deal => {
            return (
                <Cell
                    size="l"
                    multiline
                    description={deal.description}
                    key={deal.id}
                    bottomContent = {
                        <div style={{ display: 'flex', justifyContent: 'center'}}>
                            <Button size="m" onClick={() => this.sendVote("plus", deal.id)} level="commerce"><Icon24ThumbUp /></Button>
                            <Button size="m" onClick={() => this.sendVote("minus", deal.id)}  level="destructive" style={{ marginLeft: '1rem' }}><Icon24ThumbDown /></Button>
                        </div>
                    }
                >
                    {deal.name}
                </Cell>)
        });

        return (
            <Group>
                <List>
                    {Cells}
                </List>
            </Group>
        )
    }
}

DealsLists.propTypes = {
    deals: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        photo: PropTypes.string,
        karma: PropTypes.number
    }))
};

export default DealsLists;