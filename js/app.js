var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        // document.addEventListener('deviceready', app.onDeviceReady, false);
        document.addEventListener('DOMContentLoaded', app.onDeviceReady, false); //DOMContentLoaded
    },
    // deviceready Event Handler  
    onDeviceReady: function () {
        app.receivedEvent('Content ready');
        console.log("Content ready");
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
    }
};

app.initialize();