let containers = new Set();

function load(){
  //alert("Loading...");
  loadFlavors();
  loadToppings();
  loadContainers();
  // fetch('http://localhost:8080/icecream/toppings')
  // .then((data) => console.log(data));
  //
  // fetch('http://localhost:8080/icecream/containers')
  // .then((data) => console.log(data));
}

function loadFlavors(){
  let element = document.getElementById("flavors");
  let buttons = '';

  fetch('http://localhost:8080/icecream/flavors')
  .then((response) => response.json())
  .then((data) => {

    for(let i = 0; i < data.length; i++){
      let flavor = data[i];
      console.log(flavor);
      buttons += '<button type="button" id="flavor_'+flavor+'" class="btn btn-sm btn-primary">'+flavor+'</button>';
    }

    element.innerHTML = buttons;

  });
}

function loadToppings(){
  let element = document.getElementById("toppings");
  let buttons = '';

  fetch('http://localhost:8080/icecream/toppings')
  .then((response) => response.json())
  .then((data) => {

    for(let i = 0; i < data.length; i++){
      let topping = data[i];
      console.log(topping);
      buttons += '<button type="button" id="topping_'+topping+'" class="btn btn-sm btn-primary">'+topping+'</button>';
    }

    element.innerHTML = buttons;

  });
}

function loadContainers(){
  let element = document.getElementById("containers");
  let buttons = '';

  fetch('http://localhost:8080/icecream/containers')
  .then((response) => response.json())
  .then((data) => {

    for(let i = 0; i < data.length; i++){
      let container = data[i];
      let containerId = 'container_'+i;
      buttons += '<button type="button" id="'+containerId+'" value="'+container+'" onclick="clicked('+containerId+')" class="btn btn-sm btn-primary">'+container+'</button>';
    }

    element.innerHTML = buttons;

  });
}

function clicked(element){
  console.log(element.innerHTML);
  /* --- UX
  if button has btn-primary change to class btn-success and vice verser
  if class is btn-success, add their selection to a list */
  const selectedClass = "btn-success";
  const deselectedClass = "btn-primary";
  let container = element.value;

  if(element.classList.contains(deselectedClass)){
    console.log("select");
    // add to list
    element.classList.replace(deselectedClass, selectedClass);
    containers.add(container);
  } else {
    // remove from list
    console.log("deselect");
    element.classList.replace(selectedClass, deselectedClass);
    containers.delete(container);
  }

  console.log(containers);
}
