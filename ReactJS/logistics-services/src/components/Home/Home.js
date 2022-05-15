import { Stack, Form, Button } from 'react-bootstrap';

import classes from './Home.module.css';

const Home = () => {


    return (
        <section className={classes.backImage}>
            <Stack className={classes.searchCla} direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Add your item here..." />
                <Button variant="secondary">Search</Button>                
            </Stack>
        </section>
    );
};

export default Home