'use strict';


import {AbstractGreeting} from "./_greeting";

/**
 * @name SayBye
 *  @class
 */
export class SayBye extends AbstractGreeting {
    say(name) {
        let message = 'Bye ';
        return message + name;
    }
}

