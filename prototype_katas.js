/*=========================================================
https://www.codewars.com/kata/53b2ff49b82af296ce001139/train/javascript

7 kyu
Array.prototype.reverse()

===========================================================
Метод Reverse() класса Array пропал! Перепиши, быстренько!

Когда этот метод вызывается, он меняет порядок элементов 
в исходном массиве. 
Затем он возвращает тот же исходный массив. Для передачи 
этого ката не требуется создавать новые массивы.

Вот пример:
var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array

*/

{
    const input = [1, 2, 3, 4];
    Array.prototype.reverse = function() {
        for(let i = this.length - 1; i >= 0; i--) {
            let ft = this.shift();
            this.splice(i,0,ft);
        }
        return this;
    }
    // console.log(input.reverse());
}



/*==========================================================
https://www.codewars.com/kata/58638bd2210be9a9690001f7/train/javascript

7 kyu
Array.prototype.size()

==========================================================

Реализуйте Array.prototype.size(), который должен просто 
возвращать длину массива. Но сделайте это без использования 
Array.prototype.length!
Где .length — это свойство, .size() — это метод.

Правила
Поскольку отключить [].length совершенно невозможно, 
а фильтрация по «длине» в лучшем случае сомнительная идея,
ЭТО КАТА РАБОТАЕТ ПО СИСТЕМЕ ЧЕСТИ.
Вы можете обмануть. Но у вас могут возникнуть проблемы со 
сном. Или $DEITY может убить щенка.

Вам не обязательно поддерживать разреженные массивы 
(но можно!). Все тестирование будет проводиться с плотными 
массивами.
Значения не будут undefined. Вам нужно поддерживать только 
реальные массивы.

Ваш метод нужно только читать. Аргументы следует игнорировать. 
Этот объект не должен быть изменен.

Будь креативным!

*/
{
    let arr = [];
    let arr2 = [1,2];
    let arr3 = [1,2,3];

    Array.prototype.size = function() {
        let size = 0;
        for(let item of this) {
            size += 1;
        }
        return size;
      };
    //   console.log(arr.size());
    //   console.log(arr2.size());
    //   console.log(arr3.size());
}


/*=========================================================
https://www.codewars.com/kata/56dd9b84fe5754786f0014f7/train/javascript

8 kyu
Implement Array.prototype.filter()

============================================================

Мы хотим реализовать функцию Array.prototype.filter(), 
аналогичную существующей Array.prototype.filter(). 
Другая похожая функция — _.filter() в underscore.js и 
lodash.js.

Использование будет довольно простым, например:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

Конечно, существующая функция Array.prototype.filter() 
не определена для целей этого Ката.
*/
{
    let arr = [1, 2, 3, 4, 5];

    Array.prototype.filter = function (func) {
        let arr = [];
        this.map(el => {
            if(func.call(this, el)) arr.push(el);
        });
        return arr;
      }


    //   console.log(arr.filter(num => num > 3));
}