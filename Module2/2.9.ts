{
    // conditional type 
    type a1=string;
    type b1=null;
    type x= a1 extends null?true:false;
    type y=a1 extends null?true:b1 extends undefined?undefined:any;

    // second example 
    type Sheikh={
        car:string;
        bike:string;
        ship:string;
        plain:string;
    }
    // type checkedVehicle<T>= T extends 'bike' | 'car' | 'ship'?true:false;
    // type checked=checkedVehicle<'reactor'>

    type checkedVehicle<T>= T extends  keyof Sheikh?true:false;
     type checked=checkedVehicle<'bike'>

}