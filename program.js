a = [1, 2, 3, 4];
b = a.filter((number) => { if (number % 2 != 0) return number; });
console.log(b);
console.log(a);
