enum Role { ADMIN, READ_ONLY, AUTHOR };

const person: {
    name:string, 
    age:number,
    hobbies: string[],
    // hobbies: Array<string>,
    // role: [number, string],
    role: Role
} = {
    name: "Maximilian",
    age: 30,
    hobbies:['Sports', 'Cooking'],
    // role: [2, 'author '],
    role: Role.ADMIN 
};


// person.role.push('admin');
console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}