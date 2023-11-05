const str:string | null=null;
console.log(str);

//Nullish coalescing operator---> which is the working with null and undefine value 
//for example

const isRegister='';
const result1=isRegister??'Guast'
console.log(result1);

// nullish coalescing 

type userDetais={
    name:string;
    eduction:{
        hsc?:string;
        ssc?:string;
        bsc?:string;
        msc?:string;
    }
}

const UserDetails1:userDetais={
    name:'Ali Mohammad Sohel Rana',
    eduction:{
        ssc:'AIA',
        hsc:'Mokbular Rahman',
        bsc:'Daffodil International University'
    }
}

const UserDetails2:userDetais={
    name:'Amir Hamza Arif',
    eduction:{
        ssc:'AIA',
        msc:'Dhaka University',
        bsc:'Rajshai University'
    }   
}


const result2=UserDetails1?.eduction?.msc??'Not Completed';
const result3=UserDetails2?.eduction?.hsc??'not copmleted'
console.log({result2,result3});


const product={
    name:'sohel',
    balance:0,
    product(balance:number):number{

        return this.balance + balance

    }
}
console.log(product.product(10));
const array=[10,20,30,40];
const squire=array.map((v:number):number=>v *v);
console.log(squire);

const commonCondition=(value:unknown)=>{

    if(typeof value ==='string')
    {
        return value.toLocaleUpperCase();
    }
    else if(typeof value==="number"){
        return Math.pow(value,2);
    }
    else{
        return 'Other Case Not Accepted';
    }



}
console.log(commonCondition(null));

