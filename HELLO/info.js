'use strict';

// первый и второй элементы не нужны
let [, , title] = "Юлий Цезарь Император Рима".split(" ");

alert(title); // Император




'use strict';

let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

alert(firstName); // Юлий
alert(lastName);  // Цезарь
alert(rest);      // Император,Рима (массив из 2х элементов)








'use strict';

function defaultLastName() {
  return Date.now() + '-visitor';
}

// lastName получит значение, соответствующее текущей дате:
let [firstName, lastName=defaultLastName()] = ["Вася"];

alert(firstName); // Вася
alert(lastName);  // 1436...-visitor









'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200






'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {width: w, height: h, title} = options;

alert(title);  // Меню
alert(w);      // 100
alert(h);      // 200







'use strict';

let options = {
  title: "Меню"
};

let {width=100, height=200, title} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200








'use strict';

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Пончик", "Пирожное"]
}

let { title="Меню", size: {width, height}, items: [item1, item2] } = options;

// Меню 100 200 Пончик Пирожное
alert(title);  // Меню
alert(width);  // 100
alert(height); // 200
alert(item1);  // Пончик
alert(item2);  // Пирожное






function sayHi(who = getCurrentUser().toUpperCase()) {
  alert('Привет, ' + who);
}

function getCurrentUser() {
  return 'Вася';
}

sayHi(); // Привет, ВАСЯ




function showName(firstName, lastName, ...rest) {
  alert(firstName + ' ' + lastName + ' - ' + rest);
}

// выведет: Юлий Цезарь - Император,Рима
showName("Юлий", "Цезарь", "Император", "Рима");





'use strict';

let numbers = [2, 3, 15];

// Оператор ... в вызове передаст массив как список аргументов
// Этот вызов аналогичен Math.max(2, 3, 15)
let max = Math.max(...numbers);

alert( max ); // 15ъ







'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

function showMenu({title, width, height}) {
  alert(title + ' ' + width + ' ' + height); // Меню 100 200
}

showMenu(options);





'use strict';

let inc = x => x+1;

alert( inc(1) ); // 2
Эти две записи – примерно аналогичны:

let inc = x => x+1;

let inc = function(x) { return x + 1; };







Если аргументов несколько, то нужно обернуть их в скобки, вот так:

 


'use strict';

let sum = (a,b) => a + b;

// аналог с function
// let sum = function(a, b) { return a + b; };

alert( sum(1, 2) ); // 3
Если нужно задать функцию без аргументов, то также используются скобки, в этом случае – пустые:

 



'use strict';

// вызов getTime() будет возвращать текущее время
let getTime = () => new Date().getHours() + ':' + new Date().getMinutes();

alert( getTime() ); // текущее время
Когда тело функции достаточно большое, то можно его обернуть в фигурные скобки {…}:

 







'use strict';

let getTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return hours + ':' + minutes;
};

alert( getTime() ); // текущее время







`use strict`;

let arr = [5, 8, 3];

let sorted = arr.sort( (a,b) => a - b );

alert(sorted); // 3, 5, 8









'use strict';

let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],

  showList: function() {
    this.students.forEach(
      student => alert(this.title + ': ' + student)
    )
  }
}

group.showList();
// Наш курс: Вася
// Наш курс: Петя
// Наш курс: Даша







'use strict';

function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}

f(1); // 1










'use strict';
let apples = 2;
let oranges = 3;

alert(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5






'use strict';

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("Вася");
user.sayHi(); // Вася







'use strict';

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // геттер
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // сеттер
  set fullName(newValue) {
    [this.firstName, this.lastName] = newValue.split(' ');
  }

  // вычисляемое название метода
  ["test".toUpperCase()]() {
    alert("PASSED!");
  }

};

let user = new User("Вася", "Пупков");
alert( user.fullName ); // Вася Пупков
user.fullName = "Иван Петров";
alert( user.fullName ); // Иван Петров
user.TEST(); // PASSED!







'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert("I walk: " + this.name);
  }
}

class Rabbit extends Animal {
  walk() {
    super.walk();
    alert("...and jump!");
  }
}

new Rabbit("Вася").walk();
// I walk: Вася
// and jump!





'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert("I walk: " + this.name);
  }
}

class Rabbit extends Animal {
  constructor() {
    // вызвать конструктор Animal с аргументом "Кроль"
    super("Кроль"); // то же, что и Animal.call(this, "Кроль")
  }
}

new Rabbit().walk(); // I walk: Кроль






'use strict';

let range = {
  from: 1,
  to: 5
}

