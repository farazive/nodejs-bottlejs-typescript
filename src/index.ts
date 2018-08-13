'use strict';


import {Kernel} from "./kernel/kernel";

/**
 * @name Application
 * @class
 */
class Application {
    constructor(private kernel: Kernel) {
    }

    boot() {
        return this.kernel.boot();
    }
}

// Prepare
const kernel = new Kernel();
const app = new Application(kernel);

// log to cloudfront
// console.log('cloudfront log: ' + app.boot());

// Run
export let handler = async function (event, context, callback) {
    return app.boot();
};
