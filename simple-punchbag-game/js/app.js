new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false,
        background: 'green'
    },
    methods: {
        punch: function(sound) {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
            if (this.health <= 50) {
                this.background = 'crimson';
            }
            if (this.health > 0) {
                this.playSound(sound);
            }
            if (this.ended) {
                this.alertRestart();
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
            this.background = 'green';
        },
        playSound: function(sound) {
            if (sound) {
                let audio = new Audio(sound);
                audio.play();
            }
        },
        alertRestart: function() {
            alert('You lose!');
            this.restart();
        }
    },
    computed: {

    }
});
