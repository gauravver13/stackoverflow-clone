import { Permission } from "node-appwrite";
import { db, voteCollection } from "../name";
import { databases } from "./config";

export default async function createVoteCollection() {
    await databases.createCollection(db, voteCollection, voteCollection, [
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])

    console.log('Create Vote Collection..!');
}