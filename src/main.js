import Kdu from 'kdu'
import App from './App.kdu'

export const bus = new Kdu();

new Kdu({
  el: '#app',
  render: h => h(App)
})
