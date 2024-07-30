'use client'
import { useEffect, useState } from 'react';
import { getPage } from '@/utils/contentful';
import Loader from '@/components/Loader/Loader';
import css from './stills.module.css';

const Stills = () => {
    const [stillsData, setStillsData] = useState<any>(null)
    
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

    if (!stillsData) return <Loader />

    const { title, backgroundImage } = stillsData
    const bgImage = backgroundImage?.fields.file.url

    return ( 
        <section className={css.stills}>
            <h1>{title}</h1>
            <div className={css.stillsBg}>
                {backgroundImage && <div className='bg-img' style={{backgroundImage: `url(${bgImage})`}} />}
            </div>
        </section>
    );
}

export default Stills;