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
