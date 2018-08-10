'use strict';

/**
 * @name AbstractGreeting
 * @class
 * @abstract
 */
export abstract class AbstractGreeting {
    abstract say(name: string): string;
}