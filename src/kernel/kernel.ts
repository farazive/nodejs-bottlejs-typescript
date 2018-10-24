'use strict';

import * as Bottle from "bottlejs";
import {Container} from "./container";
import {SayHello} from "../service/say-hello";
import {SayBye} from "../service/say-bye";
import {Talk} from "../service/talk";
import {IContainer} from "bottlejs";

declare module "bottlejs" { // Use the same module name as the import string
    interface IContainer {
        sayHello: SayHello;
        sayBye: SayBye;
        talk: Talk
    }
}

/**
 * @name Kernel
 * @class
 */
export class Kernel {

    private container: IContainer;

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

    getContainer() {
        return this.container;
    }

    boot() {
        console.log('kernel booted');
        // return this.container.talk.talkMethod("faraz");
    }
}
