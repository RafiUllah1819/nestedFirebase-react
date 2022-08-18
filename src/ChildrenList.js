import React from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {collection} from '@firebase/firestore';
import {db} from './firebaseConfig';
import { AddNew } from './AddNew';

export const ChildrenList = ({path}) => {
    const query = collection(db, path)
    const [docs, loading, error] = useCollectionData(query);
    console.log(docs)
  return (
    <ul>
        {loading && "Loading ..."}
        {docs?.map(doc =>(
            <li key={Math.random()}>{doc.name}</li>
        ))}
        <AddNew path={path}/>
    </ul>
  )
}
