/*
https://www.codewars.com/kata/53b2ff49b82af296ce001139/train/javascript

7 kyu
Array.prototype.reverse()

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
    console.log(input.reverse());
}