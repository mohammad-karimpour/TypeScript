// جنریک ها 
// میتوان برای کلاس و فامگشن و متد ها و اینترفیس ها تایپ های مختلفی به ازای هر نمونه ساخت

// class
class User<T, A>{
    constructor(public name:T,public age:A){}
}
let U_1 = new User<string,number>('mohammad',19)
let U_2 = new User<string,string>('faeze',"18")

// function
function num<A,B>(num_1:A,num_2:B){
    console.log(num_1 , num_2);
    
}
num<number,number>(1,15)
num<string,boolean>('faezeh',true)

// interface
interface person<one,two>{
    name:one,
    age:two
}
let boy:person<string,number> = {name:'mohammad',age:19};
let gerl:person<string,string> = {name:'mohammad',age:'18'};


// محدود کردن جنریک بین چند تایپ
function num_2<A extends number | string,B extends boolean | number>(num_1:A,num_2:B){
    console.log(num_1 , num_2);
    
}
num_2<number,number>(1,15)
num_2<string,boolean>('faezeh',true)