
const select = document.getElementById('selectOption');

const butonConvertir = document.getElementById('buton').addEventListener("click", convertir);

function convertir(){
    
    if(select.value=="C"){
        celcius();
    }else if(select.value=="F"){
        Fahrenheit();
    }else if(select.value=="K"){
        Kelvin();
    }else if(select.value=="elija"){
        console.log("No se ha elegido ninguna opcion");
    }

    limpiar();
}

function celcius(){
    const grados = document.getElementById('inputGrados').value;
    console.log("Grados Fahrenheit = "+((grados * 9/5)+32));
    console.log("Grados Kelvin = "+((grados * 100)/100+273.15));
}

function Fahrenheit(){
    const grados = document.getElementById('inputGrados').value;
    console.log("Grados Celsius = "+((grados  - 32) * 5/9));
    console.log("Grados Kelvin = "+((grados - 32) * 5/9 + 273.15));
}
function Kelvin(){
    const grados = document.getElementById('inputGrados').value;
    console.log("Grados Celsius = "+((grados-273.15)));
    console.log("Grados Fahrenheit = "+((grados- 273.15) * 9/5 + 32));
}

const limpiar = () => {
    document.getElementById('inputGrados').value = "";
}

