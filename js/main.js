function add_nums() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  console.log( num1, num2 );
  document.getElementById("result").innerText = num1 + num2; 
}

alert("Hello World");

function updateName(){
  var name = prompt("Enter your name", "Dr.Who");
  // alert(name);
  if( !name ) { name = "Mystery Person"; }
  document.getElementById("person").innerText = name;
}