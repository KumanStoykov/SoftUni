import { Stack, Form, Button } from 'react-bootstrap';

import classes from './Home.module.css';

const Home = () => {


    return (
        <section className={classes.backImage}>
            <h2>Safer and Faster</h2>
            <h1>Logistics Service</h1>
            <Stack className={classes.search} direction="horizontal" gap={3}>
                <Form.Control className={classes.inputSearch} placeholder="Tracking id" />
                <Button variant="secondary">Track and Trace</Button>                
            </Stack>
        </section>
    );
};

export default Home