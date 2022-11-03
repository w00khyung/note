// Server Side Rendering -> 브라우저에 접속 시 서버에 요청 보내면, 서버가 화면 그려서 보내줌
export default function Ssr({ users }) {
  return (
    <div>
      <h1>SSR</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://634d4187acb391d34a981e96.mockapi.io/users');
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
