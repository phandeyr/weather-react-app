import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { convertKelvinToCelcius, formatDateTime, capitaliseFirstLetter } from '../common/utils.js'

class DailyWeather extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='daily_weather_scrolling'>
        {this.props.daily.slice(1).map((item, index) =>
          <Card key={index}>
            <Card.Content>
              <Card.Header>{formatDateTime(item.dt, 'daily')}</Card.Header>
              <Card.Meta>{capitaliseFirstLetter(item.weather[0].description)}</Card.Meta>
              <img alt='icon' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}/>
              <Card.Description>{convertKelvinToCelcius(item.temp.day)}&deg;C</Card.Description>
            </Card.Content>
          </Card>
        )}
      </div>
    )
  }
}

export default DailyWeather
