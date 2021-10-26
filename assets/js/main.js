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


icons.forEach((icon) => {

    let iconTypeClass;
    //controllo tipo icona 
    //in base alla quale assegno una classe CSS 
    //alla variabile iconTypeClass
    if (icon.type == 'animal') {
        iconTypeClass = 'blue';
    } else if (icon.type == 'vegetable') {
        iconTypeClass = 'orange';
    } else if (icon.type == 'user') {
        iconTypeClass = 'purple';
    }

    //creo elemento
    const el = `
        <div class="card">
            <i class="${iconTypeClass} ${icon.family} ${icon.prefix}${icon.name}"></i>
            <p>${icon.name}</p>
        </div>`;

    document.querySelector('.container').insertAdjacentHTML('beforeend', el);
});


//Ascolto il cambiamento di valore sulla select ed eseguo la funzione
document.getElementById("type").onchange = checkType;

function checkType() {

    //Controllo tipo scelto
    if (type.value == 'animal') {
        console.log(this.value);
        document.querySelector('.orange').style.display = "none";

    } else if (type.value == 'vegetable') {
        console.log(this.value);

    } else if (type.value == 'user') {
        console.log(this.value);

    } else {
        console.log(this.value);
    }
    //style.display = "none";
}
