// Static Site Generation (정적 페이지 생성기) -> html, css, js
// 빌드할 때 데이터를 가져와서 화면을 다 그림
export default function Ssg({ users }) {
  return (
    <div>
      <h1>SSG</h1>
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
  };
}

// 1. 클래스
// 2. 브라우저 렌더링 원리
// 3. 
