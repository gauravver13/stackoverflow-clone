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

    // Creating Attributes 
    await Promise.all([
        databases.createStringAttribute(db, voteCollection, "votedById", 100, true),
        databases.createStringAttribute(db, voteCollection, "typeId", 100, true),
        databases.createEnumAttribute(db, voteCollection, "voteStatus", ["upvoted", "downvoted"], true),
        databases.createEnumAttribute(db, voteCollection, "type", ["question", "answer"], true)
    ]);
    console.log('Vote attribute created..!');
}
