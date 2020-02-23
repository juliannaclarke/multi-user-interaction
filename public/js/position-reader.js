AFRAME.registerComponent('position-reader', {
    tick: function () {
  
      // `position` is a three.js Vector3.
      console.log(this.el.object3D.position);
    }
  });