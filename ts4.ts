// objects

let User:{
    id:number,
    name:string
}={
    id:1,
    name:'mohammad'
}


// برای ساخت یک نوع تایپ 
type User_2 = {
    id:number,
    name:string,
    life:boolean
}
let M:User_2 = {id:1,name:'sana',life:true}
let S:User_2 = {id:2,name:'mohammad',life:true}

// برای استفاده از متد داخل آبجکت
let User_3:{
    id:number,
    name:string,
    FullName : (b:string)=>void
}={
    id:1,
    name:'mohammad',
    FullName: enam => console.log(this.eame) 
}



//  برای اینکه پراپرتی های آبجکت غیر قابل تغیر باشند
let User_4:{
    id:number,
    readonly name:string
}={
    id:1,
    name:'mohammad'
}
// User_4.name = 'tt' ==> Error