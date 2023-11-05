{
    {
        //2-1: Type assertion / type narrowing
       // Type assertion
       let anything:any;
       anything=222;
       (anything as string).toLocaleUpperCase();
       console.log(anything);
    
    
       const kgToGm=(value:string | number):string | number |undefined=>{
    
    
        if(typeof value==='string')
        {
            const conversted=parseFloat(value) *1000;
            return `The Conversted Value is :${conversted}`;
        }else if (typeof value==='number'){
            return value *1000;
        }
        
       }
    
       const result1=kgToGm(1000) as  number;
       const result2=kgToGm('1000') as string;
    
       console.log(result1);
       console.log(result2);
    
       //try catch blog
      type CustomError={
        message:string;
      }
       try{
    
       }catch(error){
        console.log((error as CustomError).message);
       }
    
    }
}