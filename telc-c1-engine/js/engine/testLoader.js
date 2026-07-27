/**
 * ==========================================================
 * TELC C1 Engine
 * Test Loader
 * ==========================================================
 */

import {TestValidator}

from "./testValidator.js";

export class TestLoader{

    /**
     * Load JSON test.
     * @param {string} path
     * @returns {Promise<Object>}
     */
    static async load(path){

        const response=

            await fetch(path);

        if(!response.ok){

            throw new Error(

                `Cannot load ${path}`

            );

        }

        const test=

            await response.json();

        const validation=

            TestValidator.validate(test);

        if(!validation.valid){

            console.error(

                validation.errors

            );

            throw new Error(

                "Test validation failed."

            );

        }

        return test;

    }

}