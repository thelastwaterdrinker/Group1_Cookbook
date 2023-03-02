function myFunction() {
    alert('We are simple the best ones on the market!');
};


//Because shareButton1 and 2 are on the index.html eventListener cannot find them and giving and error. Therefore, it does not go to shareButton3. I added ? to solve this problem. Basically, it is helping to go trough next line.
//document.getElementById("shareButton1")?.addEventListener("click", myFunction);
//document.getElementById("shareButton2")?.addEventListener("click", myFunction);
//document.getElementById("shareButton3")?.addEventListener("click", myFunction);


// https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class

let elements = document.getElementsByClassName("share-btn");
console.log(elements)

let myFunctionStack = () => {
    alert("my alert");
};

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunctionStack, false);
}



document.getElementById("aboutUs").addEventListener("click", myFunction);