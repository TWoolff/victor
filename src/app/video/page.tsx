import css from './video.module.css';

const Video = () => {
    return ( 
        <section className={css.video}>
            <h1>Video</h1>
            <div className={css.videoBg} />
        </section>
    );
}

export default Video;