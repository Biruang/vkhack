import React from 'react';
import List from '@vkontakte/vkui/dist/components/List/List';
import PropTypes from 'prop-types';
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Group from "@vkontakte/vkui/dist/components/Group/Group"

class DealsLists extends React.Component {

    render() {
        const Cells = this.props.deals.map(deal => {
            return <Cell expandable onClick={this.props.go} data-to="soloDeal" description={deal.description}>{deal.name}</Cell>
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