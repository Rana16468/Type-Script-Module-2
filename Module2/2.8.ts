{
    //2-8: Asynchronous typescript
    //promise

 type todo={
    userId:number;
    id:number;
    title:string;
    completed:boolean;
 }
    const getTodos=async():Promise<todo>=>{

    const respones= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data= await respones.json();
    return data;
    }
    getTodos().then((result)=>{
        console.log(result);

    }).catch((error)=>{
        console.log(error?.message);
    });

    type Somrthing={something:'something'};

    const createPromise=():Promise<Somrthing>=>{
        return new Promise<Somrthing>((resolve,reject)=>{
            const data:Somrthing={something:'something'}
            if(data){
                resolve(data);
            }else{
                reject('Faild To Fatch');
            }
        });
    };
    //called promise function
    const showData=async():Promise<Somrthing>=>{
        const data:Somrthing=await createPromise();
        return data;
    }

    showData();
}