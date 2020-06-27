import React, { Component } from 'react'
import config from '../config.js'
import { Icon } from 'semantic-ui-react'
import { convertKelvinToCelcius, formatDateTime, capitaliseFirstLetter } from '../common/utils.js'

class CurrentWeather extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      results: []
    }
  }

  componentDidMount () {
    this.getWeather()
  }

  /**
   * Invokes openweathermap api to retrieve weather results
   */
  getWeather () {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.data.lat}&lon=${this.props.data.lon}&exclude=minutely&appid=${config.API_KEY}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          results: data,
          isLoading: false
        })
        this.props.handleState(this.state.results.daily)
      })
      .catch(console.log)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <div className='current_weather'>
          <Icon className='spinner icon' size='big'/><br/>
          <p>Loading</p>
        </div>
      )
    }

    const current = this.state.results.current
    return (
      <div className='current_weather'>
        <h3>{formatDateTime(current.dt, 'date')}</h3>
        <h1>{formatDateTime(current.dt, 'time')}</h1>
        <h3>{this.props.data.city}</h3>
        <p className='weather_text'>{capitaliseFirstLetter(current.weather[0].description)}</p>
        <img alt='icon' src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}/>
        <p className='weather_text' id='temp'>{convertKelvinToCelcius(current.temp)}&deg;C</p>
      </div>
    )
  }
}

export default CurrentWeather
