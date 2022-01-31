function checkLeapYear(year) {
    if (year%4==0) {
        console.log(year, "is Leap year");
    }
    else{
        console.log(year, "is not Leap year");
    }
}

checkLeapYear(2024);