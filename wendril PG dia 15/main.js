const dataAtual=new Date( );
let dataObjetivo=prompt("qual a data voce esta esperando?Exemplo 24/08/25");
dataObjetivo=new Date(dataObjetivo+"T23:59:59");
let diasQueFaltam=Math.floor((dataObjetivo-dataAtual)/8640000);
document.querySelector("#Dias_restantes").textComtent=diasQueFaltam;
