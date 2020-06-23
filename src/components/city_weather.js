import { Component } from 'react'

class CityWeather extends Component {
  render () {
    const city = this.props.match.params.city
    return `City ${city}`
  }
}

export default CityWeather
