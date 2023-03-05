const input=document.getElementById("input");
const input2=document.getElementById("input2");
const output=document.getElementById("output");
const button=document.getElementById("button");
const search_key=document.getElementById("search_key");
const audio=new Audio ("sounds/mixkit-fast-double-click-on-mouse-275.wav");

// search_button
function Search_Button(){
    audio.play();
    displayloding();  
    output.innerHTML="";
    search_key.innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+input.value)
    .then(a => a.json())
    .then(response =>{
        hideloding();
        //search key
        search_key.innerHTML+=input.value

        //search by books name and author
        for (var i=0; i<10; i++){
        output.innerHTML+=
        "<div class='books_card'><div class='books_img'><img src='https://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'></div>"+
        "<div class='books_details'><div class='h2'><h2>"+response.docs[i].title+"</h2></div>"+
        "<h4>"+response.docs[i].author_name[0]+"</h4>"+
        "<h5>"+response.docs[i].first_publish_year+"</h5></div></div>";
      }});
}

// subject_button
function Subject_Button(){
    audio.play();
    displayloding();  
    output.innerHTML="";
    search_key.innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+input2.value)
    .then(a => a.json())
    .then(response =>{
        hideloding();
        //search key
        search_key.innerHTML+=input2.value

        //search by books name and author
        for (var i=0; i<10; i++){
        output.innerHTML+=
        "<div class='books_card'><div class='books_img'><img src='https://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'></div>"+
        "<div class='books_details'><div class='h2'><h2>"+response.docs[i].title+"</h2></div>"+
        "<h4>"+response.docs[i].author_name[0]+"</h4>"+
        "<h5>"+response.docs[i].first_publish_year+"</h5></div></div>";
}});
}

// search_by keys
var search_result_h3=document.querySelectorAll(".search_result_h3");
var bt_content=document.querySelectorAll(".bt_content");
for (let i = 0; i < bt_content.length; i++){    
    bt_content[i].addEventListener("click" ,()=>{
    input.value=bt_content[i].textContent
    audio.play();
    displayloding();  
    output.innerHTML="";
    search_key.innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+bt_content[i].textContent)
    .then(a => a.json())
    .then(response =>{
        hideloding();
        //search key
        search_key.innerHTML+=input.value
        //search by books name and author
        for (var i=0; i<10; i++){
        output.innerHTML+=
        "<div class='books_card'><div class='books_img'><img src='https://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'></div>"+
        "<div class='books_details'><div class='h2'><h2>"+response.docs[i].title+"</h2></div>"+
        "<h4>"+response.docs[i].author_name[0]+"</h4>"+
        "<h5>"+response.docs[i].first_publish_year+"</h5></div></div>";
}})})}


// loder
function displayloding(){
    var preloder=document.getElementById("preloder_id");
    preloder.style.display="block";   
} 

function hideloding(){
    var preloder=document.getElementById("preloder_id");
    preloder.style.display="none";   
} 


// buttons down and up

var box2_id=document.getElementById("box2_id");
function Down(){
    audio.play();
    box2_id.scrollBy(0,200);
}
function Up(){
      audio.play();
      box2_id.scrollBy(0,-200);
}