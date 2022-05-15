import { Card, Image } from 'react-bootstrap';

import classes from './About.module.css';

const About = () => {


    return (
        <section className={classes.wrapper}>
            <article className={classes.backImage}>
                <Card border="secondary" style={{ width: '40rem' }}>
                    <Card.Header className={classes.headerCard}>25+ Years Experience</Card.Header>
                    <Card.Body>
                    <Image fluid src="/image/truck-about.jpg"/>
                    </Card.Body>
                </Card>
                <br />
            </article >

            <article className={classes.text}>
                <h3>About us</h3>
                <h2>Trusted and Faster logistic Service Provider</h2>
            </article>
        </section>
    );
};

export default About;