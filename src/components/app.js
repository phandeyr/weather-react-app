import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header.js'
import CityList from './city_list.js'
import CityWeather from './city_weather.js'

function App () {
  return (
    <div className='container'>
      <Header/>

      <Router>
        <Switch>
          <Route exact path='/' component={CityList}/>
          <Route path='/weather/:city' component={CityWeather}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
