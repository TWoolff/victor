'use client'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { getPage } from '@/utils/contentful';
import Loader from '@/components/Loader/Loader';
import css from './video.module.css';

const Video = () => {
    const [videoData, setVideoData] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPage('video')
                setVideoData(JSON.parse(JSON.stringify(data.items[0].fields)))
            } catch (error) {
                console.error('Error fetching home data:', error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const previousBackgroundColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = 'var(--color-grey)';
        return () => {
            document.body.style.backgroundColor = previousBackgroundColor;
        };
    }, []);

    if (!videoData) return <Loader />

    const { title, backgroundImage } = videoData
    const bgImage = backgroundImage?.fields.file.url

    return ( 
        <section className={css.video}>
            <h1>{title}</h1>
            {backgroundImage && <div className={css.videoBg}>
                <div className='bg-img' style={{backgroundImage: `url(${bgImage})`}} />
            </div>}
            <ReactPlayer
                url='https://www.youtube.com/watch?v=u8_32IG00Qk'
                controls={true}
                width='100%'
                height='100%'
            />
        </section>
    );
}

export default Video;