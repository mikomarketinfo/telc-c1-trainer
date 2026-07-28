/**
 * ==========================================================
 * Knowledge Engine
 * ==========================================================
 */

export class KnowledgeEngine {

    static cache = new Map();

    static async load(grammarId) {

        if (this.cache.has(grammarId)) {

            return this.cache.get(grammarId);

        }

        const response = await fetch(

            `../data/knowledge/${grammarId}/de.json`

        );

        if (!response.ok) {

            throw new Error(

                `Knowledge "${grammarId}" not found.`

            );

        }

        const data = await response.json();

        this.cache.set(

            grammarId,

            data

        );

        return data;

    }

}