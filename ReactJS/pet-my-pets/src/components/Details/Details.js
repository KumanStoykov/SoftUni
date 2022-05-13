import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as petService from '../../services/petService';
import { AuthContext } from '../../contexts/authContext';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    let [pet, setPet] = useState([]);

    let params = useParams();


    useEffect(() => {
        petService.getOne(params.petId)
            .then(result => {
                setPet(result);
            });
    }, [params.petId]);

    const deleteHAndler = (e) => {

        petService.deleteOne(params.petId, user.accessToken)
        .then(res => {
            navigate('/dashboard');
        })

    };

    const owner = (
        <>
            <Link className="button" to={`/edit/${params.petId}`}>Edit</Link>
            <a className="button" href="javascrip:void(0)" onClick={deleteHAndler}>Delete</a>
        </>
    );
    const userBtn = (
        <a className="button" href="#">Like</a> 
    )

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    {user._id && user._id == pet._ownerId
                        ? owner
                        : userBtn                                
                    }
                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet.likes?.length || 0}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
}

export default Details;