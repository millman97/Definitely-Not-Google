// ********************************************
// SETUP
const btn = document.querySelector('button');
const form = document.querySelector('form');

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitPet);

// Fetch all pets as soon as app is loaded
getAllPets();

// ********************************************
// Pets Flow
// index
function getAllPets(){
    fetch('http://localhost:3000/pets')
        .then(r => r.json())
        .then(appendPets)
        .catch(console.warn)
};

// create
function submitPet(e){
    e.preventDefault();
    console.log(e.target.petNameText.value);
    const petData = {
        name: e.target.petNameText.value,
        age: e.target.petAge.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(petData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/pets', options)
        .then(r => r.json())
        .then(appendPet)
        .catch(console.warn)
};

// helpers
function appendPets(pets){
    pets.forEach(appendPet);
};

function appendPet(petData){
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${petData.name} || Age: ${petData.age}`
    const petsList = document.querySelector('ul');
    petsList.append(newLi);
};

// ********************************************

// MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:3000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    const msg = document.createElement('p');
    msg.textContent = msgText;
    msg.style.color = 'red';
    document.body.append(msg);
};

// ********************************************

