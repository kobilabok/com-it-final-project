import db from '../db/firestore'
import { getDocs, collection } from 'firebase/firestore'

const photographers = async () => {
    const snapshot = await getDocs((collection(db, 'photographers')));

    const documents = snapshot.docs.map(doc => doc.data())
    console.log(documents);
    return <div>{documents.map(doc => <div key={doc.id}>{doc.artistName} is a photographer. I have {doc.yearsOfExperience} years of experience.<p>{doc.artistDescription}</p></div>)}</div>;
}

export default photographers;