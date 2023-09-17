import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

function UsersListPage() {
  const users = useSelector(state => state.userReducer.users);

  return (
    <div>
      <h2>User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersListPage;
