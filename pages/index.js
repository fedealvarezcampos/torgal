import Head from 'next/head';
import { useState } from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Socials from '../components/Socials';
import Products from '../components/Products';
import ConcertList from '../components/ConcertList';
import Layout, { siteTitle } from '../components/layout';
import { getSortedGigsData } from '../lib/gigs';
import { getCocktails } from '../lib/products';

export async function getStaticProps() {
    const result = await getSortedGigsData();
    const rescocktails = await getCocktails();
    const allGigsData = JSON.parse(JSON.stringify(result));
    const cocktails = JSON.parse(JSON.stringify(rescocktails));

    return {
        props: {
            allGigsData,
            cocktails,
        },
    };
}

export default function MainSite({ allGigsData, cocktails }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
                <meta property="og:title" content="Café & Pop Torgal" key="title" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                ></link>
            </Head>
            <header>
                <Header />
                <Home />
            </header>
            <main>
                <About setShowMenu={setShowMenu} />
                <Products products={cocktails} showMenu={showMenu} setShowMenu={setShowMenu} />
                <Gallery />
                <ConcertList gigs={allGigsData} />
            </main>
            <footer>
                <Socials />
            </footer>
        </Layout>
    );
}
