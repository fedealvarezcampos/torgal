import Head from 'next/head';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import { Noise } from '../components/basic/noise';
import Home from '../components/sections/landing/Home';
import Header from '../components/sections/landing/Header';
import About from '../components/sections/landing/About';
import Gallery from '../components/sections/landing/Gallery';
import Socials from '../components/sections/landing/Socials';
import Products from '../components/sections/landing/Products';
import ConcertList from '../components/sections/landing/ConcertList';
import NewsletterForm from '../components/sections/landing/Newsletter';
import Layout, { siteTitle } from '../components/layout';
import { getCocktails } from '../lib/products';
import { Modal } from '../components/basic/modal/modal';

export async function getStaticProps() {
	const rescocktails = await getCocktails();
	const cocktails = JSON.parse(JSON.stringify(rescocktails));

	const dateNow = new Date().toISOString();

	let { data: gigs } = await supabase.from('gigs').select('*').gte('gigDate', dateNow).order('gigDate');

	return {
		props: {
			cocktails,
			gigs,
		},
	};
}

export default function MainSite({ cocktails, gigs }) {
	const [showMenu, setShowMenu] = useState(false);

	const close = () => setShowMenu(false);

	return (
		<>
			<Layout home>
				<Head>
					<title>{siteTitle}</title>
					<meta property="og:title" content="Café & Pop Torgal" key="title" />
				</Head>
				<header>
					<Header />
					<Home />
				</header>
				<Noise />
				<main>
					<About setShowMenu={setShowMenu} />
					<AnimatePresence exitBeforeEnter>
						{showMenu && (
							<Modal isOn={showMenu} close={close}>
								<Products
									products={cocktails}
									showMenu={showMenu}
									setShowMenu={setShowMenu}
									key={showMenu}
								/>
							</Modal>
						)}
					</AnimatePresence>
					<Gallery />
					<ConcertList gigs={gigs} />
				</main>
				<footer>
					<NewsletterForm />
					<Socials />
				</footer>
			</Layout>
		</>
	);
}
