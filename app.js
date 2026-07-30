new Kdu({
  el: "#kdu-app",
  data: {
    name: "NKDuy",
    job: "Full-stack Software Engineer"
  },
  methods: {
    greet: function (time) {
      return "Good " + time + ", " + this.name;
    }
  }
})