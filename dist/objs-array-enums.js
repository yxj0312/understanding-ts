"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // role: [2, 'author '],
    role: Role.ADMIN
};
// person.role.push('admin');
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
//# sourceMappingURL=objs-array-enums.js.map