/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// XML, который мы будем парсить
const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDom = parser.parseFromString(xmlString, "text/xml");

const students = xmlDom.querySelectorAll("student");




/* Этап 3. Запись данных в результирующий объект */
const list = [];

students.forEach((item) => {
    const nameNode = item.querySelector("name");
    const firstNode = nameNode.querySelector("first");
    const secondNode = nameNode.querySelector("second");
    const ageNode = item.querySelector("age");
    const profNode = item.querySelector("prof");
    const langAttr = nameNode.getAttribute("lang")

    list.push({
        name: firstNode.textContent + " " + secondNode.textContent,
        age: ageNode.textContent,
        prof: profNode.textContent,
        lang: langAttr,
    })
})
const result = new Object();
result.list = list;
console.log('result', result);

