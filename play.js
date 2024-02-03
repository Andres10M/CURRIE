import { gameOver, restartGame } from "./start.js";
let mainCharacter = {
    name: "Pierre Curie",
    age: 46,
    wife: {
        name: "Marie Curie",
        age: 66,
        daughter: {
            name: "Andres Curie",
            age: 18,
            neighbor: {
                name: "Jose Suskind",
                age: "39 days"
            }
        }
    }
};

export function startingQuestions() {
    alert("Serás Andrés Curie");
    alert("El hijo de la pareja Curie");
    alert("Debes ayudar a tu familia");
    alert("Has notado que tus padres se encuentran algo enfermos");
    firstQuestion();
}

function firstQuestion() {
    alert("Usa 1 para decírselo a tu madre, usa 2 para decírselo a tu padre, usa 3 para decírselo a un familiar");
    let preguntaUno = prompt("Selecciona tu respuesta");

    if (preguntaUno == "1") {
        alert("Tu vecino trato de ayudar pero no le hicieron caso, despues de eso callo enfermo.");
        alert("Faltan tres preguntas más.");
        secondQuestion();
    } else if (preguntaUno == "2" || preguntaUno == "3") {
        delete mainCharacter.wife.daughter.neighbor;
        document.getElementById('messageContainerOne').innerHTML = `Objeto actual: ${JSON.stringify(mainCharacter)}`;
        console.log(JSON.stringify(mainCharacter));
        console.log(mainCharacter.wife.daughter.neighbor);
        alert("Después de 'ese día', tu vecino murió 3 días después, el estresarse asi le produjo la muerte.");
        alert("Todavía jugando");
        secondQuestion();
    } else {
        alert("Esa no es una opción. Inténtalo de nuevo.");
        firstQuestion();
    }
}

function secondQuestion() {
    alert("En 1906, estás viajando con tu esposa y tus padres.");
    alert("Su nombre es Jacqueline Curie. con quien has tenido dos hermosos hijos.");
    alert("¿han salido a pasear a la ciudad, y hay muchos coches,quien cruzara primero?");
    let preguntaDos = prompt("Selecciona tu respuesta: 1.- Tu hijo. 2.- Tú 3.- Tu hija");

    if (preguntaDos == "3") {
        delete mainCharacter.wife.daughter;
        document.getElementById('messageContainerTwo').innerHTML = `Objeto actual: ${JSON.stringify(mainCharacter)}`;
        console.log(mainCharacter.wife.daughter);
        alert("Después de eso, tu hija fue atropeyada y Murió.");
        alert("Todavía jugando");
        thirdQuestion();
    } else if (preguntaDos == "2" || preguntaDos == "1") {
        alert("los carruajes se detienen y pasas con toda tu familia.");
        alert("Todavía jugando");
        thirdQuestion();
    } else {
        alert("Esa no es una opción. Inténtalo de nuevo.");
        secondQuestion();
    }
}

function thirdQuestion() {
    alert("Ahora eres Andrés Curie, debes salvar a tus padres de la radiacion.");
    alert(" Has deciddido crear un traje anti radiacion, has hecho muchas pruebas, pero al final los has conseguido.");
    alert("haras pruebas con tus padres para salvarlos, debes ver el dia, ya que se hiran de viaje.");

    let preguntaTres = prompt("Selecciona tu respuesta: 1.- hacer la pruebas antes del viaje 2.- despues del viaje 3.- seguir experimentando");
    if (preguntaTres == "1") {
        alert("Has salvado a tu padres. Estan muy orgullosos de ti.");
        alert("falta poquito, para terminar lo haces muy bien, animo,animo :D.");
        fourthQuestion();
    } else if (preguntaTres == "2" || preguntaTres == "3") {
        delete mainCharacter.wife;
        document.getElementById('messageContainerThree').innerHTML = `Objeto actual: ${JSON.stringify(mainCharacter)}`;
        console.log(mainCharacter.wife);
        alert("Tus padres fallecieron la leusemia acabo con ellos.");
        alert("aun tienes a tu familia, debes cuidarlos.");
        fourthQuestion();
    } else {
        alert("Esa no es una opción. Inténtalo de nuevo.");
        thirdQuestion();
    }
}

function fourthQuestion() {
    alert("Ahora vives en Polonia");
    alert("Algo malo sucederá en unas horas.");
    alert("Tu nombre: Andrés Curie.");
    alert("¿debes elegir que hacer?");

    let preguntaCuatro = prompt("Selecciona tu respuesta: 1.- Quedarte en casa. 2.- Seguir trabajando en el laboratorio. 3.- Tener tu día normal");
    if (preguntaCuatro == "2" || preguntaCuatro == "3") {
        delete mainCharacter.name;
        delete mainCharacter.age;
        mainCharacter = null;
        console.log("Fin");
        document.getElementById('messageContainerFour').innerHTML = `Objeto actual: ${JSON.stringify(mainCharacter)}`;
        console.log(JSON.stringify(mainCharacter));
        alert("te obsecionaste tanto con la radiacion, que descuidaste a tu familia");
        alert("tus logros siempre existiran lastima.");
        alert("Tu legado perdura, pero has perdido a tus seres queridos.");
        alert("Gracias por jugar");
        gameOver();
    } else if (preguntaCuatro == "1") {
        alert("Lo hiciste bien.");
        alert("cambiaste la historia.");
        alert("¡GRACIAS POR JUGAR!");
        restartGame();
    } else {
        alert("Esa no es una opción.");
        alert("¡INTÉNTALO DE NUEVO!");
        fourthQuestion();
    }
}