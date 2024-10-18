import Link from 'next/link';
import db from '../db/firestore'
import { getDocs, collection } from 'firebase/firestore'

const products = async () => {
    const snapshot = await getDocs((collection(db, 'products')));

    const documents = snapshot.docs.map(doc => doc.data())
    console.log(documents);
    return <div>{documents.map(doc => 
        <div key={doc.id}><Link href={'./products/'+doc.id}>{doc.name} </Link> is {doc.unitPrice}
    </div>
    )}
    </div>;
}

export default products;