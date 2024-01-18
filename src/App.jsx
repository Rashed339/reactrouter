import { useEffect, useInsertionEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [users,setUser] = useState([]);
  const [loading,setLoading] = useState(null);
  
  const getUser = () => {
    setLoading(true);
    fetch('https://dummyjson.com/users')
.then((res) => res.json())
.then((data) => {  setUser(data.users);
  setLoading(false);      
  });

};

  useEffect(() => {
    getUser();
      }, []);

    console.log(users);
  

  return (
  <>
  {/*Navabr */}
  <Navbar/>
  {/*Users */}

  <section className="container mx-auto mt-10 justify-center flex flex-wrap gap-3">
    { loading ? 
    ( <span className="loading loading-infinity loading-lg"></span>
     ) : (
     <>
       { users.map((user) => (
       <Card key ={user.id} userInfo ={user}/>
    ))} 
    </>
   )}
  </section>
      </>
    );
}

export default App
