// Задание 1

const parser = new DOMParser();

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

const xmlDOM = parser.parseFromString(xmlString, "text/xml");


const list = xmlDOM.querySelector("list");
const student = list.querySelectorAll("student");

const l = [];

for (let i = 0; i < student.length; i = i + 1) {
  const name = student[i].querySelector("name");
  const first = name.querySelector("first");
  const second = name.querySelector("second");
  const age = student[i].querySelector("age");
  const prof = student[i].querySelector("prof");
  const langName = name.getAttribute('lang');
  const result = {
    name: `${first.textContent} ${second.textContent}`,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: langName,
  };
 
  l.push(result)
}
res = {l}
console.log(res);
