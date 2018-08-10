'use strict';


import {AbstractGreeting} from "./_greeting";

/**
 * @name SayHello
 * @class
 */
export class SayHello extends AbstractGreeting {
    say(name) {
        let message = 'Hello ';
        return message + name;
    }
}
