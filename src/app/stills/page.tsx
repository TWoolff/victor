'use client'
import { useEffect, useState } from 'react';
import { getPage } from '@/utils/contentful';
import Loader from '@/components/Loader/Loader';
import css from './stills.module.css';

const Stills = () => {
    const [stillsData, setStillsData] = useState<any>(null)
    const [openedImage, setOpenedImage] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPage('stills')
                setStillsData(JSON.parse(JSON.stringify(data.items[0].fields)))
            } catch (error) {
                console.error('Error fetching home data:', error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const previousBackgroundColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = 'var(--color-black)';
        return () => {
            document.body.style.backgroundColor = previousBackgroundColor;
        };
    }, []);

    if (!stillsData) return <Loader />

    const { title, backgroundImage, images } = stillsData
    const bgImage = backgroundImage?.fields.file.url
    const stills = images.fields.images.map((image: any, i: number) => {
        const img = image.fields.file.url
        const formattedIndex = String(i + 1).padStart(2, '0');
        return (
            <figure key={image.sys.id}>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setOpenedImage(img);
                }}>
                    <img src={img} alt={image.fields.title} />
                </a>
                <figcaption>{formattedIndex}</figcaption>
            </figure>
        )
    })

    return ( 
        <section className={css.stills}>
            <h1>{title}</h1>
            {backgroundImage && <div className={css.stillsBg}>
                <div className='bg-img' style={{backgroundImage: `url(${bgImage})`}} />
            </div>}
            {stills && <div className={css.stillsImages}>{stills}</div>}
            {openedImage && <img src={openedImage} alt="Opened still" className={css.openedImage} />}
        </section>
    );
}

export default Stills;