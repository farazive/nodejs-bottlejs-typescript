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
        this.kernel.boot();
    }
}

// Prepare
const kernel = new Kernel();
const app = new Application(kernel);


// Run
app.boot();