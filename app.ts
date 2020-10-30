const person: {
    name:string, 
    age:number,
    hobbies: string[],
    // hobbies: Array<string>,
    role: [number, string]
} = {
    name: "Maximilian",
    age: 30,
    hobbies:['Sports', 'Cooking'],
    role: [2, 'author ']
};


person.role.push('admin');
console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}