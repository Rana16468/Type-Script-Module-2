{
    //interface 

    type User1={   // ----type alies and Interface both are same 
        name:string;
        age:number
    }

    type userWithrole=User1 &{role:string }  // premitive types of data accepted type alias

    interface User2 extends User1
    {  // ----type alies and Interface both are same 
        role:string
    }

    const user1:User2={
        name:'sohel Rana',
        age:24,
        role:'product manager'
    }

    // js --->object , array--->object, function ---> object 

    // alies process declaration 
    type Roll1=number[];
    //interface process declartion 
    interface Roll2{
      [index:number]:number
    }
    const rollNumber:Roll2=[1,2,3,4,5];

    //alies function declaration process 
    type Add1=(number1:number,number2:number)=>number;
    // interface function declaration process 
    interface Add2{
        (number1:number, number2:number):number
    }
    const add:Add2=(number1,number2)=>number1 + number2;


}