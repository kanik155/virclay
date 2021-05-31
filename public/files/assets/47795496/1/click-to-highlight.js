var ClickToHighlight = pc.createScript('clickToHighlight');

// initialize code called once per entity
ClickToHighlight.prototype.initialize = function() {

    // --- variables
    this.cameraEntity = this.entity;
    this.previous = undefined;
    
    // Add touch event only if touch is available
    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.touchStart, this);
    }else{
        
        // Add a mousedown event handler
        this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.mouseDown, this);        
    }
};

ClickToHighlight.prototype.mouseDown = function (e) {
    this.doRaycast(e);
};

ClickToHighlight.prototype.touchStart = function (e) {
    // Only perform the raycast if there is one finger on the screen
    if (e.touches.length == 1) {
        this.doRaycast(e.touches[0]);
    }
    e.event.preventDefault();
};

ClickToHighlight.prototype.doRaycast = function (screenPosition) {
    // The vec3 to raycast from
    var from = this.cameraEntity.getPosition();
    // The vec3 to raycast to 
    var to = this.cameraEntity.camera.screenToWorld(screenPosition.x, screenPosition.y, this.cameraEntity.camera.farClip);

    // Raycast between the two points
    var result = this.app.systems.rigidbody.raycastFirst(from, to);
    
    // If there was a hit, store the entity
    if (result) {
        this.app.fire('Ermis:objectOutline:add', result.entity);        
        
        if( this.previous && this.previous._guid !== result.entity._guid){
            this.app.fire('Ermis:objectOutline:remove', this.previous);
        }        
        
        this.previous = result.entity;
    } else{
        
        if( this.previous){
            this.app.fire('Ermis:objectOutline:remove', this.previous);
            
            this.previous = undefined;
        }        
    }
};
