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
class Student extends Instructor {
    constructor(attr) {
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

//Instructor Objects
const Britt = new Instructor ({
    name: 'Britt Hemming',
    age: 25,
    location: 'New York, NY',
    specialty: 'JavaScript',
    favLanguage: 'React',
    catchPhrase: 'Everyone break out into small groups',
});

const Josh = new Instructor ({
    name: 'Josh Knell',
    age: 30,
    location: 'Salt Lake City, Utah',
    specialty: 'JavaScript',
    favLanguage: 'Street',
    catchPhrase: 'Easy, right?!!', 
});

//Student Objects
const Sara = new Student ({
    name: 'Sara Alkhamri',
    age: 34,
    location: 'Joshua Tree, CA',
    previousBackground: 'Client Support',
    className: 'WEB22',
    favSubjects: ['Arts', 'Literature'],  
});

const Nora = new Student ({
    name: 'Nora Alkhamri',
    age: 29,
    location: 'London, UK',
    previousBackground: 'Visual Artist',
    className: 'WEB22',
    favSubjects: ['Science', 'Biology', 'Math'],  
});

const Abdul = new ProjectManager ({
    name: 'Abdul Ahmed',
    age: 30,
    location: 'Washington, DC',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'You can do it!',
    gradClassName: 'Webpt6',
    favInstructor: 'Josh',
});

const Emily = new ProjectManager ({
    name: 'Emily McClanahan',
    age: 26,
    location: 'Houston, TX',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: 'I believe in you!',
    gradClassName: 'Webpt6',
    favInstructor: 'Ryan',
})

//Instructor testing
console.log(Britt.demo('React'));
console.log(Josh.catchPhrase);

//Student testing
console.log(Sara.sprintChallenge('JavaScript'));
console.log(Nora.name);
console.log(Nora.speak());
console.log(Sara.speak());

//PM testing
console.log(Emily.standUp('Webpt6'));
console.log(Emily.debugCode(Nora, 'JavaScript'));
console.log(Abdul.favInstructor);
console.log(Abdul.standUp('Webpt6'));
console.log(Abdul.speak());
console.log(Abdul.catchPhrase)