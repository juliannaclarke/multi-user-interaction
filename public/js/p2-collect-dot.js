AFRAME.registerComponent("p2-collect-dot",{
    init: function(){

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.collectDot();
            Context_AF.newDot();
        });

        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        });
    },

    collectDot : function(){

        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); //remove the child

    },

    newDot : function(){

        let dot = document.createElement('a-entity');
        dot.setAttribute('class','clickable');
        dot.setAttribute('id','#p2Dot');
        dot.setAttribute('geometry', {primitive:'cylinder', height: '0.1', radius:'0.3'});
        dot.setAttribute('material', {color:'#00d394'});
        dot.setAttribute('sound',{src: '#boop', on: 'click'});
        dot.setAttribute('p2-collect-dot','');

        dot.setAttribute('position',{x:((Math.random()*16.0) - 8.0), y:0, z:((Math.random()*16.0) - 8.0)});

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(dot);
    }
    
});