
const form = document.querySelector('form')
const btn = document.querySelector('#doSomething')
const homepage = document.querySelector('#homepage')
const searchResults = document.querySelector('#searchResults')

console.log(homepage);

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const linkData = e.target.elements.searchTerm.value

    fetch(`http://localhost:3000/${linkData}`)
    .then(resp => resp.json())
    .then((data)=>{
        let html = '';
        data.forEach(datum => {
        let htmlSegment = ` <li>
                                <p>${datum.link}</p>
                                <h2> <a href="${datum.link}">${datum.title}</a> </h2>
                                <p>${datum.description}</p>
                            </li>
                            <br>`;

        html += htmlSegment;
        console.log(html);
    });

    let container = document.querySelector('#resultsList');
    container.innerHTML = html;
    })

    homepage.style.display = 'none';
    searchResults.style.display = 'block';
})


//this is the random search bar function
btn.addEventListener('click', (e)=>{
    e.preventDefault();

    const linkData = document.querySelector('input').value;
    
    
    fetch(`http://localhost:3000/${linkData}/random`)
    .then(resp => resp.json())
    .then((data)=>{
        window.location.href = data.link
    })
    .catch(console.warn)  

})


function getRandom() {

  fetch(`http://localhost:3000/${linkData}`)
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
