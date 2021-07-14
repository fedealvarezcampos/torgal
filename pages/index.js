import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import Home from '../components/Home';
import Header from '../components/Header';
import About from '../components/About';
import ConcertList from '../components/ConcertList';
import Layout, { siteTitle } from '../components/layout';
import { getSortedGigsData } from '../lib/gigs';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
    const allGigsData = getSortedGigsData();
    return {
        props: {
            allGigsData,
        },
    };
}

export default function MainSite({ allGigsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Header />
            <Home />
            <About />
            <ConcertList gigs={allGigsData} />
        </Layout>
    );
}
