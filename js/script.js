console.log('HI, I am java and I am working fine');

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.

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


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe.



    for (let key in personOne) {

        let newDiv = document.createElement('div');
        let box = document.querySelector('.box');
        box.classList.add('contenitore');
        newDiv = personOne[key];
        box.append(newDiv);
    }

    for (let key in personTwo) {

        let newDiv = document.createElement('div');
        let box = document.querySelector('.box');
        box.classList.add('contenitore');
        newDiv = personTwo[key];
        box.append(newDiv);
    }

    for (let key in personThree) {

        let newDiv = document.createElement('div');
        let box = document.querySelector('.box');
        box.classList.add('contenitore');
        newDiv = personThree[key];
        box.append(newDiv);
    }

    for (let key in personFour) {

        let newDiv = document.createElement('div');
        let box = document.querySelector('.box');
        box.classList.add('contenitore');
        newDiv = personFour[key];
        box.append(newDiv);
    }

    for (let key in personFive) {

        let newDiv = document.createElement('div');
        let box = document.querySelector('.box');
        box.classList.add('contenitore');
        newDiv = personFive[key];
        box.append(newDiv);
    }

    for (let key in personSix) {

        let newDiv = document.createElement('div');
        let box = document.querySelector('.box');
        box.classList.add('contenitore');
        newDiv = personSix[key];
        box.append(newDiv);
    }



// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva.

// BONUS 2:
// Organizzare i singoli membri in card/schede.
