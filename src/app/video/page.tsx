'use client'
import { useEffect, useState } from 'react';
import { getPage } from '@/utils/contentful';
import Loader from '@/components/Loader/Loader';
import css from './video.module.css';

const Video = () => {
    const [videoData, setVideoData] = useState<any>(null)
    const { title, backgroundImage } = videoData
    const bgImage = backgroundImage.fields.file.url

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

    if (!videoData) return <Loader />

    return ( 
        <section className={css.video}>
            <h1>{title}</h1>
            <div className={css.videoBg}>
                {backgroundImage && <div className='bg-img' style={{backgroundImage: `url(${bgImage})`}} />}
            </div>
        </section>
    );
}

export default Video;