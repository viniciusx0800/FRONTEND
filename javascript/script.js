// const valor1 = 10;
// const valor2 = 2;

// console.log("Soma", valor1 + valor2);
// console.log("subtração", valor1 - valor2);
// console.log("Multiplicação", valor1 * valor2);
// console.log("Divisão", valor1 / valor2);
//    console.log("===============================")
// const idade = 25;

// if(idade > 18){
// console.log('maior que 18');
// } else{
//    console.log('menor que 18');
// }
//   console.log("===============================")
// const nota1 = 9.9;

// if(nota < 5){
//     console.log("Abaixo da média");
// } else if(nota1 > 5 && nota <= 7){
//     console.log("Na media");
// } else {
//     console.log("Acima da média");
// }
//   console.log("===============================")
// const nota2 = 3;

// console.log("Sua nota é: " + typeof nota2);

// switch (nota2) {
//     case (nota2 < 5):
//         console.log("Abaixo da média" + nota2);    
//         break;
//     case (nota2 > 5):
//         console.log("Na media" + nota2);
//         break;
//     default:
//         console.log("Acima da média" + nota2);
// } 
//   console.log("===============================")
// const nota3 = 7;
// let categoria;

// if (nota3 < 5) {
//     categoria = 'baixo';
// } else if (nota3 >= 5 && nota <= 7) {
//     categoria = 'medio';
// } else {
//     categoria = 'alto';
// }

// switch (categoria) {
//     case 'baixo':
//         console.log("Abaixo da média");
//         break;
//     case 'medio':
//         console.log("Na média");
//         break;
//     case 'alto':
//         console.log("Acima da média");
//         break;
//     default:
//         console.log("Valor inválido");
// }

//   console.log("===============================")
// const nota4 = 4;

// nota > 5 ? console.log("aprovado") : console.log("reprovado");

// const nome = 'pablo'
// let aprovado = true;
// var nota4 = 8;

// function calculoMedia(){
//     let media = 10;
//     return media;
// }

// if(nota4 < 8){
//     aprovado = false;
// }

// for (let i = 1; i <= 10; i++) {
//     if(i % 2 == 0){
//      console.log(`${i} x 5 = ${i * 5}`);
//     }    
//   }
//   console.log("===============================")
//   let x = 1;
//   while(x < 10){
//     console.log(`${x} x 5 = ${x * 5}`);
//     x++;
//   }
  
//   console.log("===============================")
// const valores = [1,2,3,4,5,6,7,8,9,10];
// valores.forEach((value) =>{
// console.log(`${value} x 5 = ${value * 5}`);
// });

// console.log("===============================")
// const valores2 = [1,2,3,4,5,6,7,8,9,10];
// const resultado = valores.map((value) =>{
// return value * 5
// });

// console.log(resultado);

// const subtrair = (num1, num2) => num1 - num2;
    
// const somar = (num1, num2) => num1 + num2;

// const resultado = somar (10, 5);
// console.log(resultado);

// const alunos = [
//     {
//      nome: 'pablo',
//      idade: 25,
//     },

//     {
//         nome: 'hugo',
//         idade: 17,
//     },
     
  
// ];

// console.log(alunos[2].idade);

// const alunos = [
//     {
//         nome: 'pablo',
//         idade: 25,
//     },
//     {
//         nome: 'hugo',
//         idade: 19,
//     },

//     {
//         nome: 'roberto',
//         idade: 36,
//     },
// ];

// alunos.push({
//     nome: 'joão',
//     idade: 35,
// });

// console.log(alunos[2].idade); 
// const alunosFiltrados = alunos.filter(aluno => aluno.idade > 18)
// console.log(alunosFiltrados);

// const alunoRoberto = alunos.find(aluno => aluno.nome == 'roberto')
// console.log(alunoRoberto);

// const alunoRobertoIndex = alunos.findIndex(aluno => aluno.nome == 'roberto')
// console.log(alunoRobertoIndex);

// const idades = alunos.reduce((acc, aluno ) => {
//     return acc + aluno.idade

// },0);

// console.log(idades);

// const acimaDeNove = alunos.some(alunos => alunos.idade < 10);
// const menorQueNoventa = alunos.every(alunos => alunos.idade < 90);

// console.log(acimaDeNove);
// console.log(menorQueNoventa);