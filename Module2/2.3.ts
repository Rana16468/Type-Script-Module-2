{
    //2-3: Introduction to generics

    // const rollNumber:number[]=[1,2,3,4,5,6,7];
    // const mentors:string[]=['Mr.X','Mr.Y'];
    // const boolArray:boolean[]=[true,false,true];
    // generic types of array
    // const rollNumber:Array<number>=[1,2,3,4,5,6,7];
    // const mentors:Array<string>=['Mr.X','Mr.Y'];
    // const boolArray:Array<boolean>=[true,false,true];
 // This is Generices 
    type GenericArray<T>=Array<T>;
    type GenericTuple<X,Y>=[X,Y];  // generic tuple
    const rollNumber:GenericArray<number>=[10,20,30,40];
     const mentors:GenericArray<string>=['Mr.X','Mr.Y'];
     const boolArray:GenericArray<boolean>=[true,false,true];

     // generic array of object
     const user:GenericArray<{name:string;age:number}>=[
        {name:'Sohel Rana',age:24},
        {name:'Ali Mohammad',age:23},
        {name:'Pollab',age:24},
        {name:'Arif',age:25}
     ];
     console.log(user);

     //simple tuple 
     const manush:[string,string,number]=['MR.X','MR.Y',25];
     //Generic Tuple
     const peopleList:GenericTuple<number,{name:string;email:string}>=[123456,{name:'Sohel Rana',email:'amsr215019@gmail.com'}]
     


    

}