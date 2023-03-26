import Date from '@/components/date';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Head from 'next/head';
import Layout from '../../components/layout';

type PropsParams = {
    params: {
        id: string,
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: PropsParams) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

const Post = ({ postData }: any) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="text-3xl leading-8 font-extrabold tracking-tighter  my-4 mx-0">{postData.title}</h1>
                <div className="text-gray-500">
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}
export default Post;

