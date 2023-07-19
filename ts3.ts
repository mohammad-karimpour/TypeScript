// فانگشن ها

function GetNum():void{    // عبارت void یعنی فانگشن هیچ خروجی ندارد
      console.log('mm');     
}

// برای اختیاری کردن ورودی یک فانگشن از ؟ استفاده میشود
function SetNum(n_1:any,n_2:string,n_3:number,n_4?:boolean):string{
         return `${n_1} --- ${n_2} --- ${n_3}`
}
SetNum(55,'ff',21) // => 55 --- ff --- 21


