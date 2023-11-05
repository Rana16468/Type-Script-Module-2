{
    //2-10: Mapped types
    const numberofArray:number[]=[1,2,3,4,5];
    const stringofArray:string[]=numberofArray?.map((v:number)=>v.toString());
    console.log(stringofArray);


    type areaNumber={
        height:number;
        width:string;
    }
    type areaString={
        [key in  keyof areaNumber]:string
    }

    type areaofString<T>={
        [key in keyof T]:T[key]
    }
   const area1:areaofString<{height:number;width:number}>={height:30,width:50};
   console.log(area1);
    
}