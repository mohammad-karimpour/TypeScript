// Class

//public : یک پراپرتی معمولی 
//private : فقط داخل کلاس قابل دسترسی میباشد 
//readonly :  غیر قابل تغیر
//? :  پراپرتی اختیاری 
//static : دسترسی به متد و پراپرتی مستقیم از طریق کلاس و لازم به نمونه نباشد
class Users{
     constructor(public id:number, private readonly _name:string,private  pass:number, public loc?:string){} //propertes
    name(){
        console.log(this.id + this._name);
    }
    private ShowPass(){
        console.log(this.pass);   
    }
    FullName(){
        this.ShowPass()
    }
    static ShowLoc(){
        console.log('OK');
    }

    //برای گرفتن پراپرتی های پرایوت از گتر استفاده میکنیم
    get GetPass():number{ return this.pass}


    // برای ست کردن مقداری به پراپرتی های پرایوت از ستر استفاده میکنیم
    set SetPass(passwor:number){
        if(passwor >= 1000){
            this.pass = passwor
        }else{
            console.log('No!!!');   
        }
    }

}

let mohammad = new Users(1,'mohaamad',1234)




//ارث بری
class nums{
    constructor(public num_1:number, public num_2:number) {}
}
class numbers extends nums{
    constructor(public num_1,public num_2,public num_3) {
        super(num_1,num_2);
    }
    plus(){
        console.log(this.num_1 + this.num_2 + this.num_3)
    }
}

let P = new numbers(1,5,98)