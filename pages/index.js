import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home(props) {
  const { allPostsData } = props;
  return (
    <Layout home>
      <Head>
        <title>"Next.jsチュートリアル"</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello</p>
        <p>Study Next.js</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// getStaticProps:データ取得
// 下記のコードでSSGの準備完了。index.jsがビルドされるタイミングでgetStaticPropsの関数が走る
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
