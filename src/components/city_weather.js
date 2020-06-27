import React, { Component } from 'react'
import CurrentWeather from './current_weather.js'
import DailyWeather from './daily_weather.js'


class CityWeather extends Component {
  constructor (props) {
    super(props)
    this.handleState = this.handleState.bind(this)
  }

  handleState (daily) {
    this.setState({
      daily: daily
    })
  }

  render () {
    if (this.state !== null) {
      return (
        <div>
          <CurrentWeather handleState={this.handleState} data={this.props.location.state.data} />
          <DailyWeather daily={this.state.daily} />
        </div>
      )
    }

    return (
      <div>
        <CurrentWeather handleState={this.handleState} data={this.props.location.state.data} />
      </div>
    )
  }
}

export default CityWeather
