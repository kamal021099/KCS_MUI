import React, { createContext, useState } from 'react';

export const ClientsContext = createContext();

export const ClientsContextProvider = (props) => {
  const [clients, setClients] = useState([
    {
      name: 'Amazon',
      members: ['kamal', 'ayush'],
      id: 1,
      projects: [
        {
          name: 'project 1',
          members: ['kamal', 'ayush'],
          rate: 200
        },
        {
          name: 'project 2',
          members: ['kamal', 'ayush'],
          rate: 300
        }
      ]
    },
    {
      name: 'Google',
      members: ['kamal', 'ayush'],
      id: 2,
      projects: [
        {
          name: 'project 3',
          members: ['kamal', 'ayush'],
          rate: 100
        },
        {
          name: 'project 4',
          members: ['kamal', 'ayush'],
          rate: 50
        }
      ]
    }
  ]);
  const [currentClient, setcurrentClient] = useState(clients[0]);

  const changeClient = (client) => {
    setcurrentClient(client);
  };

  return (
    <div>
      <ClientsContext.Provider value={{ clients, currentClient, changeClient }}>
        {props.children}
      </ClientsContext.Provider>
    </div>
  );
};

export default ClientsContextProvider;
