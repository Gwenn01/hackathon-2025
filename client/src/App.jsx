import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/course")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/faculty")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/curriculum")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/facilities")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>{data}</div>
    </>
  );
}

export default App;
