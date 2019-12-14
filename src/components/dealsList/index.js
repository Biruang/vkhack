import React from 'react'
import PropTypes from 'prop-types'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import List from '@vkontakte/vkui/dist/components/List/List'
import Deal from "./deal";

function DealsListComponent(props) {

    const Deals = props.deals.map(deal => {
        return(
            <Deal key={deal.id} name={deal.name} description={deal.description}/>
        )
    })

    return(
        <React.Fragment>
            <Div>
                <List>
                    {Deals}
                </List>
            </Div>
        </React.Fragment>
    )
}

DealsListComponent.propTypes = {
    deals:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }))
}

export default DealsListComponent;