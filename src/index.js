module.exports = function check(str, bracketsConfig) {
    let unique = {};
    let existBracket ={};
    //делаем объект с Типом скобок, куда будем записывать результат
    bracketsConfig.forEach(el => {
      for(let i=0; i < el.length; i++) {
        unique[el[i]] = 0;
      }
    });

    //теперь обходим строку, если символ есть в переданных скобках, тогда ---
    //добавляем это символ в массив unique
    str.split("").forEach(unit => {
      Object.keys(unique).forEach(el => {
        if (el === unit){
          unique[el]++;
        };
      });
    });
    let sum = 0;
    for (let key in unique) {
      sum += unique[key];
    }
    return sum%2 === 0 ? true : false;
}
