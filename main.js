let cuestionario = [
  {
    pregunta: "¿Qué significa CSS?",
    opciones: [
      "Coded Style Sheets (Hojas de Estilo Codificadas)",
      "Code of Style Sheets (Código de Hojas de Estilo)",
      "Color Style Sheets (Hojas de Estilo de Color)",
    ],
    respuesta: "Cascading Style Sheets (Hojas de Estilo en Cascada)",
  },

  {
    pregunta: "¿Cómo podemos añadir un comentario en una hoja de estilo CSS?",
    opciones: [
      "Después de los caracteres //. Ej: // Este es un comentario CSS",
      "Entre las etiquetas <!-- y -->. Ej: <!-- Esto es un comentario CSS -->",
      "No se puede",
    ],
    respuesta:
      "Entre los caracteres /* */  Ej: /* esto es un comentario CSS */",
  },

  {
    pregunta:
      "¿Qué propiedad se emplea para cambiar el tipo de letra de un elemento?",
    opciones: ["text-type", "font-type", "text-family"],
    respuesta: "font-family",
  },

  {
    pregunta:
      "¿Con qué propiedad se define el espacio entre el borde de un elemento y los elementos que lo rodean?",
    opciones: ["border", "padding", "Ninguna respuesta es correcta"],
    respuesta: "margin",
  },

  {
    pregunta: "¿Cuáles de las siguientes declaraciones son selectores?",
    opciones: ["font-family", "50px", "red"],
    respuesta: "p",
  },
];

let indexPregunta = 0;
let respuesta = [];
CargarPreguntas(indexPregunta);
function CargarPreguntas(index) {
	objetoPregunta = cuestionario[
		index
	];
  opciones = [
		...objetoPregunta.opciones
	]; //creamos un array con las opciones
  opciones.push(objetoPregunta.respuesta); //la respuesta la metemos dentro del array opciones
  opciones.sort(() => Math.random() - 0.5); //desordenamos las opciones
  document.getElementById("preguntas").innerHTML = objetoPregunta.pregunta;
  document.getElementById("opt1").innerHTML = opciones[
		0
	];
  document.getElementById("opt2").innerHTML = opciones[
		1
	];
  document.getElementById("opt3").innerHTML = opciones[
		2
	];
  document.getElementById("opt4").innerHTML = opciones[
		3
	];
  document.getElementById("seccionpuntaje").style.display = "none";
}var contador_indice = [];
let selects = [
	document.getElementById("opt1"),
	document.getElementById("opt2"),
	document.getElementById("opt3"),
	document.getElementById("opt4"),
]; 
function seleccion(index) {
	selects[
		index
	].selected=resalte(index)
}
function resalte(index){
	contador_indice.push(index);
if(contador_indice.length<=1){
		selects[
			index
		].style.background='#54FE7B'
	}else{
		let eliminado=contador_indice.shift()
    selects[
			eliminado
		].style.background=''
	}selects[
		index
	].style.background='#54FE7B'
}
/* .style.background='#54FE7B' */
/* 
let cambio=document.getElementsByClassName('botones').addEventListener('click',
()=>{
	if(cambio.className=='botones'){
		cambio.className=='botonesclick'
	}
})
 */
let correctas = 0;
function continuar() {
	for (let i = 0; i < contador_indice.length; i++) {
		index = contador_indice[i];
    selects[index].style.background=''}
    contador_indice=[]
    let validacion = opciones[index]== objetoPregunta.respuesta;
  if (validacion) {
		correctas++;
	}indexPregunta++;
  if (indexPregunta >= cuestionario.length) {
		document.getElementById("seccionquiz").style.display = "none";
    document.getElementById("titulo").textContent = "Resultados";
    document.getElementById("seccionpuntaje").style.display = "";
    document.getElementById("span").textContent =
      correctas + "/" + cuestionario.length;
    document.getElementById("dude").style.display = "none";
    if (correctas >= 3) document.getElementById("good").style.display = "block";
    if (correctas <= 2) {
			document.getElementById("bad").style.display = "block";
		}
	}CargarPreguntas(indexPregunta);
}