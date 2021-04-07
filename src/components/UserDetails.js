import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UsersContext } from "../context";

const UserDetails = () => {
  const { data } = useContext(UsersContext);
//   console.log(typeof(parseInt(data[0].id)));
//   let tam1 = parseInt(data[0].id);
//   console.log("tam1: ", tam1);
  const { id } = useParams();
//   console.log("id: ", id);

//   if(parseInt(id) === tam1) {
//       console.log("the same!");
//   }
//   else {
//     console.log("different!");
//   }

  //console.log(typeof(parseInt(id)));
//   let tam = data.filter((x) => x.id === parseInt(id));
//   console.log(tam);
  return (
    <div>
      <Link to="/">Back to Homepage</Link>
      {data.filter((x) => x.id === parseInt(id))
        .map((x, index) => (
          <div key={index}>
            <h1>NAME: {x.name}</h1>
            <h1>USERNAME: {x.username}</h1>
            <h1>EMAIL: {x.email}</h1>
            <h1>ADDRESS: {x.address.street}, {x.address.city}</h1>
            <h1>PHONE: {x.phone}</h1>
            <h1>WEBSITE: {x.website}</h1>
            <h1>COMPANY NAME: {x.company.name}</h1>
            <h1>COMPANY CATCHpHRASE: {x.company.catchPhrase}</h1>
            <h1>COMPANY BS: {x.company.bs}</h1>
          </div>
        ))}
    </div>
  );
};

export default UserDetails;
