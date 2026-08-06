var one = new Kdu({
  el: "#kdu-app-one",
  data: {
    title: 'Kdu App One'
  },
  methods: {
  },
  computed: {
    greet: function () {
      return 'Hello from app one :)'
    }
  }
})

var two = new Kdu({
  el: "#kdu-app-two",
  data: {
    title: 'Kdu App Two'
  },
  methods: {
    changeTitle: function () {
      one.title = "Title changed";
    }
  },
  computed: {
    greet: function () {
      return 'Yo dudes, this is app 2 speaking to ya :)'
    }
  }
})

two.title = "Changed from outside";
