import { TransitionLink } from '@/utils/transitionLinks'
import css from './Accordion.module.css'

type AccordionProps = {
    title: string
    content: string
    link: string
    image: string
}

const Accordion: React.FC<AccordionProps> = ({title, content, link, image}) => {
    return ( 
        <details className={css.accordion} open>
            <summary>
                <input type='checkbox' name='input' id='input' />
                <label htmlFor='input'><h2>{title}</h2></label>
            </summary>
            <article>
                <p>{content}</p>
                <TransitionLink href={link} className={css.link}>View project</TransitionLink>
            </article>
            <TransitionLink href={link} className={css.link}>
                <div className={css.image} style={{ backgroundImage: `url(${image})` }} />
            </TransitionLink>
            
        </details>

    )
}

export default Accordion