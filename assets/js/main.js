function commentsFromDB(){
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
        return dataFromDB;
}
function addTextOnConsol(e){
    // console.dir(this);
    // console.dir(e);
    serchText=document.querySelector(".search input");
    // console.dir(serchText);
    console.log(serchText.value);
}

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

function addCommentFromUserInput(e){
    e.preventDefault();
    // console.dir(e);
    var titleInput=document.querySelector(".inputComment input:first-of-type");
    // console.dir(titleInput);
    var bodyInput=document.querySelector(".inputComment textarea");
    // console.dir(bodyInput);
    var authorInput=document.querySelector(".inputComment input:last-of-type");
    // console.dir(authorInput);
    var newArticle=createArticleElent(titleInput.value, bodyInput.value, authorInput.value, "user");
    sectionElement.appendChild(newArticle);
    var deleteBut=document.querySelectorAll("[data-id='user']");
    console.dir(deleteBut); 
    for(i=0; i<deleteBut.length; i++){
        deleteBut[i].addEventListener("click", Delete);
    }

}

function addComentsFromDB(){
    var commentList=commentsFromDB();
    for (i=0; i<commentList.length; i++){
        var newArticle = createArticleElent(commentList[i].title, commentList[i].body, commentList[i].author, commentList[i].id);
        sectionElement.appendChild(newArticle);

    }
}

function Delete () {
    var currentElement=this.parentElement;
    currentElement.remove();
}

var sectionElement=document.querySelector(".comments");

document.addEventListener('DOMContentLoaded', function (){
    console.log('loaded!')
    addComentsFromDB();

    var searchButton=document.querySelector(".search-button");
    var searchInputBar=document.querySelector(".search input");
    searchButton.addEventListener("click", addTextOnConsol);

    var searchInputBar=document.querySelector(".search input");
    var searchInputBar=document.querySelector(".search input");
    searchInputBar.addEventListener("change", addTextOnConsol);

    var submitButton=document.querySelector(".inputComment button:first-of-type");
    submitButton.addEventListener("click", addCommentFromUserInput);
   
    var deleteButton=document.querySelectorAll("[data-id]");
    console.log(deleteButton);
    for(i=0; i<deleteButton.length; i++){
        deleteButton[i].addEventListener("click", Delete);
    }

});