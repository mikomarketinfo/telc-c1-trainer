/**
 * ==========================================================
 * TELC C1 Engine
 * Test Validator
 * ==========================================================
 */

export class TestValidator {

    /**
     * Validate complete test object.
     * @param {Object} test
     * @returns {{valid:boolean,errors:string[]}}
     */
    static validate(test){

        const errors=[];

        if(!test){

            errors.push("Test object is missing.");

            return{

                valid:false,

                errors

            };

        }

        this.validateMeta(test,errors);

        this.validateContent(test,errors);

        this.validateQuestions(test,errors);

        return{

            valid:errors.length===0,

            errors

        };

    }

    static validateMeta(test,errors){

        if(!test.meta){

            errors.push("Missing meta section.");

            return;

        }

        const required=[

            "id",
            "exam",
            "module",
            "level",
            "title"

        ];

        required.forEach(field=>{

            if(!(field in test.meta)){

                errors.push(

                    `Missing meta.${field}`

                );

            }

        });

    }

    static validateContent(test,errors){

        if(!test.content){

            errors.push(

                "Missing content section."

            );

        }

    }

    static validateQuestions(test,errors){

        if(

            !Array.isArray(test.questions)

        ){

            errors.push(

                "questions must be an array."

            );

            return;

        }

        if(test.questions.length===0){

            errors.push(

                "Test has no questions."

            );

            return;

        }

        test.questions.forEach(

            (question,index)=>{

                this.validateQuestion(

                    question,

                    index,

                    errors

                );

            }

        );

    }

    static validateQuestion(

        question,

        index,

        errors

    ){

        if(question.id===undefined){

            errors.push(

                `Question ${index+1}: missing id.`

            );

        }

        if(!question.text){

            errors.push(

                `Question ${index+1}: missing text.`

            );

        }

        if(

            !Array.isArray(question.options)

        ){

            errors.push(

                `Question ${index+1}: options must be array.`

            );

        }

        if(

            question.correct===undefined

        ){

            errors.push(

                `Question ${index+1}: missing correct answer.`

            );

        }

        if(

            !Array.isArray(question.skills)

        ){

            errors.push(

                `Question ${index+1}: missing skills.`

            );

        }

    }

}