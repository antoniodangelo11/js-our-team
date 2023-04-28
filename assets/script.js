/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)
*/

// ARRAY CON GLI OGGETTI
const arrTeam = [
    {
        memberName: 'Wayne Barnett',
        memberRole: 'Founder & CEO',
        memberPic: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        memberName: 'Angela Caroll',
        memberRole: 'Chief Editor',
        memberPic: 'angela-caroll-chief-editor.jpg',
    },
    {
        memberName: 'Walter Gordon',
        memberRole: 'Office Manager',
        memberPic: 'walter-gordon-office-manager.jpg',
    },
    {
        memberName: 'Angela Lopez',
        memberRole: 'Social Media Manager',
        memberPic: 'angela-lopez-social-media-manager.jpg',
    },
    {
        memberName: 'Scott Estrada',
        memberRole: 'Developer',
        memberPic: 'scott-estrada-developer.jpg',
    },
    {
        memberName: 'Barbara Ramos',
        memberRole: 'Graphic Designer',
        memberPic: 'barbara-ramos-graphic-designer.jpg',
    },
];

// STAMPO L'ARRAY SU CONSOLE
console.log(arrTeam);

// STAMPO L'ARRAY SUL DOM
const eleListTeam = document.querySelector('#list_team');

// const eleName = document.querySelector('member_name');
// const eleRole = document.querySelector('member_role');
// const elePic = document.querySelector('member_pic');

printList(arrTeam, eleListTeam);


/*FUNZIONI*/

function printList(arrTeam, eleContainer) {
	eleContainer.innerHTML = '';
	for (let i = 0; i < arrTeam.length; i++) {
        let objTeam = arrTeam[i];
        eleContainer.innerHTML += `<li>Nome membro: ${objTeam.memberName} Ruolo: ${objTeam.memberRole} Foto: ${objTeam.memberPic}</li>`;
    }
}