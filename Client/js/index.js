
const form = document.querySelector('form')
const btn = document.querySelector('#doSomething')



if(btn){
btn.addEventListener('click', (e)=> {
    window.location.href = "./search.html"
})
}

if(form){
//this is the random search bar function
form.addEventListener('submit', (e)=>{

    const linkData = e.target.elements.searchTerm.value

    
    fetch(`http://localhost:3000/${linkData}/random`)
    .then(resp => resp.json())
    .then((data)=>{
        window.location.href = data.link
    })
    .catch(console.warn)  

})
}

function getRandom() {

  fetch('http://localhost:3000/cakes')
    .then(resp => resp.json())
    .then((data)=>{
        
        appendLinks(data)
    })

    .catch(console.warn)
}

function appendLink(data){
    const newLi = document.createElement('li')
    const newLink = document.createElement('a');
    newLink.href = data.link
    newLi.textContent = newLink
    const linkList = document.querySelector('ul');
    newLink.append(newLi);
    linkList.append(newLink);
};

function appendLinks(link){
    console.log(link)
    link.forEach(appendLink);
};
