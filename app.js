new Kdu({
  el: "#kdu-app",
  data: {
    age: 23,
    x: 0,
    y: 0
  },
  methods: {
    add: function (num) {
      this.age += num
    },
    subtract: function (num) {
      this.age -= num
    },
    updateXY: function (event) {
      this.x = event.offsetX
      this.y = event.offsetY
    },
    click: function () {
      alert("You clicked me!");
    }
  }
})