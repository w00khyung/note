import { useState, useEffect } from 'react';

export default function Csr() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://634d4187acb391d34a981e96.mockapi.io/users'
      );
      const users = await res.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>CSR</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
