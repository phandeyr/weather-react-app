import React, { Component } from 'react'
import { List, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class CityList extends Component {
  render () {
    // Hard-coded array of cities with their corresponding latitude and longitude
    const cities = [
      { city: 'Wolverhampton', 'lat': 52.586971, 'lon': -2.128820 },
      { city: 'Birmingham', 'lat': 33.518589, 'lon': -86.810356 },
      { city: 'Manchester', 'lat': 53.480759, 'lon': -2.242631 },
      { city: 'London', 'lat': 51.507351, 'lon': -0.127758 }
    ]

    return (
      <div className='city'>
        <List divided verticalAlign='middle'>
          {cities.map((city, index) =>
            <List.Item key={index} onClick={() => this.props.history.push(`/weather/${city.city}`, { data: city } )}>
              <List.Content floated='right'>
                <Icon className='chevron right icon'/>
              </List.Content>
              <List.Content>
                <List.Header>{city.city}</List.Header>
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
