import { Permission } from "node-appwrite";
import { db, answerCollection } from "../name";
import { databases } from "./config";

export default async function createAnswerCollection() {
    await databases.createCollection(db, answerCollection, answerCollection, [
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log('Answer collection is created!');

    await Promise.all([
        databases.createStringAttribute(db, answerCollection, "content", 1000, true),
        databases.createStringAttribute(db, answerCollection, "questionId", 100, true),
        databases.createStringAttribute(db, answerCollection, "authorId", 100, true),
    ])
}

// const promise = databases.createCollection('<DATABASE_ID>', '[COLLECTION_ID]', '[NAME]');

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });