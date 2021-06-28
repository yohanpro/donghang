export const getCurrentPosition = callback => new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    const onSuccess = ({ coords: { latitude, longitude } }) => {
      const payload = {
        lat: latitude,
        lng: longitude,
      }
      resolve(callback(payload))
    }
    const onError = (err) => {
      switch (err.code) {
        case err.PERMISSION_DENIED:
          alert('Please allow geolocation permission and refresh this webpage')
          break
        case err.POSITION_UNAVAILABLE:
        case err.TIMEOUT:
          alert('Position unavailable. please check your device setting.')
          break
        default:
          break
      }
      reject(err)
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }
})
