"use strict";
class Table {
    constructor(cameraMode, filter, bust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.bust = bust;
    }
}
//interface provide minimum requirement extra thing we can implement other than interface
class Youtube {
    constructor(cameraMode, filter, bust, pixel) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.bust = bust;
        this.pixel = pixel;
    }
    createStory() {
        console.log('sjnsnnmsnm');
    }
}
