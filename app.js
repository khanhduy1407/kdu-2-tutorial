Kdu.component('greeting', {
  template: '<p>Hey there, I am {{ name }} . <button k-on:click="changeName">Change name</button></p>',
  data: function () {
    return {
      name: 'NKDuy'
    }
  },
  methods: {
    changeName: function () {
      this.name = 'DyGamer';
    }
  }
})

new Kdu({
  el: "#kdu-app-one"
})

new Kdu({
  el: "#kdu-app-two"
})
