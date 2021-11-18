import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [User, setUser] = useState([
    {
      name: 'Ayush',
      id: 1,
      email: 'ayushrocks@gmail.com',
      pay: 15,
      role: 'Manager'
    },
    {
      name: 'kamal',
      id: 2,
      email: 'Kamali@gmail.com',
      pay: 12,
      role: 'Admin'
    }
  ]);
  //   const [currentClient, setcurrentClient] = useState(User[0]);

  //   const changeClient = (client) => {
  //     setcurrentClient(client);
  //   };

  return (
    <div>
      <UserContext.Provider value={{ User }}>{props.children}</UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
