var fullName = document.getElementById("fullName");
var age = document.getElementById("age");
var Email = document.getElementById("Email");
var phone = document.getElementById("phone");
var employeeIndex;
var experience = document.getElementById("experience");

var employeeData = [];

if (localStorage.getItem("employeeData") != null) {
  employeeData = JSON.parse(localStorage.getItem("employeeData"));
  dTable();
}

function add() {
  if (employeeData) {
    var eInfo = {
      fullName: fullName.value,
      age: age.value,
      Email: Email.value,
      phone: phone.value,
      experience: experience.value,
    };

    employeeData.push(eInfo);
    localStorage.setItem("employeeData", JSON.stringify(employeeData));
    dTable();
    clearForm();
  } else {
    alert("Data not valid");
  }
}

function dTable() {
  var box = "";
  for (var i = 0; i < employeeData.length; i++) {
    box += `
        <tr>
        <td>${employeeData[i].fullName}</td>
        <td>${employeeData[i].age}</td>
        <td>${employeeData[i].Email}</td>
        <td>${employeeData[i].phone}</td>
        <td>${employeeData[i].experience}</td>
        <td><button class="btn btn-outline-warning" onclick="update(${i})">update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteData(${i})">delete</button></td>
                </tr>
        
        `
  }
  tBody.innerHTML = box;
}
function clearForm() {
  fullName.value = "";
  age.value = "";
  Email.value = "";
  phone.value = "";
  experience.value = "";
}
function update(index) {
  employeeIndex = index;
  document.getElementById("btnUpdate").classList.replace("d-none", "d-block");
  document.getElementById("btnAdd").classList.replace("d-block", "d-none");
  fullName.value = employeeData[index].fullName;
  age.value = employeeData[index].age;
  Email.value = employeeData[index].Email;
  phone.value = employeeData[index].phone;
  experience.value = employeeData[index].experience;
}

function deleteData(index) {
  employeeData.splice(index, 1);
  document.getElementById("btnUpdate").classList.replace("d-block", "d-none");
  document.getElementById("btnAdd").classList.replace("d-none", "d-block");
  localStorage.setItem("employeeData", JSON.stringify(employeeData));
  dTable();
 clearForm();
}

function updateee() {
  employeeData[employeeIndex].fullName = fullName.value;
  employeeData[employeeIndex].age = age.value;
  employeeData[employeeIndex].Email = Email.value;
  employeeData[employeeIndex].phone = phone.value;
  employeeData[employeeIndex].experience = experience.value;
  localStorage.setItem("employeeData", JSON.stringify(employeeData));
  dTable();

}

function Search(term) {
  var box = "";
  for (var i = 0; i < employeeData.length; i++) {
    if (employeeData[i].fullName.toLowerCase().includes(term.toLowerCase()))
      box += `
        <tr>
        <td>${employeeData[i].fullName}</td>
        <td>${employeeData[i].age}</td>
        <td>${employeeData[i].Email}</td>
        <td>${employeeData[i].phone}</td>
        <td>${employeeData[i].experience}</td>
        <td><button class="btn btn-outline-warning" onclick="update(${i})">update</button></td>>
        <td><button class="btn btn-outline-danger" onclick="deleteData(${i})">delete</button></td>
                </tr>
        
        `;
  }
  tBody.innerHTML = box;
}


