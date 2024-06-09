var Student = /** @class */ (function () {
    function Student(StudentName, Age, Gender, Standard, Subjects) {
        this.StudentName = StudentName;
        this.Age = Age;
        this.Gender = Gender;
        this.Standard = Standard;
        this.Subjects = Subjects;
    }
    return Student;
}());
var Student1 = new Student("Imran", 14, "Male", 8, ["Maths", "Physics"]);
var Student2 = new Student("Sana", 13, "Female", 8, ["Maths", "Physics", "Chemistry"]);
console.log(Student1);
console.log(Student2);
