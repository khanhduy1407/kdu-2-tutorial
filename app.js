new Kdu({
  el: "#kdu-app",
  data: {
    name: "NKDuy",
    job: "Full-stack Software Engineer",
    website: "https://nkduy-cloud.web.app",
    websiteTag: "<a href='https://nkduy-cloud.web.app'>NKDuy Cloud</a>"
  },
  methods: {
    greet: function (time) {
      return "Good " + time + ", " + this.name;
    }
  }
})