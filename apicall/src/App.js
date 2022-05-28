import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((d) => {
        const usersData = [];
        for (const key in d) {
          usersData.push({
            id: d[key].id,
            name: d[key].name,
            username: d[key].username,
            phone: d[key].phone,
            website: d[key].website,
          });
        }
        setData(usersData);
      });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <ul>
        <diV>
          <span>No</span>
          <span>Name</span>
          <span>username</span>
          <span>Phone</span>
          <span>Email</span>
        </diV>
        {data.map((dt) => (
          <li key={dt.id} className>
            <span>{dt.id}</span>
            <span>{dt.name}</span>
            <span>{dt.username}</span>
            <span>{dt.phone}</span>
            <span>{dt.website}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
