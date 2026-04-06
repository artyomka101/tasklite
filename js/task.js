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

//     Домашняя работа
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

//         УРОК 3

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

// let tasks = [
//   { id: 1, title: "Купить молоко", status: "активна" },
//   { id: 2, title: "Позвонить врачу", status: "выполнена" },
//   { id: 3, title: "Сходить в магазин", status: "активна" },
//   { id: 4, title: "Покушать", status: "выполнена" },
//   { id: 5, title: "Поиграть", status: "активна" },
//   { id: 6, title: "Доделать уроки", status: "выполнена" },
// ];
// console.log(task[1].title);
// console.log(task.length);

// let user =
// {
//     name: "Иван",
//     tasks: todoList
// }

// console.log(user);

// Домашняя работа

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 3));
// console.log(sum(10, 20));
// console.log(sum(-5, 15));

// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(max(5, 3));
// console.log(max(10, 20));
// console.log(max(7, 7));

// function printTask(title, status) {
//   return "Задача: " + title + " | Статус: " + status;
// }

// console.log(printTask("Сделать уроки", "в процессе"));
// console.log(printTask("Сделать поесть", "выполнена"));
// console.log(printTask("Прочитать книгу", "не начата"));

// function isTaskDone(status) {
//   return status === "выполнена";
// }

// console.log(isTaskDone("выполнена"));
// console.log(isTaskDone("в процессе"));
// console.log(isTaskDone("не начата"));

// function greetUser(name) {
//   return "Добро пожаловать, " + name + "!";
// }
// console.log(greetUser("Иван"));
// console.log(greetUser("Мария"));
// console.log(greetUser("Алексей"));

// function taskSummary(total, done) {
//   const active = total - done;
//   return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
// }

// console.log(taskSummary(10, 5));
// console.log(taskSummary(20, 15));
// console.log(taskSummary(7, 3));

// const numbers = [10, 25, 30, 45, 50];
// console.log("Первый элемент:", numbers[0]);
// console.log("Последний элемент:", numbers[numbers.length - 1]);

// const cities = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"];
// console.log(cities);
// cities[1] = "Екатеринбург";
// console.log(cities);

// const task = {
//   id: 1,
//   title: "Сделать уроки",
//   status: "в процессе",
// };
// console.log("id:", task.id);
// console.log("title:", task.title);
// console.log("status:", task.status);

// const tasks = [
//   { id: 1, title: "Изучить функции", status: "выполнена" },
//   { id: 2, title: "Изучить массивы", status: "в процессе" },
//   { id: 3, title: "Изучить объекты", status: "не начата" },
// ];
// console.log(tasks[0].title);
// console.log(tasks[1].status);

// console.log("до изменения:", tasks[0].status);
// tasks[0].status = "выполнена";
// console.log("после изменения:", tasks[0].status);

// console.log("до добавления:", tasks.length);
// tasks.push({ id: 4, title: "Практическая работа", status: "в процессе" });
// console.log("после добавления:", tasks.length);
// console.log("Новая задача:", tasks[tasks.length - 1]);

// const user = {
//   name: "Иван Петров",
//   tasks: tasks,
// };
// console.log(user.name);
// console.log(user.tasks.length);

// function findTaskByTitle(tasks, title) {
//   if (tasks[0].title === title) {
//     return tasks[0];
//   }

//   if (tasks[1].title === title) {
//     return tasks[1];
//   }

//   if (tasks[2].title === title) {
//     return tasks[2];
//   }

//   if (tasks[3] && tasks[3].title === title) {
//     return tasks[3];
//   }

//   return "Задача не найдена";
// }

// const foundTask = findTaskByTitle(tasks, "Изучить функции");
// console.log("Результат:", foundTask);

// const foundTask2 = findTaskByTitle(tasks, "Изучить массивы");
// console.log("Результат:", foundTask2);

// const notFound = findTaskByTitle(tasks, "Несуществующая задача");
// console.log("Результат:", notFound);

// урок 5 09.02

// function filterByStatus(tasks, status) {
//   // return tasks.filter(function (task){
//   //   return task.status === status
//   // })

//   return tasks.filter((t) => t.status === status);
// }

// console.log(filterByStatus(tasks, "выполнена"));

