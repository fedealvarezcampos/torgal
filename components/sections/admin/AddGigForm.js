import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../../../lib/supabaseClient';
import Image from 'next/image';
import s from '../../../styles/AddGigForm.module.css';

function AddGigForm({ setData, data, isUpdateMode, setIsUpdateMode, setFormCompleted }) {
	const [images, setImages] = useState([]);

	const resetData = () => {
		setData({
			id: '',
			artist: '',
			image: [],
			bio: '',
			videoIntro: '',
			artistSite: '',
			artistTW: '',
			artistIG: '',
			artistYT: '',
			artistSF: '',
			gigPrice: '',
			gigLink: '',
			gigDate: '',
			soldout: false,
		});
	};

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
			setFormCompleted(false);

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

			const { error } = await supabase.from('gigs').insert({
				artist: data.artist,
				image: imgURL,
				bio: data.bio,
				videoIntro: data.videoIntro,
				artistSite: data.artistSite,
				artistTW: data.artistTW,
				artistIG: data.artistIG,
				artistYT: data.artistYT,
				artistSF: data.artistSF,
				gigPrice: data.gigPrice,
				gigLink: data.gigLink,
				gigDate: data.gigDate,
				soldout: data.soldout,
			});

			if (error) throw error;

			resetData();

			alert('¡Concierto añadido!');
			setFormCompleted(true);
		} catch (error) {
			alert(error.message);
		}
	};

	const handleUpdate = async (e, id) => {
		e.preventDefault();

		try {
			setFormCompleted(false);

			const { error } = await supabase
				.from('gigs')
				.update({
					artist: data.artist,
					bio: data.bio,
					videoIntro: data.videoIntro,
					artistSite: data.artistSite,
					artistTW: data.artistTW,
					artistIG: data.artistIG,
					artistYT: data.artistYT,
					artistSF: data.artistSF,
					gigPrice: data.gigPrice,
					gigLink: data.gigLink,
					gigDate: data.gigDate,
					soldout: data.soldout,
				})
				.match({ id: id });

			if (error) throw error;

			resetData();

			alert('¡Concierto actualizado!');
			setFormCompleted(true);
			setIsUpdateMode(false);
		} catch (error) {
			alert(error.message);
		}
	};

	const cancelUpdate = async e => {
		e.preventDefault();

		try {
			setIsUpdateMode(false);
			resetData();
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className={s.formsContainer}>
			{!isUpdateMode ? <h1>Añadir concierto</h1> : <h1>Actualizar concierto</h1>}
			<form
				action=""
				onSubmit={!isUpdateMode ? e => handleSubmit(e) : e => handleUpdate(e, data.id)}
				className={s.recipeForm}
			>
				<label htmlFor="artist">
					<span>Artista</span>
					<input
						name="artist"
						id="artist"
						type="text"
						required
						placeholder="Artista"
						value={data.artist}
						onChange={e => setData({ ...data, artist: e.target.value })}
					/>
				</label>
				{!isUpdateMode && (
					<span className={s.imageInputs}>
						<label htmlFor="file">
							<span>Subir imagen</span>
							<input
								type="file"
								name="file"
								accept="image/jpeg, image/png, image/webp"
								id="file"
								onChange={setPreviews}
							/>
						</label>
					</span>
				)}
				{!isUpdateMode && images?.length !== 0 && (
					<div className={s.imageContainer}>
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
					<span>Biografía (máximo 430 chars)</span>
					<textarea
						name="bio"
						id="bio"
						type="textarea"
						required
						maxLength={430}
						placeholder="Biografía"
						value={data.bio}
						onChange={e => setData({ ...data, bio: e.target.value })}
					/>
				</label>
				<label htmlFor="gigDate">
					<span>Fecha</span>
					<input
						name="gigDate"
						id="gigDate"
						type="date"
						value={data.gigDate}
						onChange={e => setData({ ...data, gigDate: e.target.value })}
					/>
				</label>
				<label htmlFor="tickets">
					<span>URL entradas</span>
					<input
						name="tickets"
						id="tickets"
						type="url"
						placeholder="Link a entradas"
						value={data.gigLink}
						onChange={e => setData({ ...data, gigLink: e.target.value })}
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
						value={data.gigPrice}
						onChange={e => setData({ ...data, gigPrice: e.target.value })}
					/>
				</label>
				<label htmlFor="youtubevideo">
					<span>Vídeo del artista (sólo código YT)</span>
					<input
						name="youtubevideo"
						id="youtubevideo"
						type="text"
						placeholder="You-Tube preview"
						value={data.videoIntro}
						onChange={e => setData({ ...data, videoIntro: e.target.value })}
					/>
				</label>
				<label htmlFor="site">
					<span>Web del artista</span>
					<input
						name="site"
						id="site"
						type="url"
						placeholder="URL"
						value={data.artistSite}
						onChange={e => setData({ ...data, artistSite: e.target.value })}
					/>
				</label>
				<label htmlFor="twitter">
					<span>Twitter</span>
					<input
						name="twitter"
						id="twitter"
						type="url"
						placeholder="Twitter URL"
						value={data.artistTW}
						onChange={e => setData({ ...data, artistTW: e.target.value })}
					/>
				</label>
				<label htmlFor="instagram">
					<span>Instagram</span>
					<input
						name="instagram"
						id="instagram"
						type="url"
						placeholder="Instagram URL"
						value={data.artistIG}
						onChange={e => setData({ ...data, artistIG: e.target.value })}
					/>
				</label>
				<label htmlFor="spotify">
					<span>Spotify</span>
					<input
						name="spotify"
						id="spotify"
						type="url"
						placeholder="Spotify profile URL"
						value={data.artistSF}
						onChange={e => setData({ ...data, artistSF: e.target.value })}
					/>
				</label>
				<label htmlFor="youtubechannel">
					<span>Youtube channel</span>
					<input
						name="youtubechannel"
						id="youtubechannel"
						type="url"
						placeholder="You-Tube channel URL"
						value={data.artistYT}
						onChange={e => setData({ ...data, artistYT: e.target.value })}
					/>
				</label>
				<label htmlFor="soldout">
					<span>¿Soldout?</span>
					<input
						name="soldout"
						id="soldout"
						type="checkbox"
						placeholder="You-Tube channel URL"
						value={data.soldout}
						onChange={() => setData({ ...data, soldout: !data.soldout })}
					/>
				</label>
				{isUpdateMode ? (
					<div className={s.updateMode}>
						<button aria-label="save new recipe">
							<span>update</span>
						</button>
						<button onClick={e => cancelUpdate(e)} aria-label="save new recipe">
							<span>cancel</span>
						</button>
					</div>
				) : (
					<button aria-label="save new recipe">
						<span>save</span>
					</button>
				)}
			</form>
		</div>
	);
}

export default AddGigForm;
