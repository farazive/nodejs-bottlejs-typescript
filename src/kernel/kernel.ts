'use strict';

import {Container} from "./container";

const Bottle = require("bottlejs");

/**
 * @name Kernel
 * @class
 */
export class Kernel {

    private container;

    /**
     * Builds the Kernel and container
     */
    constructor() {

        // Create builder
        const containerBuilder = new Bottle();

        // Perform DI
        new Container(containerBuilder);

        // Execute deferred functions
        containerBuilder.resolve({});

        // Store container
        this.container = containerBuilder.container;
    }

    boot() {
        console.log(this.container.talk.talk("faraz"));
    }
}
