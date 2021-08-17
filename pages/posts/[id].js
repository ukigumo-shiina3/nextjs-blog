import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

// getStaticPaths:とり得るIDを元々指定しておく。IDの一覧を取得。動的なページのSSGで利用可能になる。
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// getStaticProps：ビルド時にしか起動されない。ビルド時にどのパスにとりうる値があるのかをgetStaticPathsに伝える。
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
