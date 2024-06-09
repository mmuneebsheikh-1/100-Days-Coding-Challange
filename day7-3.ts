class Student{
StudentName: string ;
Age: number ;
Gender: string;
Standard: number;
Subjects: string[];

constructor(StudentName:string, Age:number, Gender:string, Standard: number, Subjects: string[]){
    this.StudentName = StudentName;
    this.Age = Age;
    this.Gender = Gender;
    this.Standard = Standard;
    this.Subjects = Subjects;
}
}
let Student1: Student = new Student("Imran", 14, "Male", 8,  ["Maths","Physics"]);
let Student2: Student = new Student("Sana", 13, "Female", 8, ["Maths","Physics","Chemistry"]);
console.log(Student1);
console.log(Student2);