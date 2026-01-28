let a=10;
let b=5;

let sum = a+b;
let diff = a-b;

console.log(sum)
console.log(diff)

// ===== Урок 2 =====

let title = "Прочитать конспект";

if(title === "")
{
    console.log("Название задачи не указано");
} else {
    console.log("Название задачи", title);
}

let task = 5;

if(task === 0){
    console.log("Нет задач для выполнения");
} else if(task <=3 ){
    console.log("Немного задач");
} else{
    console.log("Много задач");
}