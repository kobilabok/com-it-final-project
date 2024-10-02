import db from '../db/firestore'
import { getDocs, collection } from 'firebase/firestore'

const packages = async () => {
    const snapshot = await getDocs((collection(db, 'packages')));
    const documents = snapshot.docs.map(doc => doc.data())
    console.log(documents);
    return <div>{documents.map(doc => <div key={doc.id}>Package Id {doc.id} | Description {doc.description} | Price {doc.price}</div>)}</div>;
}

export default packages;