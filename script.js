// var data=[]
// var myHttp = new XMLHttpRequest();
// myHttp.open("GET", "https://jsonplaceholder.typicode.com/comments");
// myHttp.send();

// myHttp.addEventListener('readystatechange', function () {
//     if (myHttp.readyState == 4 && myHttp.status == 200) {
//         data=(JSON.parse(myHttp.responseText));
//         displayData();
//     } else if (myHttp.readyState == 4) {
//         console.error('Request failed with status:', myHttp.status);
//     }
// })
// function displayData(){
//     var cols=``;
//     for (let index = 0; index < data.length; index++) {
//         cols+=`<div class="col-md-4">
//         <div>
//             <h3>${data[index].id}</h3>
//             <h5>${data[index].name}</h5>
//             <p>${data[index].email}</p>
//             <p>${data[index].body}</p>

//         </div>
//     </div>`        
//     }
//     document.getElementById('row-Data').innerHTML=cols;
// }
// var data=[]
// var links=document.querySelectorAll('.nav-link')
// getdata("pizza");

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click',function(e)
//         {
//             var currentMeal=e.target.innerHTML
//             getdata(currentMeal);
//         }
//     )
// }
// function getdata(meal){
//     var myHttp=new XMLHttpRequest();
//     myHttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
//     myHttp.send();
//     myHttp.addEventListener('readystatechange',function(){
//         if(myHttp.readyState==4){
//             data=JSON.parse(myHttp.response).recipes;
//             console.log(data)
//             displayData();
//         }
//     })
// }
// function displayData(){
//     var cols=``
//     for (let i = 0; i < data.length; i++) {
//         cols+=`<div class="col-md-4">
//         <div class="border text-center h-100">
//             <img height='200' class="w-100" src="${data[i].image_url}"/>
//             <h5>${data[i].title}</h5>
//             <a target="_blank" class="btn btn-warning" href="${data[i].source_url}">source</a>
//         </div>
//     </div>`        
//     }
//     document.getElementById("row-Data").innerHTML = cols;

// }
// var data=[]
// function display(){
//     let cartoona=``;
//     for (let index = 0; index < data.length; index++) {
//         cartoona+=`<tr>
//         <td>${data[index].id}</td>
//         <td>${data[index].email}</td>
//         <td>${data[index].name}</td>
//       </tr>`
//     }
//     document.getElementById('tablee').innerHTML=cartoona;
// }

// function getHTTp(){
//     let myhttp=new XMLHttpRequest();
//     myhttp.open("GET","https://jsonplaceholder.typicode.com/comments");
//     myhttp.send();
//     myhttp.addEventListener("readystatechange",function(){
//         if(myhttp.readyState==4&&myhttp.status==200){
//             data=(JSON.parse(myhttp.response));
//             display();
//         }
//     })
    
// }
// getHTTp();


var data = [];
let select=document.querySelector('select');
let search=document.querySelector('input');
getHTTP('pizza');

function display() {
  let cartoona = ``;
  for (let index = 0; index < data.length; index++) {
    cartoona +=`<div class="col-md-4 h-100">
    <img class="w-100" src="${data[index].image_url}"/>
    <p>${data[index].title}</p>
  </div>`;
  }
  document.getElementById('abc').innerHTML = cartoona;
}

function getHTTP(meal) {
  let myhttp = new XMLHttpRequest();
  myhttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
  myhttp.send();
  myhttp.addEventListener("readystatechange", function () {
    if (myhttp.readyState == 4 && myhttp.status == 200) {
      data = (JSON.parse(myhttp.response).recipes);
      console.log(data);
      display();
    }
  });
}

select.addEventListener("change",function(e)
{
var meal=(e.target.value)
getHTTP(meal);

})
search.addEventListener("blur",function(e){
    getHTTP(e.target.value);

})