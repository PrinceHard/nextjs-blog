import Layout, { siteTitle } from '@/components/layout'
import { getSortedPostsData } from '@/lib/posts'
import Head from 'next/head'
import Link from 'next/link';
import Date from '../components/date';

type PropsPostsDataList = {
  allPostsData: {
    id: string,
    title: string,
    date: string
  }[];
}


const Home = ({ allPostsData }: PropsPostsDataList) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='mt-4'>
        <p>Hello, I'm <span className='font-black'>Pedro.</span>  I'm a software developer and student. You contact me on <a href="https://twitter.com/__pedrohs__" target="_blank" className='text-blue-600'>Twitter.</a></p>
        <p>(This is a sample blog)</p>
      </section>

      <section className="text-xl leading-6 my-4 mx-0 pt-1">
        <h2 className="text-2xl leading-6 my-4 mx-0 font-extrabold">Blog</h2>
        <ul className="list-none p-0 m-0">
          {allPostsData?.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link href={`/posts/${id}`} className="text-blue-600 hover:underline">{title}</Link>
              <br />
              <small className="text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export default Home;

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

