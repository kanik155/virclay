var Ui = pc.createScript('ui');

Ui.attributes.add('css', { type: 'asset', assetType: 'css' });
Ui.attributes.add('html', { type: 'asset', assetType: 'html' });

Ui.prototype.initialize = function() {
    var self = this;
    var style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML = this.css.resource || '';
    this.div = document.createElement('div');
    this.div.classList.add('container');
    this.div.innerHTML = this.html.resource || '';
    document.body.appendChild(this.div);
    
    var app = new Vue({
        el: '#app',
        data: {
            fullscreen: window.document.fullscreenElement
        },
        created() {
            document.addEventListener("fullscreenchange", this.fullscreenChange, false);
        },
        methods: {
            requestFullscreen: function() {
                document.body.requestFullscreen();
            },
            exitFullscreen: function() {
                document.exitFullscreen();
            },
            fullscreenChange: function() {
                if(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) {
                    this.fullscreen = true;
                }else{
                    this.fullscreen = false;
                }
            },
            takeScreenshot: function() {
                self.app.fire('ui:takeScreenshot');
            },
            showHelp: function(e) {
                let target = e.currentTarget.getAttribute('data-target');
                console.log(target);
                var $target = document.getElementById(target);
                $target.classList.add('is-active');
            },
            closeHelp: function(e) {
                let target = e.currentTarget.parentElement;
                target.classList.remove('is-active');
            }
        }
    });
    
    document.getElementById('microphone-btn').onclick = function(){
        console.log('microphone-btn');
    };
    
    document.getElementById('video-btn').onclick = function(){
        console.log('video-btn');
    };
    
    document.getElementById('screenshare-btn').onclick = function(){
        console.log('screenshare-btn');
    };
    
    document.getElementById('vr-btn').onclick = function(){
        console.log('vr-btn');
    };
    
    document.getElementById('fpv-btn').onclick = function(){
        console.log('fpv-btn');
    };
    
    document.getElementById('orbit-btn').onclick = function(){
        console.log('orbit-btn');
    };
    
    document.getElementById('play-btn').onclick = function(){
        console.log('play-btn');
    };
    
    document.getElementById('share-btn').onclick = function(){
        console.log('share-btn');
    };
};

Ui.prototype.update = function(dt) {
};


