
import { async } from '@firebase/util';
import { doc, setDoc } from 'firebase/firestore';
import React, { useRef ,useState } from 'react';
import { db } from './firebaseConfig';

export const AddNew = ({path}) => {
  const name = useRef()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const docRef = doc(db, path, name.current.value);
    await setDoc(docRef, {name: name.current.value})
    e.reset()
  }
  return (
   <li>
    <form onClick={handleSubmit}>
        <input ref={name}/>
        <button type='submit'>Add</button>
    </form>
   </li>
  )
}
