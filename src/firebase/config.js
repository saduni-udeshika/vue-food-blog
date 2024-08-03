import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB-SCnZ4jGCFGzJO5b1rBIX28shLZFZXaU",
  authDomain: "vue-food-blong.firebaseapp.com",
  projectId: "vue-food-blong",
  storageBucket: "vue-food-blong.appspot.com",
  messagingSenderId: "765311584227",
  appId: "1:765311584227:web:34d7535f58d52cfbbd42d6",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, storage, db }
