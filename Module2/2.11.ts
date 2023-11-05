{
    // utility types
    //pick types
    type person={
        name:string;
        age:number;
        email?:string;
        phoneNumber:string;
    }

   type nameAndAge= Pick<person,'name' | 'age'>
   //omit --removeing process 
   type ContractInfo=Omit< person ,'name' | 'age'>
   //requieird
   type required=Required<person>
   //pertial
   type pertials=Partial<person>
   //readonly
   type readonly=Readonly<person>

   //recored type
   
}