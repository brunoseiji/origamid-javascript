console.log('---------------- Exercícios ----------------')

// Liste 5 objetos nativos
Object
String
Array
Function
Number

// Liste 5 objetos do browser
Window
history
Document
HTMLCollection
NodeList

// Liste 2 métodos, propriedades ou Objetos presentes no Chrome que não existem no Firefox

if(typeof window.onafterprint !== "undefined") {
   console.log('Existe');
} else {
   console.log('Não existe');
}

if(typeof document.webkitHidden !== "undefined") {
   console.log('Existe');
} else {
   console.log('Não existe');
}