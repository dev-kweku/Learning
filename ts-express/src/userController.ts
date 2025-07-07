import fs from "node:fs"
import path from "node:path"

import { User } from "./types"
const filePath=path.join(__dirname,"./users.json")

function readUsers(): User[] {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

function saveUsers(users: User[]) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

  // GET /users
export function getAllUsers(): User[] {
    return readUsers();
}

// Get user by id

export function getUserById(id:number):User|undefined{
    return readUsers().find(user=>user.id===id)
}

// Post users {params:create User}
export function createUser(name:string,email:string):User{
    const users=readUsers();
    const newUser:User={id:Date.now(),name,email}
    users.push(newUser)
    saveUsers(users)
    return newUser;
}

// Put update users/:id

export function updateUserById(id:number,update:Partial<User>):User|null{
    const users=readUsers();
    const user=users.find(u=>u.id===id)
    if(!user) return null;
    Object.assign(user,update);
    saveUsers(users)
    return user;
}

// Delete users/:id

export function deleteUserById(id:number):boolean{
    const users=readUsers();
    const newUsers=users.filter(u=>u.id !==id);
    if(newUsers.length===users.length) return false;
    saveUsers(newUsers);
    return true;
}