import db from '../db/firestore'
import { getDocs, collection } from 'firebase/firestore'

const products = async () => {
    const snapshot = await getDocs((collection(db, 'products')));

    const documents = snapshot.docs.map(doc => doc.data())

    return <div>{documents.map(doc => <div key={doc.id}>{doc.name} is {doc.unitPrice}</div>)}</div>;
}

export default products;