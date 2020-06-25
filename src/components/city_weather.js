import React, { Component } from 'react'
import config from '../config.js'
import { Icon } from 'semantic-ui-react'

class CityWeather extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      data: props.location.state.data,
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
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.data.lat}&lon=${this.state.data.lon}&exclude=minutely&appid=${config.API_KEY}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          results: data,
          isLoading: false
        })
      })
      .catch(console.log)
  }

  /**
   * Converts temp from kelvin to celcius and returns it
   * @param {int} temp Integer value to convert
   */
  convertKelvinToCelcius (temp) {
    temp = temp - 273.15
    return parseInt(temp)
  }

  /**
   * Converts timestamp to date and returns the formatted date or time
   * @param {int} timestamp
   */
  formatDateTime (timestamp, option) {
    const days = ['Sunday', 'Monday', 'Tuesdy', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const dateMS = new Date(timestamp * 1000)
    const weekday = dateMS.getDay()
    const date = dateMS.getDate()
    const month = dateMS.getMonth()
    const year = dateMS.getFullYear()

    if (option === 'date') {
      return `${days[weekday]}, ${date} ${months[month]} ${year}`
    } else {
      return dateMS.getHours() + ':' + dateMS.getMinutes()
    }
  }

  render () {
    if (this.state.isLoading) {
      return (
        <div>
          <Icon className='spinner icon' size='big'/><br/>
          <p>Loading</p>
        </div>
      )
    }

    const current = this.state.results.current
    return (
      <div className='current_weather'>
        <h3>{this.formatDateTime(current.dt, 'date')}</h3>
        <h1>{this.formatDateTime(current.dt, 'time')}</h1>
        <h3>{this.state.data.city}</h3>
        <h4>{current.weather[0].main}</h4>
        <p id='temp'>{this.convertKelvinToCelcius(current.temp)}&deg;C</p>
      </div>
    )
  }
}

export default CityWeather
