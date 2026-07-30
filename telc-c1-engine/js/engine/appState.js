/**
 * ==========================================================
 * Global Application State
 * ==========================================================
 */

const state = {

    currentTest: null,

    answers: {},

    score: null,

    currentModule: null,

    currentPage: "test",

    timer: null

};

export function getState(){

    return state;

}

export function setCurrentTest(test){

    state.currentTest = test;

}

export function setAnswer(questionId,value){

    state.answers[questionId] = value;

}

export function getAnswers(){

    return state.answers;

}

export function clearAnswers(){

    state.answers = {};

}

export function setScore(score){

    state.score = score;

}

export function setCurrentPage(page){

    state.currentPage = page;

}