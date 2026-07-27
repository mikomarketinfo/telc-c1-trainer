/**
 * ==========================================================
 * Gap Renderer
 * ==========================================================
 */

export function renderGap(number){

    return `

<select class="gap-select"

data-gap="${number}">

<option value="">

---</option>

</select>

`;

}