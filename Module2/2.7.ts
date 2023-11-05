{
    //2-7: Constraint using key of operator
   type Vehicel ={
    cycle:string;
    car:string;
    ship:string
   }

   type Owner1='cycle' | 'car' | 'ship ' // manually declartion 
  type Owner2= keyof Vehicel 
  const person:Owner2="car"; // Owner1 and Owner2 both are same 
    
  const getPropertys=<X,Y extends keyof X>(obj:X,key:Y)=>{

    return obj[key]
  }

  const user={
    name:'X',
    age:24,
    address:'tkg'
  }

  console.log(getPropertys(user, 'age'));




}