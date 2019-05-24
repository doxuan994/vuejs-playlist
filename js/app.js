new Vue({
    el: "#vue-app",
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://www.google.com/',
        websiteTag: '<a href="https://www.google.com/">Google</a>',
        age: 25,
        x: 0,
        y: 0

    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        },

        add: function(inc) {
            this.age += inc;
        },

        subtract: function(dec) {
            this.age -= dec;
        },


        updateXY: function(evt) {
            this.x = evt.offsetX;
            this.y = evt.offsetY;
        }
    }

});
