import { FirestoreInstance } from "./firestore-instance"
import { Firestore } from "@google-cloud/firestore";

export abstract class BaseRepository {

    private nameCollection: string
    private firebaseDb: Firestore = FirestoreInstance.getInstance()

    constructor(nameCollection: string) {
        this.nameCollection = nameCollection
    }

    async getCollection() {
        return this.firebaseDb.collection(this.nameCollection)
    }

    async save(obj: any): Promise<any> {
        const ref = this.firebaseDb.collection(this.nameCollection)

        return await ref.add(
            JSON.parse(JSON.stringify(obj))
        ).then(ref => {
            obj.id = ref.id
            return this.update(obj)
        })
    }

    async update(obj: any): Promise<any> {
        await this.firebaseDb.collection(this.nameCollection).doc(obj.id).update(JSON.parse(JSON.stringify(obj)))
    }

    async findById(id: string): Promise<any> {
        const docRef = this.firebaseDb.collection(this.nameCollection).where('id', '==', id)
        const result = await docRef.get()
        return result
    }

    async findAll(): Promise<any> {
        const docRef = this.firebaseDb.collection(this.nameCollection)
        const result = await docRef.get()
        return result
    }
}