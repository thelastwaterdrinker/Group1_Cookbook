function myFunction() {
    alert('my alert');
}

//Because shareButton1 and 2 are on the index.html eventListener cannot find them and giving and error. Therefore, it does not go to shareButton3. I added ? to solve this problem. Basically, it is helping to go trough next line.
document.getElementById("shareButton1")?.addEventListener("click", myFunction);
document.getElementById("shareButton2")?.addEventListener("click", myFunction);
document.getElementById("shareButton3")?.addEventListener("click", myFunction);