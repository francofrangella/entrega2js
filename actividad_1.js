//menu hamburguesas//
const menuBurger = [
    { nombre: "Simple", precio: 1000 },
    { nombre: "Doble", precio: 1500 },
    { nombre: "Pollo", precio: 1300 },
    { nombre: "Vegana", precio: 1200 }
  ];
  const carrito = [];
  
  // Bienvenida//
  alert("Bienvenido a BurgerMaster");
  let nombre = prompt("Ingrese su nombre");
  
  function letraMayuscula(letra) {
    return letra.charAt(0).toUpperCase() + letra.slice(1);
  }
  
  nombre = letraMayuscula(nombre);
  
  let verOpcion = prompt("Hola " + nombre + ", desea ver el menú? (si o no)");
  
  while (verOpcion !== "si" && verOpcion !== "no") {
    alert("Por favor, ingrese si o no");
    verOpcion = prompt("Ingrese si o no");
  }
  
  // Mostrar menú de hamburguesas
  if (verOpcion === "si") {
    let mostrarMenuBurger = menuBurger.map(
      (burger) => burger.nombre + " $" + burger.precio
    );
    alert(mostrarMenuBurger.join("\n"));
  } else if (verOpcion === "no") {
    alert("Gracias por su visita.");
  }
  //Elegir hamburguesa//
  while (verOpcion === "si") {
    let mostrarMenuBurger = prompt("Elija la hamburguesa que desea");
    let precio = 0;
  
    switch (mostrarMenuBurger) {
      case "Simple":
        precio = 1000;
        break;
      case "Doble":
        precio = 1500;
        break;
      case "Pollo":
        precio = 1300;
        break;
      case "Vegana":
        precio = 1200;
        break;
      default:
        alert("Hamburguesa no válida");
        continue;
    }
  //Cuenta //
    let cuantasBurger = parseInt(prompt("¿Cuántas hamburguesas quieres?"));
  
    if (isNaN(cuantasBurger) || cuantasBurger <= 0) {
      alert("Cantidad inválida. Inténtelo de nuevo.");
      continue;
    }
  
    carrito.push({ mostrarMenuBurger, cuantasBurger, precio });
    alert("Hamburguesa agregada al carrito.");
  
    verOpcion = prompt("Desea agregar otra hamburguesa? (si o no)");
  };
  
  if (carrito.length > 0) {
    alert("Resumen de la compra:");
  
    carrito.forEach((carritoTotal) => {
      const subtotal = carritoTotal.cuantasBurger * carritoTotal.precio;
      alert(
        `Hamburguesa: ${carritoTotal.mostrarMenuBurger}\nCantidad: ${carritoTotal.cuantasBurger}\nSubtotal: $${subtotal}`
      );
    });
  //Cuenta total//
    const total = carrito.reduce(
      (acc, el) => acc + el.precio * el.cuantasBurger,
      0
    );
    alert(`Total de la compra: $${total}`);
  } else {
    alert("No se ha realizado ninguna compra.");
  };