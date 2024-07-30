import { Permission } from "node-appwrite";
import { questionAttachmentBucket } from "../name";
import { storage } from "./config";

export default async function getOrCreateStorage() {
    try {
            await storage.getBucket(questionAttachmentBucket)
            console.log('Bucket Id is connected!');
            
    } catch (error) {
        try {
            await storage.createBucket(
                questionAttachmentBucket,
                questionAttachmentBucket,
                [
                    Permission.create("users"),
                    Permission.read("users"),
                    Permission.update("users"),
                    Permission.delete("users"),
                ],
                false,
                undefined,
                undefined,
                ["jpg", "jpeg", "png", "webp", "heic", "gif"],
            )

            console.log('Storage Created');
            console.log('Storage Created');
        } catch (error) {
            console.log('Error creating storage..!', error);
        }
    }
}