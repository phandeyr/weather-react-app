import React, { Component } from 'react'
import { List, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class CityList extends Component {
  render () {
    const cities = ['Wolverhampton', 'Birmingham', 'Manchester', 'London']

    return (
      <div className='city'>
        <List divided verticalAlign='middle'>
          {cities.map((city, index) =>
            <List.Item key={index} onClick={() => this.props.history.push(`/weather/${city}`)}>
              <List.Content floated='right'>
                <Icon className='chevron right icon'/>
              </List.Content>
              <List.Content>
                <List.Header>{city}</List.Header>
                Great Britain, UK
              </List.Content>
            </List.Item>
          )}
        </List>
      </div>
    )
  }
}

export default CityList
