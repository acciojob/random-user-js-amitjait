//your code here

let data;
fetch('https://randomuser.me/api/')
.then((response) => response.json())
.then((result)=>{

    data = result.results[0];
    let user = document.getElementById('user');

    let img = document.createElement('img');
    img.src = data.picture.large;
    user.appendChild(img);

    let h2 = document.createElement('h2');
    

    h2.innerHTML = `${data.name.first}  ${data.name.last}`;
    user.appendChild(h2);

    console.log(data);
    // console.log(data.results[0].cell);
    console.log(data.dob.age);
    console.log(data.email);
    console.log(data.cell);
    console.log(data.picture);
});

function Age(){
    let info = document.getElementById('info');

    info.innerHTML = `${data.dob.age}`;
}

function Email(){
    let info = document.getElementById('info');

    info.innerHTML = `${data.email}`;
}

function Phone(){
    let info = document.getElementById('info');

    info.innerHTML = `${data.cell}`;
}

function getAnother(){
    window.location.reload(); 
}