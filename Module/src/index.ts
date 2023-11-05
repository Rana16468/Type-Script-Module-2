//union and intersaction 




//frontEnd Developer Information gathering data Type object


type FrondendDeveloperInformation={
  readonly  companyName?:string;
  FrontEndDeveloper?: 'poor frontend developer' | 'junior fontend developer',
    dev_Name:string;
   readonly dev_Email:string;
    dev_Gender: 'male' | 'female';
    dev_Address:{
        city:string;
        road:string;
        presentAddress?:string;
        permanentAddress:string;
    }
    readonly dev_PhoneNumber:string;
    gitHub_url:string;
    dev_skills: string[]
};

//BackEnd Developer Information gathering data Type object
type BackendDeveloperInformation={
    readonly  companyName?:string;
    BackEndDeveloper?:'poor backend developer' | 'jenious backend developer';
    dev_Name:string;
    readonly dev_Email:string;
     dev_Gender: 'male' | 'female';
     dev_Address:{
         city:string;
         road:string;
         presentAddress?:string;
         permanentAddress:string;
     }
     readonly dev_PhoneNumber:string;
     gitHub_url:string;
     dev_skills: string[];

};

type DeveloperDetails=FrondendDeveloperInformation &  BackendDeveloperInformation;

// actual array of data execution 
const developer1:DeveloperDetails={
    companyName:'Programming Hero Bangladesh',
     BackEndDeveloper:'jenious backend developer',
    dev_Name:'Mizba Parshian',
    dev_Email:'Mizba215019.me@gmail.com',
    dev_Gender:'male',
    dev_Address:{
        city:'ctg',
        road:'ctg town',
        permanentAddress:'Dhaka Dhanmondi',
        presentAddress:'ctg Port'
    },
    dev_PhoneNumber:'01722305054',
    dev_skills:['Node JS','RECAT JS','REDUX JS','PRISMA','EXPRESS'],
    gitHub_url:'https://github.com/login'


}
const developer2:DeveloperDetails={
    companyName:'Brain Station Bangladesh',
     BackEndDeveloper:'poor backend developer',
    dev_Name:'A M SOHEL RANA',
    dev_Email:'amsr215019.me@gmail.com',
    dev_Gender:'male',
    dev_Address:{
        city:'ctg',
        road:'ctg town',
        permanentAddress:'Dhaka Dhanmondi',
        presentAddress:'ctg Port'
    },
    dev_PhoneNumber:'01828170792',
    dev_skills:['Node JS','RECAT JS','REDUX JS','PRISMA','EXPRESS'],
    gitHub_url:'https://github.com/login'


}

const developer3:DeveloperDetails={
    companyName:'Programming Hero Bangladesh',
    FrontEndDeveloper:'junior fontend developer',
    dev_Name:'A M SOHEL RANA',
    dev_Email:'rana16-468@diu.edu.bd',
    dev_Gender:'male',
    dev_Address:{
        city:'tkg',
        road:'1273/1',
        permanentAddress:'Dahaka Sonkpr',
        presentAddress:'Thakurgoan Shantinagor'
    },
    dev_PhoneNumber:'01828170792',
    dev_skills:['HTML','CSS','RECAT','NEXT JS','TAILWIND'],
    gitHub_url:'https://github.com/login'


}

console.log(developer1);
console.log(developer2);
console.log(developer3);

