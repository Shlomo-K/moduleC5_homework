/* Этап 1. Подготовка данных */
// JSON, который мы будем парсить
const jsonString = `
{
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
    ]
}
`;

/* Этап 2. Получение данных */

// Парсинг JSON
const data = JSON.parse(jsonString);

const list1 = data.list;

/* Этап 3. Запись данных в результирующий объект */
const list = [];

list1.forEach((item) => {
    list.push({
        name: item.name,
        age: Number(item.age),
        prof: item.prof,
    })
})
const result = new Object();
result.list = list;
console.log(result);

