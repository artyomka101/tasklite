// // let a=10;
// // let b=5;

// // let sum = a+b;
// // let diff = a-b;

// // console.log(sum)
// // console.log(diff)

// // ===== Урок 2 =====

// // let title = "Прочитать конспект";

// // if(title === "")
// // {
// //     console.log("Название задачи не указано");
// // } else {
// //     console.log("Название задачи", title);
// // }

// // let task = 5;

// // if(task === 0){
// //     console.log("Нет задач для выполнения");
// // } else if(task <=3 ){
// //     console.log("Немного задач");
// // } else{
// //     console.log("Много задач");
// // }

//     // Домашняя работа
// // 2,3
// // let a=10;
// // let b=5;

// // let sum = a+b;
// // let diff = a-b;
// // let umno = a*b;
// // let delenie = a/b;

// // console.log(sum);
// // console.log(diff);
// // console.log(umno);
// // console.log(delenie);

// // // 4,5
// // let name = "Artem";
// // let full = "Volokitin";
// // let fullname = name + " " + full;
// // console.log(fullname);

// // // 8,9
// // let title = "Прочитать конспект";

// // if(title === "")
// // {
// //     console.log("Название задачи не указано");
// // } else {
// //     console.log("Задача:", title);
// // }

// // let task = 2;

// // if(task === 0){
// //     console.log("Нет задач для выполнения");
// // } else if(task <=3 ){
// //     console.log("Немного задач");
// // } else{
// //     console.log("Много задач");
// // }

// // // 10

// // let isCompleted = false;

// // if(isCompleted === true){
// //     console.log("Задача выполена");
// // }else  {
// //     console.log("Задача ещё в работе");
// // }

// // // 11

// // let urgent = 23;
// // let timebustro = false;

// // if(urgent === 0) {
// //     console.log("Все задачи завершены");
// // } else if(timebustro === true) {
// //     console.log("Есть срочные задачи");
// // } else {
// //     console.log("Задачи есть, но они не срочные");
// // }

// // // 12

// // let isAdmin = true;
// // let isModerator = false;

// // if(isAdmin === true || isModerator === true){
// //     console.log("Доступ разрешён");
// // }else{
// //     console.log("Доступ запрещён");
// // }

// // // Задача "Скидка в магазине"

// // let amount = 1000;

// // if(amount === 0){
// //     console.log("Корзина пуста");
// // }else if( amount < 1000){
// //     console.log("Скидка не применяется");
// // }else if(amount >= 1000 && amount < 5000){
// //     console.log("Скидака 5%");
// // }else if(amount > 5000){
// //     console.log("Скидка 10%");
// // }

//         // УРОК 3

// // function sum(a, b ){
// //     return a + b;
// // }
// // let result = sum(10, 15);
// // console.log(sum(2,3));

// // function isTaskDone(status)
// // {
// //     return status === "Выполненно";
// // }
// // console.log(isTaskDone("Выполненно"));

// // let done = isTaskDone("В процессе");
// // console.log(done);

// // function taskSummary(total, done)
// // {
// //     const active = total - done;
// //     console.log("Всего: " + total + " Активных: " + active + " Выполнено: " + done);
// // }
// // taskSummary(10,4);

// // урок 4

// let cities = ["Москва", "Питер", "Казань"];
// cities[2] = "Новосибирск";
// console.log(cities);

// let task =
// {
//     id: 1,
//     title: "Купить молоко",
//     status: "активна",
// };

// console.log(task.title);
// task.status = "выполена";
// console.log(task.status);

// let todoList = [
//   { id: 1, title: "Купить молоко", status: "активна" },
//   { id: 2, title: "Позвонить врачу", status: "выполнена" },
// ];
// console.log(todoList[1].title);
// console.log(todoList.length);

// let user =
// {
//     name: "Иван",
//     tasks: todoList
// }

// console.log(user);

// Домашняя работа

// 1. Функция sum(a, b) - возвращает сумму двух чисел
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3));
console.log(sum(10, 20));
console.log(sum(-5, 15));

// 2. Функция max(a, b) - возвращает большее из двух чисел
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(5, 3));
console.log(max(10, 20));
console.log(max(7, 7));

// 3. Функция printTask(title, status) - возвращает строку с информацией о задаче
function printTask(title, status) {
  return "Задача: " + title + " | Статус: " + status;
}

console.log(printTask("Сделать уроки", "в процессе"));
console.log(printTask("Сделать поесть", "выполнена"));
console.log(printTask("Прочитать книгу", "не начата"));

// 4. Функция isTaskDone(status) - проверяет, выполнена ли задача
function isTaskDone(status) {
  return status === "выполнена";
}

console.log(isTaskDone("выполнена"));
console.log(isTaskDone("в процессе"));
console.log(isTaskDone("не начата"));

// 5. Функция greetUser(name) - возвращает приветствие
function greetUser(name) {
  return "Добро пожаловать, " + name + "!";
}
console.log(greetUser("Иван"));
console.log(greetUser("Мария"));
console.log(greetUser("Алексей"));

// 6. Функция taskSummary(total, done) - возвращает сводку по задачам
function taskSummary(total, done) {
  const active = total - done;
  return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
}

console.log(taskSummary(10, 5));
console.log(taskSummary(20, 15));
console.log(taskSummary(7, 3));

// 7. Массив из 5 чисел
const numbers = [10, 25, 30, 45, 50];
console.log("Первый элемент:", numbers[0]);
console.log("Последний элемент:", numbers[numbers.length - 1]);

// 8. Массив из 4 городов
const cities = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"];
console.log(cities);
cities[1] = "Екатеринбург";
console.log(cities);

// 9. Объект task
const task = {
  id: 1,
  title: "Сделать уроки",
  status: "в процессе",
};
console.log("id:", task.id);
console.log("title:", task.title);
console.log("status:", task.status);

const tasks = [
  { id: 1, title: "Изучить функции", status: "выполнена" },
  { id: 2, title: "Изучить массивы", status: "в процессе" },
  { id: 3, title: "Изучить объекты", status: "не начата" },
];
console.log(tasks[0].title);
console.log(tasks[1].status);

console.log("до изменения:", tasks[0].status);
tasks[0].status = "выполнена";
console.log("после изменения:", tasks[0].status);

console.log("до добавления:", tasks.length);
tasks.push({ id: 4, title: "Практическая работа", status: "в процессе" });
console.log("после добавления:", tasks.length);
console.log("Новая задача:", tasks[tasks.length - 1]);

const user = {
  name: "Иван Петров",
  tasks: tasks,
};
console.log(user.name);
console.log(user.tasks.length);

function findTaskByTitle(tasks, title) {
  if (tasks[0].title === title) {
    return tasks[0];
  }

  if (tasks[1].title === title) {
    return tasks[1];
  }

  if (tasks[2].title === title) {
    return tasks[2];
  }

  if (tasks[3] && tasks[3].title === title) {
    return tasks[3];
  }

  return "Задача не найдена";
}

const foundTask = findTaskByTitle(tasks, "Изучить функции");
console.log("Результат:", foundTask);

const foundTask2 = findTaskByTitle(tasks, "Изучить массивы");
console.log("Результат:", foundTask2);

const notFound = findTaskByTitle(tasks, "Несуществующая задача");
console.log("Результат:", notFound);
