import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import styles from '../styles/NewGig.module.css';

function NewGig() {
	const router = useRouter();
	const user = supabase?.auth.user();

	const [artist, setArtist] = useState('');
	const [bio, setBio] = useState('');
	const [gigDate, setGigDate] = useState('');
	const [tickets, setTickets] = useState('');
	const [price, setPrice] = useState(0);
	const [site, setSite] = useState('');
	const [twitter, setTwitter] = useState('');
	const [instagram, setInstagram] = useState('');
	const [spotify, setSpotify] = useState('');
	const [youtubeChannel, setYoutubeChannel] = useState('');
	const [youtubeCode, setYoutubeCode] = useState('');
	const [images, setImages] = useState([]);
	const [soldout, setSoldout] = useState(false);

	useEffect(() => {
		!user && router?.push('/');
	}, []);

	async function setPreviews(e) {
		e.preventDefault();
		try {
			const files = e.target.files;

			if (files?.length > 1 || images?.length === 1) {
				alert('¡Sólo una foto!');
				return;
			}

			let previewsArray = [];

			for (const file of files) {
				const fileExt = file.name.split('.').pop();

				if (fileExt !== 'jpg' && fileExt !== 'png' && fileExt !== 'jpeg' && fileExt !== 'webp') {
					alert('File/s must be jpg | webp | png !');
					return;
				}

				if (file?.size > 1100000) {
					alert('All files must be 1MB or less!');
					return;
				}

				const fileName = `${uuidv4()}.${fileExt}`;

				const url = URL.createObjectURL(file);

				previewsArray.push({ preview: url, file: file, filePath: fileName });
			}

			setImages([...images, ...previewsArray]);
		} catch (error) {
			alert(error.message);
		}
	}

	const removeImgPreview = key => {
		const filtered = images.filter((i, value) => i.preview !== key);

		setImages(filtered);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			let imgURL = [];

			for (const image of images) {
				const fileName = image.filePath;
				const file = image.file;

				let { error: uploadError } = await supabase.storage.from('images').upload(fileName, file);

				if (uploadError) {
					throw uploadError;
				}

				imgURL.push(fileName);
			}

			const { data, error } = await supabase.from('gigs').insert({
				artist: artist,
				image: imgURL,
				bio: bio,
				videoIntro: youtubeCode,
				artistSite: site,
				artistTW: twitter,
				artistIG: instagram,
				artistYT: youtubeChannel,
				artistSF: spotify,
				gigPrice: price,
				gigLink: tickets,
				gigDate: gigDate,
				soldout: soldout,
			});

			if (error) throw error;

			alert('¡Concierto añadido!');
		} catch (error) {
			alert('¡Se pudrió todo!');
		}
	};

	return (
		<>
			{user && (
				<div className={styles.formsOuterContainer}>
					<div className={styles.formsContainer}>
						<h1>Añadir concierto</h1>
						<form action="" onSubmit={e => handleSubmit(e)} className={styles.recipeForm}>
							<label htmlFor="artist">
								<span>Artista</span>
								<input
									name="artist"
									id="artist"
									type="text"
									required
									placeholder="Artista"
									value={artist}
									onChange={e => setArtist(e.target.value)}
								/>
							</label>
							<span className={styles.imageInputs}>
								<label htmlFor="file">
									<span>Subir imagen</span>
									<input
										type="file"
										name="file"
										required
										accept="image/jpeg, image/png, image/webp"
										id="file"
										onChange={setPreviews}
									/>
								</label>
							</span>
							{images?.length !== 0 && (
								<div className={styles.imageContainer}>
									{images?.map((image, i) => (
										<Image
											key={i}
											src={image?.preview}
											layout="fill"
											alt="image in board"
											quality={70}
											objectFit="cover"
											onClick={() => removeImgPreview(image?.preview)}
										/>
									))}
								</div>
							)}
							<label htmlFor="bio">
								<span>Biografía</span>
								<textarea
									name="bio"
									id="bio"
									type="textarea"
									required
									placeholder="Biografía"
									value={bio}
									onChange={e => setBio(e.target.value)}
								/>
							</label>
							<label htmlFor="gigDate">
								<span>Fecha</span>
								<input
									name="gigDate"
									id="gigDate"
									type="date"
									value={gigDate}
									onChange={e => setGigDate(e.target.value)}
								/>
							</label>
							<label htmlFor="tickets">
								<span>URL entradas</span>
								<input
									name="tickets"
									id="tickets"
									type="url"
									placeholder="Link a entradas"
									value={tickets}
									onChange={e => setTickets(e.target.value)}
								/>
							</label>
							<label htmlFor="price">
								<span>Precio (sólo número)</span>
								<input
									name="price"
									id="price"
									type="number"
									required
									placeholder="Precio"
									value={price}
									onChange={e => setPrice(e.target.value)}
								/>
							</label>
							<label htmlFor="youtubevideo">
								<span>Vídeo del artista (sólo código YT)</span>
								<input
									name="youtubevideo"
									id="youtubevideo"
									required
									type="text"
									placeholder="You-Tube preview"
									value={youtubeCode}
									onChange={e => setYoutubeCode(e.target.value)}
								/>
							</label>
							<label htmlFor="site">
								<span>Web del artista</span>
								<input
									name="site"
									id="site"
									type="url"
									placeholder="URL"
									value={site}
									onChange={e => setSite(e.target.value)}
								/>
							</label>
							<label htmlFor="twitter">
								<span>Twitter</span>
								<input
									name="twitter"
									id="twitter"
									type="url"
									placeholder="Twitter URL"
									value={twitter}
									onChange={e => setTwitter(e.target.value)}
								/>
							</label>
							<label htmlFor="instagram">
								<span>Instagram</span>
								<input
									name="instagram"
									id="instagram"
									type="url"
									placeholder="Instagram URL"
									value={instagram}
									onChange={e => setInstagram(e.target.value)}
								/>
							</label>
							<label htmlFor="spotify">
								<span>Spotify</span>
								<input
									name="spotify"
									id="spotify"
									type="url"
									placeholder="Spotify profile URL"
									value={spotify}
									onChange={e => setSpotify(e.target.value)}
								/>
							</label>
							<label htmlFor="youtubechannel">
								<span>Youtube channel</span>
								<input
									name="youtubechannel"
									id="youtubechannel"
									type="url"
									placeholder="You-Tube channel URL"
									value={youtubeChannel}
									onChange={e => setYoutubeChannel(e.target.value)}
								/>
							</label>
							<label htmlFor="soldout">
								<span>¿Soldout?</span>
								<input
									name="soldout"
									id="soldout"
									type="checkbox"
									placeholder="You-Tube channel URL"
									value={soldout}
									onChange={() => setSoldout(!soldout)}
								/>
							</label>
							<button aria-label="save new recipe">
								<span>save</span>
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
}

export default NewGig;
