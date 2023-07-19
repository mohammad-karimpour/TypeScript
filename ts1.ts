// typescript

// تایپ ها
let number:Number = 1;
let string:String = 'mohammad';
let boolean:Boolean = true;
let Null:null = null;
let undefind:undefined = undefined;
let free:any = "free";
let BestFree:unknown = 123

//تعین نوع تایپ آرایه ها
let nums:Number[] = [1,2,3,4,5,6,7,8,9];
let nums_2: [Number,String,Boolean] = [1,'mohammad',true];

//یک داده با پند نوع تایپ مجاز
let Types: Number | String = 'mohammad' + 122

// تعین مقدار داده به جای نوع آن
let Num: 50 | 100 = 50


// اگر پراپرتی احتمال دارد که آندیفاین باشد باید ؟ استفاده کنید
console.log(num?.numbers?.id);

// تاکید بر نوع داده 
// بعضی مواقع برای دسترسی به پراپرتی باید نوع تایپ را حتما مشخص کنید وگرنه ارور میده
let n:any = 123;
(n as number).toFixed
(<number>n).trimStart
