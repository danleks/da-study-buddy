import React, { useEffect, useState } from 'react';
// import { users as usersData } from 'data/users';
import axios from 'axios';

export const UsersContext = React.createContext({
  users: [],
  loading: false,
  deleteUser: () => {},
  handleAddUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setUsers(data.students))
      .catch((err) => console.log({ err }));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    setUsers([values, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        deleteUser,
        handleAddUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
