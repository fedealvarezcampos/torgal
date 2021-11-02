import useCheckMobile from '../helpers/useCheckMobile';
import { motion } from 'framer-motion';
import styles from '../styles/ArtistInfo.module.css';

function ArtistInfo({ gigs, setModal, modal }) {
    const mobile = useCheckMobile();

    return (
        <>
            <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="modalContainer"
                key={setModal}
            >
                {mobile && <span className="exitButton" onClick={() => setModal(false)} />}
                <div className="modalBG" onClick={() => setModal(false)} />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="home"
                    className={styles.contentContainer}
                >
                    <p className={styles.artistName}>{gigs.artist}</p>
                    <iframe
                        src={`https://www.youtube.com/embed/${gigs.videoIntro}?&mute=1&loop=1&playlist=${gigs.videoIntro}`}
                        title="YouTube video player"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        mute="1"
                        // autoPlay="1"
                        allowFullScreen
                    />
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(images/artists/${gigs.id}.webp)` }}
                    />
                    <div className={styles.bio}>{gigs.bio}</div>
                    <div className={styles.socials}>
                        {gigs.artistTW && (
                            <div className={styles.iconContainer}>
                                <a href={gigs.artistTW} target="_blank" className={styles.socialBG}>
                                    <img src="/images/social/twitter.svg" alt="twitter" />
                                </a>
                            </div>
                        )}
                        {gigs.artistIG && (
                            <div className={styles.iconContainer}>
                                <a href={gigs.artistIG} target="_blank" className={styles.socialBG}>
                                    <img src="/images/social/instagram.svg" alt="instagram" />
                                </a>
                            </div>
                        )}
                        {gigs.artistSF && (
                            <div className={styles.iconContainer}>
                                <a href={gigs.artistSF} target="_blank" className={styles.socialBG}>
                                    <img src="/images/social/spotify.svg" alt="spotify" />
                                </a>
                            </div>
                        )}
                        {gigs.artistYT && (
                            <div className={styles.iconContainer}>
                                <a href={gigs.artistYT} target="_blank" className={styles.socialBG}>
                                    <img src="/images/social/youtube.svg" alt="youtube" />
                                </a>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default ArtistInfo;
