//Задание - 1

const user = []

for (let i =1; i <=10; i++){
    let name = prompt('Введите имя')
    let age = prompt('Введите возраст')

    user[i] ={
        name: name,
        age: age
    }
       
}

for (const key in user) {
    console.log(`Пользователь ${key}`);

    for(const newKey in user[key]){

        console.log(newKey == 'name' ? `Ваше имя ${user[key][newKey]}`: `Ваш возрост ${user[key][newKey]}`);
    }
        
}


// Задание - 2

let cart = receipt()

let dos = 9000
let order = 'Вы закалали '

for(const key in cart) {
    order = order + ` ${key}`
    for (const newKey in cart[key]){
        //order = newKey == 'info' ? order + `${cart[key][newKey]}`: ''
        dos = newKey == 'price'? dos + cart[key][newKey]: dos 
    }
}
console.log(`${order} | общая сумма ${dos} вместе с доставкой`);





