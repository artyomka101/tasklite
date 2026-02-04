// let a=10;
// let b=5;

// let sum = a+b;
// let diff = a-b;

// console.log(sum)
// console.log(diff)

// ===== Урок 2 =====

// let title = "Прочитать конспект";

// if(title === "")
// {
//     console.log("Название задачи не указано");
// } else {
//     console.log("Название задачи", title);
// }

// let task = 5;

// if(task === 0){
//     console.log("Нет задач для выполнения");
// } else if(task <=3 ){
//     console.log("Немного задач");
// } else{
//     console.log("Много задач");
// }

    // Домашняя работа
// 2,3
// let a=10;
// let b=5;

// let sum = a+b;
// let diff = a-b;
// let umno = a*b;
// let delenie = a/b;

// console.log(sum);
// console.log(diff);
// console.log(umno);
// console.log(delenie);

// // 4,5
// let name = "Artem";
// let full = "Volokitin";
// let fullname = name + " " + full;
// console.log(fullname);

// // 8,9
// let title = "Прочитать конспект";

// if(title === "")
// {
//     console.log("Название задачи не указано");
// } else {
//     console.log("Задача:", title);
// }

// let task = 2;

// if(task === 0){
//     console.log("Нет задач для выполнения");
// } else if(task <=3 ){
//     console.log("Немного задач");
// } else{
//     console.log("Много задач");
// }

// // 10

// let isCompleted = false;

// if(isCompleted === true){
//     console.log("Задача выполена");
// }else  {
//     console.log("Задача ещё в работе");
// }

// // 11

// let urgent = 23;
// let timebustro = false;

// if(urgent === 0) {
//     console.log("Все задачи завершены");
// } else if(timebustro === true) {
//     console.log("Есть срочные задачи");
// } else {
//     console.log("Задачи есть, но они не срочные");
// }

// // 12

// let isAdmin = true;
// let isModerator = false;

// if(isAdmin === true || isModerator === true){
//     console.log("Доступ разрешён");
// }else{
//     console.log("Доступ запрещён");
// }

// // Задача "Скидка в магазине"

// let amount = 1000;

// if(amount === 0){
//     console.log("Корзина пуста");
// }else if( amount < 1000){
//     console.log("Скидка не применяется");
// }else if(amount >= 1000 && amount < 5000){
//     console.log("Скидака 5%");
// }else if(amount > 5000){
//     console.log("Скидка 10%");
// }

        // УРОК 3

// function sum(a, b ){
//     return a + b;
// }
// let result = sum(10, 15);
// console.log(sum(2,3));

// function isTaskDone(status)
// {
//     return status === "Выполненно";
// }
// console.log(isTaskDone("Выполненно"));

// let done = isTaskDone("В процессе");
// console.log(done);


// function taskSummary(total, done)
// {
//     const active = total - done;
//     console.log("Всего: " + total + " Активных: " + active + " Выполнено: " + done);
// }
// taskSummary(10,4);


// урок 4

let cities = ["Москва", "Питер", "Казань"];
cities[2] = "Новосибирск";
console.log(cities); 

let task = 
{
    id: 1,
    title: "Купить молоко",
    status: "активна",
};

console.log(task.title);
task.status = "выполена";
console.log(task.status);

let todoList = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
];
console.log(todoList[1].title);
console.log(todoList.length); 


let user =
{
    name: "Иван",
    tasks: todoList
}

console.log(user);