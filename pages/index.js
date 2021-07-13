import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import Home from '../components/Home';
import Header from '../components/Header';
import About from '../components/About';
import ConcertList from '../components/ConcertList';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function MainSite({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Header />
            <Home />
            <About />
            <ConcertList />
        </Layout>
    );
}
