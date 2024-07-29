import { Permission } from "node-appwrite";
import { commentCollection, db } from "../name";
import { databases } from "./config";

export default async function createCommentCollection() {
    await databases.createCollection(db, commentCollection, commentCollection, [
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    
    console.log('Users were updated..!>'); 
}