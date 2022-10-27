import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHTML';

const Post = ({ post }: any) => {
  return (
    <>
      <div>{post.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

export default Post;

export async function getStaticProps({ params }: any) {
  // slug를 통해서 특정 게시물의 마크다운 파일을 찾아서 가져와서 페이지 컴포넌트에 넘겨줍니다.
  // 이 과정에서, 마크다운 파일을 자바스크립트 객체로 변환하고, HTML로 변환해야 합니다.
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'description',
    'date',
    'lastmod',
    'weight',
    'content',
    'fileName',
  ]);
  const content = await markdownToHtml(post.content || '');

  // 게시물 정보와 컨텐츠를 페이지 컴포넌트(Post)로 반환합니다.
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  // 모든 게시물 데이터를 가져옵니다.
  const posts = getAllPosts(['slug']);

  return {
    // map을 통해 게시물들을 순회하며 각각의 경로를 만들어줍니다.
    // ex. posts/title1, posts/title2, ...
    // 반환한 객체는 getStaticProps의 인자로 넘어갑니다.
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