// function sortByName(tasks) {
//   tasks.sort((a, b) => a.title.localeCompare(b.title));

//   return tasks;
// }

// console.log(sortByName(tasks));

// function searchByTitle(tasks, query) {
//   let q = String(query).toLowerCase();
//   return tasks.filter((task) => task.title.toLowerCase().indexOf(q) !== -1);
// }

// console.log(searchByTitle(tasks, "по"));

// function toggleTaskStatus(tasks, id) {
//   return tasks.map(function (task) {
//     if (task.id === id) {
//       const newStatus = task.status === "выполнена" ? "активна" : "выполнена";

//       return {
//         id: task.id,
//         title: task.title,
//         status: newStatus,
//       };
//     }

//     return task;
//   });
// }

// console.log(toggleTaskStatus(tasks, 1));

// Урок 6 или 7 11.02

// for (let i = 0; i < tasks.length; i++) {
//   console.log(tasks[i].id + ": " + tasks[i].title);
// }

// for (let task of tasks) {
//   console.log(task.id + ": " + task.title);
// }

// let i = 0;
// let total = 0;
// let done = 0;
// let active = 0;

// while (i < tasks.length) {
//   total++;
//   if (tasks[i].status === "выполнена") {
//     done++;
//   } else {
//     active++;
//   }
//   i++;
// }

// console.log(
//   "Всего: " + total + "| Выполнено: " + done + "| Активных: " + active,
// );

// for (let task of tasks) {
//   if (task.status === "активна") {
//     console.log("Активная задача: " + task.title);
//   }
// }

// tasks.forEach(task => {
//   console.log(task.id + " " + task.title + " (" + task.status + ")");
// })

// let searchTitle = "Купить молоко"
// let found = null;

// for(let task of tasks){
//   if (task.title === searchTitle){
//     found = task;
//     break;
//   }
// }

// if(found){
//   console.log("Задача найдена: ", found);
// }else{
//   console.log("Задача не найдена");
// }

// let activeTasks = []

// for(let task of tasks){
//   if(task.status === "активна"){
//     activeTasks.push(task);
//   }
// }

// console.log(activeTasks)

// Домашняя работа

// let tasks = [
//   { id: 1, title: "Купить молоко", status: "активна" },
//   { id: 2, title: "Позвонить врачу", status: "выполнена" },
//   { id: 3, title: "Сходить в магазин", status: "активна" },
//   { id: 4, title: "Покушать", status: "выполнена" },
//   { id: 5, title: "Поиграть", status: "активна" },
//   { id: 6, title: "Доделать уроки", status: "выполнена" },
// ];

//  2

// for (let i = 0; i < tasks.length; i++) {
//   console.log(tasks[i].id + ": " + tasks[i].title);
// }

//  3

// for (let task of tasks) {
//   console.log(task.id + ": " + task.title);
// }

// // 4

// let i = 0;
// let total = 0;
// let active = 0;
// let completed = 0;
// while (i < tasks.length) {
//   total++;
//   if (tasks[i].status === "активна") {
//     active++;
//   } else {
//     completed++;
//   }
//   i++;
// }
// console.log(
//   "Всего: " + total + " | Активных: " + active + " | Выполненных: " + completed,
// );

// // 5

// for (let task of tasks) {
//   if (task.status === "активна") {
//     console.log(task.title);
//   }
// }

// // 6

// tasks.forEach((task) => {
//   console.log("#" + task.id + " " + task.title + " (" + task.status + ")");
// });

// // 7

// let searchTitle = "Позвонить врачу";
// let found = null;

// for (let task of tasks) {
//   if (task.title === searchTitle) {
//     found = task;
//     break;
//   }
// }

// if (found) {
//   console.log("Задача найдена: ", found);
// } else {
//   console.log("Задача не найдена");
// }

// // 8

// let activeTasks = [];
// for (let task of tasks) {
//   if (task.status === "активна") {
//     activeTasks.push(task);
//   }
// }
// console.log(activeTasks);

// // 9

// function filterByStatus(status) {
//   let result = [];
//   for (let task of tasks) {
//     if (task.status === status) {
//       result.push(task);
//     }
//   }
//   return result;
// }
// console.log("Активные:", filterByStatus("активна"));
// console.log("Выполненные:", filterByStatus("выполнена"));

