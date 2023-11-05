{
    // generic interface 
    interface Developer<T,X=null>{

        name:string;
        computer:{
            brand:string;
            model:string;
            realeceYear:number;
        };
        SmartWatch:T;
        bikeDetails?:X
    }

    //samsungWatch
    type sumsung={
        brand:string;
        model:string;
        display:string;
    }
    const poorDeveloper:Developer<sumsung>={
        name:'Sohel Rana',
        computer:{
            brand:'Dell',
            model:'DL5100UX',
            realeceYear:2016
        },
        SmartWatch:{
            brand:'Apple',
            model:'Apple8547Wez',
            display:'Applle852'

        }
    }
 type appleWatch={
    brand:string,
    model:string,
    heartTrack:boolean,
    slipeTract:boolean
}
type bikeInfo={
    model:string;
    capacity:string
}
    const richDeveloper:Developer<appleWatch,bikeInfo>={
        name:'Ali Mohammad',
        computer:{
            brand:'Applae',
            model:'Apple5100UX',
            realeceYear:2016
        },
        SmartWatch:{
            brand:'Apple2018',
            model:'Apple8547Wezxz',
            heartTrack:true,
            slipeTract:true
           

        },
        bikeDetails:{
            model:'Yahamaha2019',
            capacity:'160CC'
        }


    }
}