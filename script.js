 //Variáveis e Tipos de Dados

 // 1 Declare uma variável chamada nome e atribua a ela seu nome completo. Em seguida, imprima a variável no console.

 var nome = "Douglas Vieira"

 console.log(nome);
 
 // 2 Declare uma variável para armazenar sua idade e uma segunda variável para armazenar a idade de um amigo. Calcule a diferença de idade entre vocês e imprima o resultado no console.
 
 var minhaidade = 25;
 var idadedoamigo = 52;
 var diferencadeidade = minhaidade - idadedoamigo;
 
 console.log("a diferença de idade entre nós é de" + diferencadeidade + "anos.");
 
 // 3  Crie uma variável para armazenar um número inteiro e outra variável para armazenar um número decimal. Some os dois números e imprima o resultado no console.
 
 var numerointeiro = 10;
 var numerodecimal = 5.5;
 var resultado = numerointeiro +  numerodecimal;
 
 console.log("o resultado da soma é " + resultado);
 
 // 4 Declare uma variável para armazenar seu endereço de e-mail. Verifique se o endereço de e-mail contém o símbolo "@" e imprima "Endereço de e-mail válido" ou "Endereço de e-mail inválido" no console, dependendo do resultado.
 
 var email = "douglascanal1998@gmail.com";
 
 if(email.includes("@")){
     console.log ("endereço de email valido!");
 }else{
     console.log ("endereço de email invalido");
 }
 
 // 5  Crie um array com os nomes de três cores diferentes. Imprima o array no console.
 
 var cores = ["azul", "vermelho","verde"];
 
 console.log (cores);
 
 //  Operadores
 
 // 1 Escreva uma expressão que verifica se um número é divisível por 3 e por 5 ao mesmo tempo. Imprima "Divisível por 3 e 5" ou "Não divisível por 3 e 5" no console, dependendo do resultado.
 
 var numero = 15;
 
 if(numero % 3 === 0 && numero  % 5 === 0){
     console.log("divisivel por 3 e 5");
 }else{
     console.log("não divisível por 3 ou 5");
 }
 
 //  2  Crie uma expressão que compare dois números e imprima "O primeiro número é maior" ou "O segundo número é maior" ou "Os números são iguais" no console, dependendo do resultado.
 var numero1 = 10; 
 var numero2 = 5;
 
 if(numero1>numero2) {
     console.log("o primeiro numero é maior");
     } else if(numero1<numero2) {
         console.log("o segundo numero é maior");
         } else {
             console.log("os numeros são iguais");
             }
 
 
 
             //  3  Declare duas variáveis booleanas, uma representando se está chovendo e outra se está ventando. Escreva uma expressão que imprima "Vou levar guarda-chuva" se estiver chovendo OU ventando, e "Não preciso de guarda-chuva" se não estiver chovendo e não estiver ventando.
 
             var estachovendo =  true;
             var estaventando =  false ;
 
             if(estachovendo || estaventando ){
 
                 console.log("vou levar guarda-chuva");
                 }else{
                     console.log("não preciso de  guarda-chuva");
                     }
 
                     //Estruturas de Controle
 
                     //  1  Escreva um programa que verifique se um número é positivo, negativo ou zero e imprima o resultado no console.
                     var num = -5;
 
                     if(num>0)  {
                         console.log("o numero é positivo")
                         }else if(num <0)  {
                             console.log("o número é negativo")
                             }else {
                                 console.log("o numero é zero");
                               }
 
 
                               //  2  Crie uma função que recebe um número como argumento e verifica se é par ou ímpar. Imprima "Par" ou "Ímpar" no console, dependendo do número.
             function verificarparouimpar(num1)  {
                 if(num1 % 2 === 0){
                     console.log("par");
                 }else{
                     console.log("impar");
                 }
 
             } 
             verificarparouimpar(7);   
             
             