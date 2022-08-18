import "./App.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";
import { db } from "./firebaseConfig";
import { ChildrenList } from "./ChildrenList";
import { AddNew } from "./AddNew";

function App() {
  const query = collection(db, "oses");
  const [docs, loading, error] = useCollectionData(query);
  console.log(docs);

  return (
    <div className="App">
      {loading && "lolading ..."}
      <ul>
        {docs?.map((doc) => (
          <div key={Math.random()}>
            <li>{doc.name}</li>
            <ChildrenList path={`oses/${doc.name}/children`} />
          </div>
        ))}
        <AddNew path="oses"/>
      </ul>
    </div>
  );
}

export default App;
