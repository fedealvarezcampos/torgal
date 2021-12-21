import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useClosingKey } from '../helpers/useClosingKey';
import { AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import Home from '../components/Home';
import Header from '../components/Header';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Socials from '../components/Socials';
import Products from '../components/Products';
import ConcertList from '../components/ConcertList';
import NewsletterForm from '../components/Newsletter';
import Layout, { siteTitle } from '../components/layout';
import { getCocktails } from '../lib/products';

export async function getStaticProps() {
	const rescocktails = await getCocktails();
	const cocktails = JSON.parse(JSON.stringify(rescocktails));

	return {
		props: {
			cocktails,
		},
	};
}

export default function MainSite({ cocktails }) {
	const [showMenu, setShowMenu] = useState(false);

	useClosingKey('Escape', showMenu, setShowMenu);

	useEffect(() => {
		showMenu && document.body.setAttribute('style', `overflow: hidden; margin-right: 15px;`);
		!showMenu && document.body.removeAttribute('style', `overflow: hidden; margin-right: 15px;`);
	}, [showMenu]);

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
				<meta property="og:title" content="Café & Pop Torgal" key="title" />
			</Head>
			<header>
				<Header />
				<Home />
			</header>
			<main>
				<About setShowMenu={setShowMenu} />
				<AnimatePresence exitBeforeEnter>
					{showMenu && (
						<Products
							products={cocktails}
							showMenu={showMenu}
							setShowMenu={setShowMenu}
							key={showMenu}
						/>
					)}
				</AnimatePresence>
				<Gallery />
				<ConcertList />
			</main>
			<footer>
				<NewsletterForm />
				<Socials />
			</footer>
		</Layout>
	);
}
