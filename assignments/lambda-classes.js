// CODE here for your Lambda Classes
//base class
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//instructor class
class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

//student class 
class Student {
    cosntructor(attr) {
        super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;    
    }
    listSubjects() {
        this.favSubjects.forEach(function(subject){
            console.log(subject);   
        })
    }
    PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject} `;    
    }
    sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject} `;    
    }
}

//project manager class
class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel stand up time!`;    
    }
    debugCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code in ${subject}`;
    }
}

//