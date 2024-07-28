import Accordion from '@/components/Accordion/Accordion';
import Link from 'next/link';

const Portfolio: React.FC = () => {
    return ( 
        <section className='pagewrapper'>
            <h1>Portfolio</h1>
            <Accordion title='Some Project' link='portfolio/someproject' image='/images/featureTEMP.webp' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque orci, molestie a aliquam in, iaculis vitae arcu. Nam ut vehicula nulla. Nulla non turpis vitae orci malesuada porta. Maecenas congue, mi quis vulputate varius, elit libero tincidunt lorem, in sagittis lacus ipsum eu metus. Nullam vel est a risus dapibus egestas. Phasellus volutpat augue quis lobortis aliquam. Morbi viverra odio id posuere condimentum. Ut massa justo, luctus eget fermentum congue, semper non velit. Ut turpis metus, vestibulum commodo tempus et, semper sit amet nisl. Ut rutrum pellentesque lacus condimentum porta. Nam ullamcorper mauris ac tellus lacinia pellentesque.' />
        </section>
    );
}

export default Portfolio;