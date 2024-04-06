// Incremental Static Regeneration (점진적으로 정적 페이지를 재생성한다.)
export default function Isr({ users }) {
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

export async function getStaticProps() {
  const res = await fetch('https://634d4187acb391d34a981e96.mockapi.io/users');
  const users = await res.json();
  return {
    props: {
      users,
    },
    revalidate: 30,
  };
}
