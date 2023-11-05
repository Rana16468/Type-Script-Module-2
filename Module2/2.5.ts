{
    //Function with generics
    //simplae array function 
    const createArray=(param:string):string[]=>{
        return [param]

    }
   const createArrayWithGeneric=<T>(param:T):T[]=>{
    return [param]


   }

   const createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{

    return [param1,param2];


   }

   console.log(createArrayWithGeneric<boolean>(true));
   console.log(createArrayWithGeneric<string>('Sohel Rana'));
   console.log(createArrayWithGeneric(<{id:number;name:string;email:string}>({id:1,name:'Sohel',email:'amsr215019'})));
 //tuple 
 console.log( createArrayWithTuple<number,string>(10,'Sohel Rana'));
type userType={name:string;age:number;gender:'male' |'female'};
const userDetails={};
 const result=createArrayWithTuple<string,userType>('Sohel Rana',{
    name:'sohel Rana',
    age:24,
    gender:'male'
 });

 //example

 const addCourceToStudent=<T>(student:T)=>{

    type courseName='Next Level Web Development';
    const CourseName:courseName='Next Level Web Development';
    return {
        CourseName,
        ...student
    }

 }

type developerType={name:string,age:23,computer:{
    model:string;
    barnd:string;
    relaceYear:number;
 }}

 const result2=addCourceToStudent<developerType>({name:'Sohel Rana',age:23,computer:{
    model:'Dell',
    barnd:'5100Ux',
    relaceYear:2015
 }});
 console.log(result2);

}