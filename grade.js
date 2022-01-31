function gradeCalculation(marks) {
    if (marks >= 80) {
        console.log('A+');
    } else if (marks >= 70 && marks <=79 ) {
        console.log('A');
    }
     else if (marks >= 60 && marks <=69 ) {
        console.log('A-');
    }
     else if (marks >= 50 && marks <=59 ) {
        console.log('B');
    }
     else if (marks >= 40 && marks <=49 ) {
        console.log('C');
    }
     else if (marks >= 33 && marks <=39 ) {
        console.log('D');
    } else{
        console.log('F');
    }
}

gradeCalculation(90);
gradeCalculation(80);
gradeCalculation(70);
gradeCalculation(60);
gradeCalculation(50);
gradeCalculation(40);
gradeCalculation(30);
gradeCalculation(20);
gradeCalculation(35);