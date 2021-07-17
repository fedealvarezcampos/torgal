import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import Home from '../components/Home';
import Header from '../components/Header';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Socials from '../components/Socials';
import ConcertList from '../components/ConcertList';
import Layout, { siteTitle } from '../components/layout';
import { getSortedGigsData } from '../lib/gigs';
import utilStyles from '../styles/utils.module.css';
import { useRef } from 'react';

export async function getStaticProps() {
    const allGigsData = getSortedGigsData();
    return {
        props: {
            allGigsData,
        },
    };
}

export default function MainSite({ allGigsData }) {
    const aboutRef = useRef();

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                ></link>
            </Head>
            <Header />
            <Home />
            <About />
            <Gallery />
            <ConcertList gigs={allGigsData} />
            <Socials />
        </Layout>
    );
}
