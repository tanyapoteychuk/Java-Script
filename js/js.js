// let x = 1.7;
// let result = (x+1)**2+3*(x+1);
// alert(result);
// x=3;
// result = (x+1)**2+3*(x+1);
// alert(result);

// let a=prompt('пожалуйста введите число 1');
// let b=prompt('пожалуйста введите число 2');
// a=Number(a);
// b=Number(b);
// let result = a + b;
// alert(result); 
// result = a * b;
// alert(result);

// let a=prompt('введите число 5');
// a=Number(a);
// let result=a**2;
// alert(result);
// result=a**3;
// alert(result);

// let a=prompt('первое число');
// let b=prompt('второе число');
// let c=prompt('третье число');
// a=Number(a);
// b=Number(b);
// c=Number(c);
// let result=((a*2)+(b/3)+(c**2));
// alert(result);


// let a=prompt('первое число');
// let b=prompt('второе число');
// let c=prompt('третье число');
// a=Number(a);
// b=Number(b);
// c=Number(c);
// let result=(((a+b)*2)-(b*2))/3;
// // alert(result);
// console.log('результат умножения',result, a*b*c);
// console.log('результат сложения',result, a+b+c);

// let a=4;
//  a=Number(a);
//  console.log('периметр', a*2);
//  console.log('площадь', a*4);

// let a=6;
// let b=5;
// a=Number(a);
// b=Number(b);
// let c=(a**2+b**2)*1/2;
// console.log('площадь', a*b*(1/2))
// console.log('периметр', a+b+c);
// console.log('гипотенуза',(a**2+b**2)*1/2);

// let nameFirst= prompt('как тебя зовут?','');
// alert(`Тебя зовут ${nameFirst}!`); 

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert (a+b);

// задание1
// let depozit=+prompt('Введите сумму депозита','');
// let month=+prompt('Введите количество месяцев','');
// let stavka=confirm('Процентная ставка 5% годовых');
// stavka=5;
// console.log('Прибыль с депозита за месяц', depozit*(stavka/100)/365*30);
// console.log('Прибыль за весь срок депозита', depozit*(stavka/100)/12*month);
// console.log('Общая сумма к выплате', depozit+(depozit*(stavka/100)/12*month));

// задание2
// let a=5678;
// let b=567;
// let c=56;
// let d=5;
// alert(`число: ${a%10}${b%10}${c%10}${d%10}`);


// let a=+prompt('Введите число');
// if (a>3) {
//     alert (`${a+10}`);
// } else{
//     alert(`${a-10}`);
// }

// let a=+prompt('Введите число');
// if (a<7) {
//    alert('Yes')
// } else if(a>10){
//     alert('No');
// } else if (a==9) {
//     alert('Error');
// }

// let month=prompt('Введите номер месяца');
// if (month===1){
//     alert('январь');
// } else if (month===2){
//     alert('февраль');
// }else if (month===3) {
//     alert('март');
// }

// let a=+prompt('введите число 1');
// let b=+prompt('введите число 2');
// if (a>b){
//     alert(a);
// } else if (a<b) {
//     alert(b);
// }

// let a=+prompt('введите число 1');
// let b=+prompt('введите число 2');
// if ((a-b)>100){
//     alert('yes');
// } else if((a-b)<100) {
//     alert("no");
// }

// let a=+prompt('введите число 1');
// let b=+prompt('введите число 2');
// if (a>b){
//     alert('yes');
// } else {
//     let c=a;
//     b=a;

// }

// let n=1;
// while (n<=10){
//     alert("you are welcome!");
//     n++;
// }

// let x=+prompt('введите число');
// for (let n=0; n<x; n++){
//     console.log('welcome');
// } 


// for (let n=1; n<=20; n++){
//     console.log(n);
// }


// for(let n=1001; n<=1025;n=n+3){
//     console.log(n);
// }

// for(let n=100; n>0; n=n-4){
//     console.log(n);
// }

// let n=+prompt('n');
// let s=0;
// for(let i=1; i<=n; i++ ){
//     s=s+i;
// }
// console.log(s);

// for(let n=0; n<=100; n=n+2){
//     console.log(n);
// }

// let a=+prompt('число1');
// let b=+prompt('число2');
// for (n=a; n<=b; n++ ){
//     if ((n%2)===0){
//         console.log(n);
//     }
// }



// ДОМАШКА
// задание1
// let x =+prompt('Введите 1 число');
// let y =+prompt('Введите 2 число');
// let c=+prompt('Введите 3 число');
// if ((x && y && c>10) && (x % 3===0) && (y % 3===0)){
//     alert('yes');
// } else {
//     alert('no');
// }


