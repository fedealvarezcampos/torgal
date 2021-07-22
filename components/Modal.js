import Image from 'next/image';
import styles from '../styles/Modal.module.css';
import YouTube from 'react-youtube';

function Modal({ gigs, setModal }) {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            playlist: gigs.videoIntro,
            autoplay: 1,
            mute: 1,
            loop: 1,
            origin: 'https://youtube.com',
        },
    };

    return (
        <>
            <div className={styles.modalContainer}>
                <div className={styles.modalBG} onClick={() => setModal(false)} />
                <div id="home" className={styles.contentContainer}>
                    <p className={styles.artistName}>{gigs.artist}</p>
                    <YouTube className={styles.youtube} videoId={gigs.videoIntro} opts={opts} />
                    {/* <iframe
                            src={`https://www.youtube.com/embed/${gigs.videoIntro}`}
                            title="YouTube video player"
                            width="100%"
                            height="100%"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            mute={1}
                            autoplay={1}
                            allowfullscreen
                        ></iframe> */}
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(images/artists/${gigs.id}.jpg)` }}
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
                </div>
            </div>
        </>
    );
}

export default Modal;
