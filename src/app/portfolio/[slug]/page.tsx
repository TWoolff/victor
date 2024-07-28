const Case: React.FC<{ params: { slug: string } }> = ({ params }) => {
    return ( 
        <section className='pagewrapper'>
            <h1>Case</h1>
            <p>{params.slug}</p>
        </section>
    );
}

export default Case;