// сделаем объект range итерируемым
range[Symbol.iterator] = function() {

  let current = this.from;
  let last = this.to;

  // метод должен вернуть объект с методом next()
  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        };
      } else {
        return {
          done: true
        };
      }
    }

  }
};

for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}






'use strict';

let map = new Map();

map.set('1', 'str1');   // ключ-строка
map.set(1, 'num1');     // число
map.set(true, 'bool1'); // булевое значение

// в обычном объекте это было бы одно и то же,
// map сохраняет тип ключа
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3






'use strict';

let recipeMap = new Map([
  ['огурцов',   '500 гр'],
  ['помидоров', '350 гр'],
  ['сметаны',   '50 гр']
]);

// цикл по ключам
for(let fruit of recipeMap.keys()) {
  alert(fruit); // огурцов, помидоров, сметаны
}

// цикл по значениям
for(let amount of recipeMap.values()) {
  alert(amount); // 500 гр, 350 гр, 50 гр
}

// цикл по записям [ключ,значение]
for(let entry of recipeMap) { // то же что и recipeMap.entries()
  alert(entry); // огурцов,500 гр , и т.д., массивы по 2 значения
}






function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z







// генератор для получения и показа аватара
// он yield'ит промисы
function* showUserAvatar() {

  let userFetch = yield fetch('/article/generator/user.json');
  let userInfo = yield userFetch.json();

  let githubFetch = yield fetch(`https://api.github.com/users/${userInfo.name}`);
  let githubUserInfo = yield githubFetch.json();

  let img = new Image();
  img.src = githubUserInfo.avatar_url;
  img.className = "promise-avatar-example";
  document.body.appendChild(img);

  yield new Promise(resolve => setTimeout(resolve, 3000));

  img.remove();

  return img.src;
}

// вспомогательная функция-чернорабочий
// для выполнения промисов из generator
function execute(generator, yieldValue) {

  let next = generator.next(yieldValue);

  if (!next.done) {
    next.value.then(
      result => execute(generator, result),
      err => generator.throw(err)
    );
  } else {
    // обработаем результат return из генератора
    // обычно здесь вызов callback или что-то в этом духе
    alert(next.value);
  }

}

execute( showUserAvatar() );





(приведёт к генерации TypeError).

Пример с выводом всех операций чтения и записи:

 

















'use strict';

let user = {};

let proxy = new Proxy(user, {
  get(target, prop) {
    alert(`Чтение ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    alert(`Запись ${prop} ${value}`);
    target[prop] = value;
    return true;
  }
});

proxy.firstName = "Ilya"; // запись

proxy.firstName; // чтение

alert(user.firstName); // Ilya







'use strict';

let dictionary = {
  'Hello': 'Привет',
  'Bye': 'Пока'
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    if (phrase in target) {
      return target[phrase];
    } else {
      console.log(`No phrase: ${phrase}`);
      return phrase;
    }
  }
})

// Обращаемся к произвольным свойствам словаря!
alert( dictionary['Hello'] ); // Привет
alert( dictionary['Welcome']); // Welcome (без перевода)






'use strict';

let dictionary = {
  'Hello': 'Привет'
};

dictionary = new Proxy(dictionary, {
  has(target, phrase) {
    return true;
  }
});

alert("BlaBlaBla" in dictionary); // true





'use strict';

let dictionary = {
  'Hello': 'Привет'
};

let proxy = new Proxy(dictionary, {
  deleteProperty(target, phrase) {
    return true; // ничего не делаем, но возвращает true
  }
});

// не удалит свойство
delete proxy['Hello'];

alert("Hello" in dictionary); // true

// будет то же самое, что и выше
// так как нет ловушки has, операция in сработает на исходном объекте
alert("Hello" in proxy); // true














'use strict';

function sum(a, b) {
  return a + b;
}

let proxy = new Proxy(sum, {
  // передаст вызов в target, предварительно сообщив о нём
  apply: function(target, thisArg, argumentsList) {
    alert(`Буду вычислять сумму: ${argumentsList}`);
    return target.apply(thisArg, argumentsList);
  }
});

// Выведет сначала сообщение из прокси,
// а затем уже сумму
alert( proxy(1, 2) );





'use strict';

function User(name, surname) {
  this.name = name;
  this.surname = surname;
}

let UserProxy = new Proxy(User, {
  // передаст вызов new User, предварительно сообщив о нём
  construct: function(target, argumentsList) {
    alert(`Запуск new с аргументами: ${argumentsList}`);
    return new target(...argumentsList);
  }
});

let user = new UserProxy("Ilya", "Kantor");

alert( user.name ); // Ilya