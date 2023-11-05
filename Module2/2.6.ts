{
    //2-6: Constraints in typescript

    const addCourseToStudent=<T extends {id:number;name:string;email:string}>(student:T)=>{

        type courseName='Next Level Web Development';
        const CourseName:courseName='Next Level Web Development';
        return {
            CourseName,
            ...student
        }
    }

    const student1=addCourseToStudent({id:101,name:'Sohel Rana',email:'amsr215019@gmail.com',devType:'NLFD'});
    const student2=addCourseToStudent({id:102,name:'Mr.Y',email:'amsr215019@gmail.com',devType:'NLFD'});
    const student3=addCourseToStudent({id:103,name:'Mr.Y',email:'amsr215019@gmail.com',devType:'NLFD'});
    

}