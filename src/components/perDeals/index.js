import React from 'react';
import { Group, List, Cell, Counter } from '@vkontakte/vkui';
import PropTypes from 'prop-types';


class PerDeals extends React.Component {

    render() {
        return(
            <Group title="Список поступков" >
                <List>
                {this.props.arrayDeals.map(({id, name, karma}, i) => 
                    <Cell
                        key={i}
                        size="l"
                        indicator={<Counter type="primary">{karma}</Counter>}
                    >
                        {name}
                    </Cell>
                )}
            </List>
            </Group>
        )
    }
}

PerDeals.propTypes = {
    arrayDeals: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        karma: PropTypes.number
      }))
};

export default PerDeals;