Vue.component('greeting', {
    template: '<p>Hey there, I am a {{name}}. <button v-on:click="changedName">Change name</button></p>',
    data: function() {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changedName: function() {
            this.name = 'Mario';
        }
    }
});





let one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    methods: {

    },
    computed: {
        greet: function() {
            return 'Hello from app one';
        }
    }
});


let two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function() {
            one.title = "Title changed"
        }
    },
    computed: {
        greet: function() {
            return 'Hello from app two';
        }
    }
});


two.title = "Changed from outside";
