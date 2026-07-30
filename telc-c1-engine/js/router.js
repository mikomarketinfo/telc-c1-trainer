/**
 * ==========================================================
 * Simple Router
 * ==========================================================
 */
import { getState } from "./engine/appState.js";

let currentPage = null;

export function registerPage(callback){

    currentPage = callback;

}

export function goBack(){

    if(currentPage){

       const state = getState();

        currentPage(

            state

        );

    }

}