// // 12

// function deleteById(id) {
//   let result = [];
//   for (let task of tasks) {
//     if (task.id !== id) {
//       result.push(task);
//     }
//   }
//   return result;
// }

// console.log(deleteById(2));

// // 13

// function toggleStatus(id) {
//   let result = [];
//   for (let task of tasks) {
//     if (task.id === id) {
//       let newTask = {
//         id: task.id,
//         title: task.title,
//         status: task.status === "активна" ? "выполнена" : "активна",
//       };
//       result.push(newTask);
//     } else {
//       result.push(task);
//     }
//   }
//   return result;
// }

// console.log(toggleStatus(3));

// // 14

// function clearCompleted() {
//   let result = [];
//   for (let task of tasks) {
//     if (task.status === "активна") {
//       result.push(task);
//     }
//   }
//   return result;
// }

// console.log(clearCompleted());

// // Самостоятельная часть

// function findTaskByKeyword(tasks, keyword) {
//   for (let task of tasks) {
//     if (task.title.toLowerCase().includes(keyword.toLowerCase())) {
//       return task;
//     }
//   }
//   return "Задача не найдена";
// }
// console.log(findTaskByKeyword(tasks, "Сходить"));
// console.log(findTaskByKeyword(tasks, "отчёт"));
// console.log(findTaskByKeyword(tasks, "тест"));

// Урок 04.03

// const now = new Date();
// console.log(now);

// const day = now.getDate();
// const month = now.getMonth() + 1;
// const year = now.getFullYear();
// console.log(`${day}.${month}.${year}`);

// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();
// console.log(`${hours}:${minutes}:${seconds}`);

// console.log(now.toLocaleString());

// function formatDate(date) {
//   const d = date.getDate().toString().padStart(2, '0');
//   const m = (date.getMonth() + 1).toString().padStart(2, '0');
//   const y = date.getFullYear();
//   const h = date.getHours().toString().padStart(2, '0');
//   const min = date.getMinutes().toString().padStart(2, '0');
//   return `${d}.${m}.${y}, ${h}:${min}`;
// }

// console.log(formatDate(new Date()));

// const days = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота"
// ];

// const dayName = days[now.getDay()];
// console.log(dayName);

// let timeOfDay;

// if (hours >= 0 && hours < 6) {
//   timeOfDay = "Ночь";
// } else if (hours < 13) {
//   timeOfDay = "Утро";
// } else if (hours < 16) {
//   timeOfDay = "День";
// } else {
//   timeOfDay = "Вечер";
// }

// console.log(`Сегодня ${dayName}, сейчас ${timeOfDay}`);

// const taskList = [
//   { text: "Завершить проект по конкурсу" },
//   { text: "Купить продукты" },
//   { text: "Обновить задачи проекта" },
//   { text: "Позвонить маме" },
//   { text: "Сдать проект до пятницы" },
//   { text: "Прочитать книгу" },
// ];

// const filtered = taskList.filter((task) =>
//   task.text.toLowerCase().includes("проект")
// );

// console.log(filtered);

const tasks = [
  {
    title: "купить молоко",
    deadline: "2026-04-10",
    status: "DONE",
  },
  {
    title: "Погулять с собакой",
    deadline: "2026-11-10",
    status: "PENDING",
  },
  {
    title: "Сделать уроки",
    deadline: "2026-09-10",
    status: "done",
  },
  {
    title: "Сходить в бассейн",
    deadline: "2026-06-10",
    status: "pending",
  },
];

function getClosestTask(tasks) {
  let closestTask = null;
  let closestTime = Infinity;

  const today = new Date();

  for (let task of tasks) {
    const status = String(task.status || "")
      .trim()
      .toLowerCase();

    if (status !== "done") {
      const deadline = new Date(task.deadline);

      const diff = deadline - today;
      if (diff >= 0 && diff < closestTime) {
        closestTime = diff;
        closestTask = task;
      }
    }
  }

  if (!closestTask) {
    return "Нет активных задач";
  }

  return closestTask.title;
}
console.log(getClosestTask(tasks))


