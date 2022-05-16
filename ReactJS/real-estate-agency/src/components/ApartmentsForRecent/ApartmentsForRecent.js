import { useState, useEffect } from 'react';

import * as estateService from '../services/estateService';

import Card from '../Card/Card';



const ApartmentsForRecent = () => {
    const [estate, setEstate] = useState([]);
    
    useEffect(() => {
        estateService.getAllEstate()
            .then(res => {
                setEstate(res);
            });
    });


    return (
        <section id="all-listings">
            <h1>Apartments for recents</h1>

           
            {estate.length == 0
            ? <div className="no-data-listing">
                <p className="no-offer">There are no housing offers found...</p>
              </div>
            : estate.map(x => <Card key={x._id} card={x}/>)
            }
            
            

        </section>

    );
};

export default ApartmentsForRecent;