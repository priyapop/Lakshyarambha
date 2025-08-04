// const Fname = document.getElementById("name")

// function sub(){
//     Fname.innerHTML=`Welcome ${Fname}`
// }

const Fname = document.getElementById("name");
const output = document.getElementById("output");

function sub(event) {
    event.preventDefault()
    const value = Fname.value;
    output.innerHTML = `Welcome ${value}!!!`;
}

