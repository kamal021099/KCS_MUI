import React, { createContext, useState } from 'react';

export const ClientsContext = createContext();

export const ClientsContextProvider = (props) => {
  const [clients, setClients] = useState([
    {
      name: 'Amazon',
      Clientmembers: [
        'Kamal',
        'Ayush',
        'Raksha',
        'Jay Maethew',
        'Surya',
        'Ryan rands',
        'Jacob lame',
        'Sushma'
      ],
      id: 1,
      projects: [
        {
          name: 'Project 1',
          Projectmembers: ['Raksha', 'Jay Maethew', 'Surya'],
          rate: 200
        },
        {
          name: 'Project 2',
          Projectmembers: ['Ayush', 'Surya'],
          rate: 300
        }
      ]
    },
    {
      name: 'Google',
      Clientmembers: ['Kamal', 'Ayush', 'Surya', 'Ryan rands', 'Jacob lame', 'Sushma'],
      id: 2,
      projects: [
        {
          name: 'Project 3',
          Projectmembers: ['Jaya', 'Sushma'],
          rate: 100
        },
        {
          name: 'Project 4',
          Projectmembers: ['Kamal', 'Ayush'],
          rate: 50
        }
      ]
    },
    {
      name: 'Naughty Dogs',

      Clientmembers: ['Kamal', 'Ayush', 'Raksha', 'Jay Maethew', 'Surya', 'Ryan rands', 'Sushma'],
      id: 2,
      projects: [
        {
          name: 'Project 3',
          Projectmembers: ['Jaya', 'Raksha'],
          rate: 100
        },
        {
          name: 'Project 4',
          Projectmembers: ['Kamal', 'Ayush'],
          rate: 50
        }
      ]
    },
    {
      name: 'Unity',
      Clientmembers: [
        'Kamal',
        'Ayush',
        'Raksha',
        'Jay Maethew',
        'Surya',
        'Ryan rands',
        'Jacob lame',
        'Sushma'
      ],
      id: 2,
      projects: [
        {
          name: 'Project 3',
          Projectmembers: ['Surya', 'Sushma'],
          rate: 100
        },
        {
          name: 'Project 4',
          Projectmembers: ['Kamal', 'Ayush'],
          rate: 50
        }
      ]
    }
  ]);
  const [currentClient, setcurrentClient] = useState(clients[0]);
  const [currentProject, setcurrentProject] = useState(currentClient.projects[0]);

  const changeClient = (client) => {
    setcurrentClient(client);
  };
  const changeProject = (project) => {
    setcurrentProject(project);
  };

  const addClient = (client) => {
    setClients((prevClients) => [...prevClients, client]);
  };

  return (
    <div>
      <ClientsContext.Provider
        value={{ clients, currentClient, changeClient, addClient, currentProject, changeProject }}
      >
        {props.children}
      </ClientsContext.Provider>
    </div>
  );
};

export default ClientsContextProvider;
