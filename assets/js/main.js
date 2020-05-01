var dataFromDB = [
    {id: "1",
    title: "JS is amazing",
    body: "JS is amazing and so easy to learn. I like it a lot!",
    author: "CB"},
    {id: "2",
    title: "DOM manipulation is easy",
    body:"lorem7 JS is amazing and so easy to learn. I like it a lot!",
    author: "Anonymous"},
    {id: "3",
    title: "CSS is nice",
    body:"To style your HTML page is so much fun! I like playing with colos and images!",
    author: "AB"},
    ];



function createArticleElent(title, body, author, id){
    var articleElement=document.createElement("article");

    var headerElement=document.createElement("header");
    articleElement.appendChild(headerElement);
    headerElement.innerHTML=title;

    var bodyElement=document.createElement("body");
    articleElement.appendChild(bodyElement);
    bodyElement.innerHTML=body;

    var footerElement=document.createElement("footer");
    articleElement.appendChild(footerElement);
    footerElement.innerHTML=author;

    var buttonElement=document.createElement("button");
    articleElement.appendChild(buttonElement);
    buttonElement.textContent="Delete";
    // el.setAttribute('data-foo', 'Hello World!');
    buttonElement.setAttribute("data-id", id);

   
    
    return articleElement;
}

function addComment(e){
    e.preventDefault();
    // console.dir(e);
    var titleInput=document.querySelector(".inputComment input:first-of-type");
    console.dir(titleInput.value);
    var bodyInput=document.querySelector(".inputComment textarea");
    console.dir(bodyInput.value);
    var authorInput=document.querySelector(".inputComment input:last-of-type");
    console.dir(authorInput.value);
    var theId = dataFromDB.length+1;
    console.log(theId);
    var newArrayElement = { 
        id : theId, 
        title : titleInput.value, 
        body : bodyInput.value, 
        author : authorInput.value};
    console.log(newArrayElement);
    dataFromDB.push(newArrayElement);
    console.log (dataFromDB);
    var newArticle=createArticleElent(titleInput.value, bodyInput.value, authorInput.value, theId);
    sectionElement.appendChild(newArticle);
    var deleteBut=document.querySelectorAll("[data-id]");
    console.log(deleteBut);
    for(i=0; i<deleteBut.length; i++){
        deleteBut[i].addEventListener("click", deleteElement);
    }
    }

function addOnPageComentsFromDB(){
   
    // console.log(commentList);
    for (i=0; i<dataFromDB.length; i++){
        var newArticle = createArticleElent(dataFromDB[i].title, dataFromDB[i].body, dataFromDB[i].author, dataFromDB[i].id);
        sectionElement.appendChild(newArticle);

    }
}
function deleteElement () {
    var currentElement=this.parentElement;
    currentElement.remove();
}
function addTextOnConsol(e){
    // console.dir(this);
    // console.dir(e);
    serchText=document.querySelector(".search input");
    // console.dir(serchText);
    console.log(serchText.value);
}

function executions(){
    console.log('loaded!');
    addOnPageComentsFromDB();
    var submitButton=document.querySelector(".inputComment button:first-of-type");
    var searchButton=document.querySelector(".search-button");
    submitButton.addEventListener("click", addComment);    var searchButton=document.querySelector(".search-button");
    var searchInputBar=document.querySelector(".search input");
    searchButton.addEventListener("click", addTextOnConsol);
    searchInputBar.addEventListener("change", addTextOnConsol);
    var restoreBut=document.querySelector(".restore");
    restoreBut.addEventListener("click", addOnPageComentsFromDB);
}
var sectionElement=document.querySelector(".comments");

document.addEventListener('DOMContentLoaded', executions);