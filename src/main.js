import Kdu from 'kdu'
import App from './App.kdu'
import KduResource from 'kdu-resource'

Kdu.use(KduResource);

// Custom directives
Kdu.directive('rainbow', {
  bind(el, binding, knode) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
})

Kdu.directive('theme', {
  bind(el, binding, knode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }

    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

new Kdu({
  el: '#app',
  render: h => h(App)
})
