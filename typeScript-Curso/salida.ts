console.log('Hello World');

//types
//> tsc salida.ts
//> tsc salida.ts -w

//var myString: string = "Hello world";
//myString = 22 + "";


//var myNumber:number = 22;
//var myBool: boolean = false;

//var myVar: any = "hello";
//myVar = false;


//Strings
//document.write(myNumber.toString());
//document.write(myString);

//ARRAYS
//var StringArray: string[] = ["item1","item2",""];
//var NumberArray: number[] = [1,2,3,4];
//var BooleanArray: boolean[] = [true,false,true,];
//var anyArray: any [] = [1,2,true,"hello",[],{}];

//TUPLE

//var strNumTuple: [string, number];
//strNumTuple = ["Hello",22];
//strNumTuple = ["World", 245,"",45];

//void , undefined, null
//let myVoid: void = undefined;
//let myNull: null = null;
//let myUndefined: undefined = undefined;

//document.write(typeof(strNumTuple));

//FUNCTIONS
//function getSum(num1:number,num2:number):number{
  //  return num1 + num2;
//}

//let Sama = function(
 //   num1: number | string,
 //   num2: number | string):number {
   //     if(typeof(num1) === 'string'){
     //       num1 = parseInt(num1);
       // }
       // if(typeof(num2) === 'string'){
         //   num2 = parseInt(num2);
        //}
    //return num1 + num2;
    //}

// return firstName + ' ' + lastName;
//? opcional
//if(lastName == undefined){return first Name}
//function agarraName(firstName:string,
  //  lastName?:string):string {
    //Nueva implimentacion
    //return `${firstName} ${lastName}`;
//}

//document.write(getName("Isaac","Asimov"));

/*function myVoidFunction():void{
    return;
}
*/
//document.write()
//Interfaces1
interface ITodo {
    title: string;
    text: string;
}
//Interface2
function showTodo(todo: {title:string;text:string}) {
    console.log('${todo.title} - ${todo.text}')
}

let myTodo = {title:'Eat dinner', text: 'Lorem'};

showTodo(myTodo);
//{
  //  title:'Eat Dinner',
    //text:'lorem'
//})

document.write()