// задание 2
// let n=+prompt('Введите 1 число');
// if (n>=2 && n<=5){
//     alert(n=n+10);
// } else if ( n>=7 && n<=40){
//    alert(n=n-100);
// }else if ( n>=0 && n<=3000){
//     alert(n=n*3);
// }


// задание3
// let n=1;
// for (i=5; i<=111; i++){
//     n = n*i;
//     console.log(n);
// }


// задание 4
// let n=+prompt('введите кол-во строк');
// for (let i = 0; i <= n; i++) {
//     if (i % 2 == 0) {
//       console.log('*******');
//     }else if (i%2!=0){
//         console.log('****');
//     }
//   }


// задание 5
// let n=+prompt('введите число');
// let a=0;
// for (i=1; i<=n; i++ ){
//     a=a+i**2;
// }
// console.log(a);



// for (let x=1; x<=10; x++){
// let res=(Math.abs(x-5)-Math.sin(x))/3+Math.sqrt(Math.pow(x,2)+2014)*Math.cos(2*x)-3;
// console.log(res);
// }

// let x=3.6;
// let res;
// res=Math.E**(x-2)+Math.abs(Math.sin(x))-Math.pow(x,4)*Math.cos(1/x);
// console.log(res);

// let a=0.1;
// let b=0.2;
// let x=1;
// let res=Math.pow(x**2+b,1/5)-(b**2*(Math.sin(x+a))**3)/x;
// console.log(res);

// let a=+prompt('введите число 1');
// let b=+prompt('введите число 2');
// let sum=a+b;
// let proiz=a*b;
// console.log('сумма:', sum);
// console.log('произведение:', proiz);

// let a="*";
// let n=+prompt('число')
// for (let i=1; i<=n; i++){
//     console.log(a);
//     a=a+"*";
// }


// let a=10;
// let b=10;
// for (let i=1; i<=b; i++){
//     let c="0";
//     for (let k=1; k<=a; k++){
//        if(k==a || k==1 || c==i || i==b){
//            c=c+"1";
//        }
//         c=c+"0"; 
//     }
//     console.log(c);
// }

// квадрат с диагональю
// let a=5;
// let b=5;
// for (let r=1; r<=a; r++){
//     let s=" ";
//     for(let c=1; c<=b; c++){
//         if (r==1 || r==a || c==1 || c==b || r==c || r==(b+1)-c){
//             s=s+"1";
//         }else{
//             s=s+"0"; 
//         }
        
//     }
//     console.log(s);
// }



// Домашка 
// задание 1
// let n=+prompt('кол-во строк');
// let m=+prompt('кол-во троек');
// for (let r=1; r<=n; r++){
//     let a=" ";
//     for(let c=1; c<=m; c++){
//         if (r%2==0 && c%2==0 || r%2!=0 && c%2!=0){
//             a=a+"AAA";
//         }else {
//             a=a+"BBB";  
//         }
//     }
//     console.log(a);
// }
   

// задание2 нарисовать прямоугольник
// let a=+prompt('Введите кол-во строк');
// let b=a*2;
// for (let r=1; r<=a; r++){
//     let s=" ";
//    for (let c=1; c<=b; c++){
//        if (r==1 || r==a || c==1 || c==b){
//            s=s+"A";
//        }else {
//            s=s+"B";
//        }
//     }
//     console.log(s);
// }

// задание3 Вывести 3 случайных числа от 578 до 10024
// let min=578;
// let max=10024;
// console.log('1 число:' , (Math.floor(Math.random() * (max - min + 1)) + min));
// console.log('2 число:' , (Math.floor(Math.random() * (max - min + 1)) + min));
// console.log('3 число:' , (Math.floor(Math.random() * (max - min + 1)) + min));

// задание 4 Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// let max=Math.max(4, -2, 5, 19, -130, 0, 10);
// let min=Math.min(4, -2, 5, 19, -130, 0, 10);
// console.log('максимальное число:', max);
// console.log('минимальное число:', min);

// задание5 Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
// let a=+prompt('число 1');
// let b=+prompt('число 2');
// let res=Math.abs(a-b);
// console.log('модуль разности a-b равен: ', res);

// задание 6 нарисовать треугольник
// let b=+prompt('высота треугольника');
// let a=(b+1)/2;
// if (b%2==0){
//     console.log(NaN);
// }else{
//     for(let r=1; r<=a; r++){
//     let s = " ";
//     for (let c=1; c<=b; c++){
//         if (c<=a-r || c>=r+a){
//             s=s+"-";
//         }else{
//             s=s+"+";
//         }
//     }
//     console.log(s);
// }
// }







