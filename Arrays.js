
//Estudiante: Juan Camilo Hidalgo Betanncourth
//Codigo: 2205622
//Uso de las funciones de Arreglos

const myArray = [2,4,6,8,10,12];
const myArray2 = [1,3,5,7,9];
//length
console.log('Length \nEl tamaño del arreglo es: '+ myArray.length);

//at
console.log('At \nEl valor en el índice 2 es: '+ myArray2.at(2));

//concat
const myArrayConcat = myArray.concat(myArray2);
console.log('Concat \nConcatenando myArray con myArray2: '+myArrayConcat);

//constructor
const students = new Array('Juan', 'Andres','Camila','Julian');
console.log('Constructor\nEstudiantes '+students);

//copyWithin
const myArraycwi = [1,2,3,4,5];
myArraycwi.copyWithin(0, 2, 3);
console.log('CopyWithIn\nCopiamos el valor del indice 2 en el indice 0: ' +myArraycwi);

//Entries
let iterator = students.entries(); 
console.log('Entries\nLe asignamos una key a cada valor del arreglo');
for (let i of iterator){
    console.log(i);
}

//Every
const validation = myArray.every(x => x % 2 === 0);
console.log('Every\nTodos los valores del arreglo myArray son pares?: '+validation);

//fill
const animals = new Array(4);
animals.fill("perro");
console.log('fill\n'+animals);

//filter
console.log('filter\nFiltramos los numeros mayores a cinco: '+myArray.filter(x => x > 5));

//find
console.log('find\nBusca el primer numero mayor a uno: '+myArray.find(x => x > 1));

//findIndex
console.log('findIndex\nBusca el indice del primer numero mayor a uno: '+myArray.findIndex(x => x > 1));

//findLast
console.log('findLast\nBusca el ultimo numero mayor a uno: '+myArray.findLast(x => x > 1));

//findLastIndex
console.log('findLasIndex\nBusca el indice del ultimo numero mayor a uno: '+myArray.findLastIndex(x => x > 1));

//flat
const myArrayF = [5,4,3,2,[1,2,4],1];
console.log('flat\nEl array sin el flat: ',myArrayF);
console.log('Array despues del flat: ',myArrayF.flat());

//flatMap
const arrayJ = [0,9,[3,7],[5],6,[7,7,8]];
const arrayFlattened = arrayJ.flatMap(x => x);
console.log('flatMap\n',arrayJ,'\n',arrayFlattened);

//ForEach
console.log('ForEach');
students.forEach(x => console.log(x));

//Includes
console.log('includes\nEn el indice 0 de estudents hay un numero?: ',students.includes(Number, 0));

//indexOf
console.log('indexOf\nIndice donde se encuentra el nombre Juan: ',students.indexOf('Juan'));
//join
console.log('Join\nCrea un string concatenando todos los elementos: \n',students.join('-'),'\n',students.join());

//keys
const j = students.keys();
console.log('keys\ncrea una llave por cada elemento: ');
for (const key of j){
    console.log(key)
};

//LastindexOf
const family = ['Ana', 'Katalina', 'Leo', 'Luz', 'Leo'];
console.log('LastIndexOf\nEl indice del ultimo elemento que cumpla con el argumento:',family.lastIndexOf('Leo'));

//map
console.log('map\nmultiplicamos 5 a cada elemento del array: ',myArray2.map(x => x*5));

//pop
const family2 = ['Ana', 'Katalina', 'Leo', 'Luz', 'Leo'];
console.log('pop\nRetorna y elimina el ultimo elemento de un array: ',family2.pop());

//push
console.log('push\nAgrega un elemento a una array en un nuevo espacio y retorna el nuevo tamaño del array: ',family.push('Andres'));

//reduce
const numbers =[5, 5, 4 , 4];
console.log('reduce\nReduce el array  a un solo valor', numbers.reduce((acumulador, valorActual) => {
    return acumulador + valorActual
}));

//reduceright
console.log('reduceright\nReduce el array  a un solo valor, pero este lo recorre de derecha a izquierda ', numbers.reduceRight((acumulador, valorActual) => {
    return acumulador + valorActual
}));

//reverse
console.log('reverse\n',numbers);
console.log(numbers.reverse());

//shift
const names = ['Juan','Camilo','Andres'];
console.log('shift\nRetorna y elimina el primer  elemento de un array');
console.log(names);
const primerNombre = names.shift();
console.log(primerNombre);
console.log(names);

//slice 
const colors = ['azul','verde','amarillo','morado','naranja'];
console.log('slice\nRetorna una parcion del arreglo que especifiquemos:');
console.log(colors);
console.log(colors.slice(1,4));

//some
const colores = ['azul','verde','amarillo','morado','naranja'];
console.log('some\nRetorna un booleano si algun elemento del array cumple con la funcion: ');
console.log(colores.some(x => x === 'amarillo'));

//sort
console.log('sort\nOrdena ascendentemente el arreglo');
console.log(colores.sort());

//splice
console.log('splice\nNos sirve para insertar o reemplazar datos');
console.log(colores);
colores.splice(1,0,'violeta');
console.log(colores);

//ToLocalString
console.log('ToLocalString\nRetorna  una cadena de texto con todos los elementos del array:',myArrayConcat.toLocaleString());

//ToString
console.log('ToString\n',myArraycwi.toString());

//unshift
console.log('unshift\nInserta datos en el array y retorna el nuevo tamaño del array');
console.log(names);
names.unshift('Juan','Laura');
console.log(names);

//values
console.log('values:\n');
const iterador = names.values();
for (let valores of iterador){
    console.log(valores)
};



















