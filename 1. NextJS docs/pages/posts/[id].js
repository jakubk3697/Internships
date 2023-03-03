import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';


export default function Post({postData}) {
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

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { id: 'ssg-ssr' } },
//             { params: { id: 'pre-rendering' } }
//         ],
//         fallback: false
//     }
// }

// This function gets called at build time and returns an array of possible values for id
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}