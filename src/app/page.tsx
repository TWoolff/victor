'use client'
import { useEffect, useState } from 'react';
import { getPage } from '@/utils/contentful';
import Loader from '@/components/Loader/Loader';

const Home: React.FC = () => {
    const [indexData, setIndexData] = useState<any>(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPage('/')
                setIndexData(JSON.parse(JSON.stringify(data.items[0].fields)))
            } catch (error) {
                console.error('Error fetching home data:', error)
            }
        }
        fetchData()
    }, [])

    if (!indexData) return <Loader />

    const { title, backgroundImage } = indexData
    const bgImage = backgroundImage?.fields.file.url

    return (
        <section className='pagewrapper'>
            <h1>{title}</h1>
            <div className='home-bg'>
                {backgroundImage && <div className='bg-img' style={{backgroundImage: `url(${bgImage})`}} />}
            </div>
        </section>
    );
};

export default Home;
