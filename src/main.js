import Kdu from 'kdu'
import App from './App.kdu'
import KduResource from 'kdu-resource'

Kdu.use(KduResource);

new Kdu({
  el: '#app',
  render: h => h(App)
})
