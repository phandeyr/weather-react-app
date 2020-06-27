  /**
   * Converts temp from kelvin to celcius and returns it
   * @param {int} temp Integer value to convert
   */
  export const convertKelvinToCelcius = (temp) => {
    temp = temp - 273.15
    return parseInt(temp)
  }

  /**
   * Converts timestamp to date and returns the formatted date or time
   * @param {int} timestamp
   */
  export const formatDateTime = (timestamp, option) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dailyDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const dateMS = new Date(timestamp * 1000)
    const weekday = dateMS.getDay()
    const date = dateMS.getDate()
    const month = dateMS.getMonth()
    const year = dateMS.getFullYear()

    if (option === 'date') {
      return `${days[weekday]}, ${date} ${months[month]} ${year}`
    } else if (option === 'time') {
      return padZero(dateMS.getHours()) + ':' + padZero(dateMS.getMinutes())
    } else {
      return `${dailyDays[weekday]} ${date}`
    }
  }

  /**
   * Pads the integer value with a zero if it is less than 10
   * @param {int} value Value to check
   */
  export const padZero = (value) => {
    return value < 10 ? `0${value}` : value
  }

  /**
   * Accepts a string and returns it with the first letter capitialised
   * @param {string} value String value to capitalise
   */
  export const capitaliseFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
