// دکوریتور ها
// برای انجام عمل روی یک کلاس بکار میرود که میتوان پراپرتی ها و متد های یک کلاس را تغیر داد
// دکوریتور هارو میتوان برای کلاس - متد - پراپرتی و ... گذاشت
function Logger() {
    console.log('Logging...');
}

@Logger
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}