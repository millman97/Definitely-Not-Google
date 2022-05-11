
console.log(linkData)

document.addEventListener('DOMContentLoaded', ()=>{
    getRandom()

})

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
      link.forEach(appendLink);
  };
  
  