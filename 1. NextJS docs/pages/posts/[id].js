import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';


export default function Post() {
    return <Layout>...</Layout>;
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: 'ssg-ssr' } },
            { params: { id: 'pre-rendering' } }
        ],
        fallback: false
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}