AFRAME.registerComponent('scoreUpdate', {
    schema: {
        el: {
            type: 'selector'
        },
        score:{
            type: 'int',
            default: 0
        },
    },

    init: function () {
        let sceneEl = document.querySelector('a-scene'); 
        let scoreBoard = document.querySelector('#score');

        let p1Dots = sceneEl.querySelectorAll('#p1Dot');
        for(i = 0; i < p1Dots; i += 1){
            p1Dots[i].addEventListener('click', () => {
                this.data.score++;
                let newScore = 'Score: ' + this.data.score
                scoreBoard.setAttribute('text', 'value',  newScore)
            })
        }
    }});