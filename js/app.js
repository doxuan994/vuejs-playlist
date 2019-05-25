new Vue({
    el: "#vue-app",
    data: {
        name: 'Jack',
        job: 'Ninja',
        website: 'https://www.google.com/',
        websiteTag: '<a href="https://www.google.com/">Google</a>',
        age: 20,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryo', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ]




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
        },

        click: function() {
            alert('You clicked!');
        },

        logName: function() {
            console.log('You entered your name');


        },

        logAge: function() {
            console.log('You entered your age');
        },





    },
    computed: {

        addToA: function() {
            console.log('Add to A');
            return this.a + this.age;
        },


        addToB: function() {
            console.log('Add to B');
            return this.b + this.age;
        },

        compClasses: function() {

            return {
                available: this.available,
                nearby: this.nearby
            }

        }

    }

});
