new Kdu({
  el: "#kdu-app",
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  computed: {
    addToA: function () {
      return this.a + this.age;
    },
    addToB: function () {
      return this.b + this.age;
    }
  }
})