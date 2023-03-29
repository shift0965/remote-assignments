import {tags, blocks, works} from "./info.js"


const search = document.getElementById("search");
function googleSearch(item){
    window.open('https://www.google.com/search?q='+item);
}

search.addEventListener('keypress', function(e){
    if (e.keyCode == 13){
    e.preventDefault();
    googleSearch(search.value);
    search.value = "";
    }
})




const tagsDiv = document.querySelector('.tags');
tagsDiv.innerHTML = tags.map(tag => `<div class="tag"> ${tag}</div>`).join(' ')

const blocksDiv = document.querySelector('.bks');
blocksDiv.innerHTML = blocks.map(bk => 
    `
    <div class="bk">
        <div class="subtit">${bk.subtitle}</div>
        <div class="title">${bk.title}</div>
        <div class="des">${bk.description}</div> 
        <div class="icon">${bk.icon}</div>           
    </div> 
    `
).join('')

const worksDiv = document.querySelector('.works');
worksDiv.innerHTML = works.map(work => 
    `
    <div class="work">
        <div class="img-container">
            <img src="${work.img}" alt="${work.img}">
        </div>
        <div class="title">${work.title}</div>
    </div>
    `
).join('')

    

