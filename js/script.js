console.log('HI, I am java and I am working fine');

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.

const team = [];

const personOne = {

    firstName: 'Waybe Barnett ',
    role: 'Founder & CEO ',
    image: 'wayne-bamett-founder-Comment.jpg'

}; const personTwo = {

    firstName: 'Angela Caroll ',
    role: 'Chief Editor ',
    image: 'angela-caroll-chief-editor.jpg'

}; const personThree = {

    firstName: 'Walter Gordon ',
    role: 'Office Manager ',
    image: 'walter-gordon-office-manager.jpg'

}; const personFour = {

    firstName: 'Angela Lopez ',
    role: 'Social Media Manager ',
    image: 'angela-lopez-social-media-manager.jpg'

}; const personFive = {

    firstName: 'Scott Estrada ',
    role: 'Developer ',
    image: 'scott-estrada-developer.jpg'

}; const personSix = {

    firstName: 'Barbara Ramos ',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'

};

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

for (let key in personOne) {
    
    console.log('Prima persona:', personOne[key]);
    console.log('Seconda persona:', personTwo[key]);
    console.log('Terza persona:', personThree[key]);
    console.log('Quarta persona:', personFour[key]);
    console.log('Quinta persona:', personFive[key]);
    console.log('Sesta persona:', personSix[key]);

}

// Per inserire gli oggetti nell'array

team.push(personOne); // Valore 0
team.push(personTwo); // Valore 1
team.push(personThree); // Valore 2
team.push(personFour); // Valore 3
team.push(personFive); // Valore 4
team.push(personSix); // Valore 5

// .push() può accettare anche piu elementi:

// team.push(personOne, personTwo, personThree, personFour, personFive, personSix)

// <---Verifica array di oggetti--->

console.log('Array team:', team);
console.log('Lunghezza Array;', team.length)


for (let i = 0; i <= team.length; i++) {

    console.log(team[i]); //Per vedere tutti gli oggetti insieme.

//     // Per vedere tutti gli oggetti uno ad uno 
//     console.log('Nome:', team[i].firstName)
//     console.log('Ruolo:', team[i].role)
//     console.log('Foto:', team[i].photo)

// // Versione alternativa
//     console.log('Nome:', team[i]['firstName'])
//     console.log('Ruolo:', team[i]['role'])
//     console.log('Foto:', team[i]['photo'])


    for (let key in team[i]) {
        
        console.log(key + ':', team[i][key])

    }

    
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe.

let teamList = document.querySelector('.team')

for (let i = 0; i <= team.length; i++) {
    
    // let newListItem = document.createElement('li');
    // newListItem.innerHTML = team[i].name + ' - ' + + team[i].photo;
    // teamList.append(newListItem);

    // oppure

    let newListItem = document.createElement('li');
    newListItem.innerHTML = `
    <div class="member">
        <div class="profilo-photo-container">
            ${team[i].image}
        </div>
        <h3>
            ${team[i].firstName}
        </h3>
        <h5>
            ${team[i].role}
        </5>
    </div>
    `;

}

teamList.append(newListItem);


// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva.



// BONUS 2:
// Organizzare i singoli membri in card/schede.



// Correzione esercizio 


