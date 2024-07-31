'use client'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { getPage } from '@/utils/contentful';
import Loader from '@/components/Loader/Loader';
import css from './video.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Video = () => {
    const [videoData, setVideoData] = useState<any>(null)
    const [opened, setOpened] = useState<any>(null);

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
        document.body.style.backgroundColor = 'var(--color-white)';
        return () => {
            document.body.style.backgroundColor = previousBackgroundColor;
        };
    }, []);

    if (!videoData) return <Loader />

    const { title, backgroundImage, videos } = videoData
    const bgImage = backgroundImage?.fields.file.url
    const video = videos.map((video: any, i: number) => {
        const title = video.fields.title
        const id = video.fields.url.split('v=')[1]
        const formattedIndex = String(i + 1).padStart(2, '0');

        return (
            <figure key={video.sys.id}>
                <a href="#" key={video.sys.id} onClick={(e) => {
                    e.preventDefault();
                    setOpened(video);
                }}>
                    <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt={title} />
                    <figcaption>{formattedIndex}</figcaption>
                </a>
            </figure>
        )
    }
    )

    console.log('open:', opened)

    return ( 
        <section className={css.video}>
            <h1>{title}</h1>
            {backgroundImage && <div className={css.videoBg}>
                <div className='bg-img' style={{backgroundImage: `url(${bgImage})`}} />
            </div>}
            {video && <div className={css.videos}>{video}</div>}
            {opened && 
            <figure className={css.opened}>
                <ReactPlayer url={opened?.fields.url} controls={true} playing width='100%' height='100%' />
                <figcaption>
                    <h2>{opened?.fields?.title}</h2>
                    {documentToReactComponents(opened?.fields.description)}
                </figcaption>
            </figure>
            }

        </section>
    );
}

export default Video;