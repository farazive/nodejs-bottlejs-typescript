'use strict';

import {SayBye} from "./say-bye";
import {SayHello} from "./say-hello";

export class Talk {

    constructor(private sayHello: SayHello, private sayBye: SayBye) {
    }

    talk(name) {
        return this.sayHello.say(name) + '\r\n' + this.sayBye.say(name);
    }
}
