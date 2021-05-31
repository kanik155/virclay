var Raycast = pc.createScript('raycast');

Raycast.prototype.initialize = function() {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.mouseDown, this);
    
    if(this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.touchStart, this);
    }
};

Raycast.prototype.mouseDown = function (e) {
    this.doRaycast(e);
};

Raycast.prototype.touchStart = function (e) {
    if(e.touches.length == 1) {
        this.doRaycast(e.touches[0]);
    }
    e.event.preventDefault();
};

Raycast.prototype.doRaycast = function (screenPosition) {
    var from = this.entity.getPosition();
    var to = this.entity.camera.screenToWorld(screenPosition.x, screenPosition.y, this.entity.camera.farClip);
    
    var result = this.app.systems.rigidbody.raycastFirst(from, to);
    
    if(result) {
        var hitEntity = result.entity;
        
        if (hitEntity.name == 'MovableObject') {
            console.log(hitEntity);
        }
    }
};