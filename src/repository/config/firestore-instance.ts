import admin = require("firebase-admin")
import { Firestore } from "@google-cloud/firestore";

const serviceAccount = require("../../../feedback-project-39440-firebase-adminsdk-swxnp-58cf3c5697.json");

export class FirestoreInstance {

  private static instance: FirestoreInstance = new FirestoreInstance()
  private firestore: Firestore

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://feedback-project-39440.firebaseio.com"
    });
    this.firestore = admin.firestore()
  }

  public static getInstance(): Firestore {
    return this.instance.firestore
  }
}