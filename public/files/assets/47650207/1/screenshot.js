// NOTE: THIS SCRIPT ONLY WORKS IF 'PRESERVE DRAWING BUFFER' IS ENABLED IN PROJECT SETTINGS

var Screenshot = pc.createScript('screenshot');

Screenshot.prototype.initialize = function() {
    this._triggerScreenshot = false;
    this._window = null;
    this.app.on('ui:takeScreenshot', function () {
        this._triggerScreenshot = true;
        
        this._window = window.open('', '');
        this._window.document.title = "Screenshot";
        this._window.document.body.style.margin = "0";
        this._window.close();
    }, this);
    
    this.app.on('postrender', this.postRender, this);
};

Screenshot.prototype.takeScreenshot = function () {
    var canvas = this.app.graphicsDevice.canvas;

    let link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "Screenshot.png";
	link.click();
};

Screenshot.prototype.postRender = function () {
    if (this._triggerScreenshot) {
        this.takeScreenshot();
        this._triggerScreenshot = false;
    }
};
