/* ICONS */
/* 
* Milestone 1
* Partendo dalla seguente struttura dati, 
* mostriamo in pagina tutte le icone disponibili come da layout.
*
* Milestone 2
* Coloriamo le icone per tipo
*
* Milestone 3
* Creiamo una select con i tipi di icone e usiamola per filtrare le icone 
*/

const icons =
    [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        }
    ];

icons.forEach((icon, i) => {
    const el = `
        <div class="card">
            <i class="icon ${icon.family} ${icon.prefix}${icon.name}"></i>
            <p>${icon.name}</p>
        </div>`;

    if (icon.type == 'animal') {
        //this.type.classList.add('blue');
        //this.type.style.color = "#00FF00"
        console.log(this.type);
    } else if (icon.type == 'vegetable') {
        //console.log(icon.type);
    } else if (icon.type == 'user') {
        //console.log(this.type);
    }

    document.querySelector('.container').insertAdjacentHTML('beforeend', el);
});


/* */

