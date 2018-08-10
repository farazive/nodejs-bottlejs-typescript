'use strict';

import Bottle = require("bottlejs");
import {SayHello} from "../service/say-hello";
import {SayBye} from "../service/say-bye";
import {Talk} from "../service/talk";

/**
 * Performs Container DI
 * @param {Bottle} di
 */
export class Container {
    constructor(private di: Bottle) {
        di.service('sayHello', SayHello);
        di.service('sayBye', SayBye);
        di.service(
            'talk',
            Talk,
            'sayHello',
            'sayBye'
        );
    }
}
