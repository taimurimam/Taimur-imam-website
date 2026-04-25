import React, { use, useState, useEffect } from "react";
import axios  from "axios";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  //Api Calls 
  function getUsers(){ 
     axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
      setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="  flex flex-col px-0 md:px-12 text-left mb-16 gap-4 mt-8">
      <h1 className="font-bold text-3xl text-black">
        User{" "}
        <span className="border-b-2 font-light underline underline-offset-6 ">
          List
        </span>
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-12 text-left">
       ?? {users.map((user, key) => userCell((user = { user }), (key = { key })))}
      </div>
    </div>
  );
};

export default UserList;

function userCell({ user, key }) {
  return (
    <div
      className="w-full grid grid-cols-2 gap-6 px-4 text-left bg-white rounded-lg shadow-md"
      key={user.id}
    >
      <div
        key={user.id}
        className=" flex  flex-col  px-4  text-left p-4 "
      >
        <h1 className=" text-2xl md:text-xl font-bold  text-black text-left mt-2">
          {user.name}
        </h1>
        <h1 className="text-l font-normal  text-red-700 text-left mt-2">
          {user.email}
        </h1>
        <div className="text-l font-light  text-black text-left mt-2 ">
          Address: {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </div>
        <div className="text-l font-light  text-black text-left mt-2 ">
          Phone: {user.phone}
        </div>
      </div>
    </div>
  );
}


// //fae88b62028d840b60789b8d965ed157 
// // http://api.mediastack.com/v1/news?access_key=fae88b62028d840b60789b8d965ed157&countries=us
// https://gnews.io/api/v4/top-headlines?token=fae88b62028d840b60789b8d965ed157&lang=en