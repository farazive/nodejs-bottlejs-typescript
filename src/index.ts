'use strict';


import {Kernel} from "./kernel/kernel";

/**
 * @name Application
 * @class
 */
class Application {
    constructor(private kernel: Kernel) {
    }

    getContainer() {
        return this.kernel.getContainer();
    }

    boot() {
        return this.kernel.boot();
    }
}

// Prepare
const kernel = new Kernel();
const app = new Application(kernel);

//comment manual app booting with running lambda
app.boot();

// log to cloudfront
console.log('cloudfront log: ' + app.getContainer().talk.talkMethod("faraz"));

// Run lambda
export let handler = async function (event, context, callback) {

    app.boot();
    return app.getContainer().talk.talkMethod("faraz");
};
