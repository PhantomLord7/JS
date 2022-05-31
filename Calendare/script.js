const leapYear = years => new Date(years, 1, 29).getMonth() === 1;
console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1999));
console.log(leapYear(1815));
console.log(leapYear(1920));