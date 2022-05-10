import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as petService from '../../services/petService';

const Create = () => {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/types')
            .then(res => res.json())
            .then(result => {
                let typesResult = Object.values(result);

                let categories = typesResult.reduce((a, x) => {

                    if (!a[x.category]) {
                        a[x.category] = [];
                    }
                    a[x.category].push(x);

                    return a;
                }, {});

                setCategories(categories);
                setTypes(typesResult);
            });
    }, []);


    const onPetCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let name = formData.get('name').trim();
        let description = formData.get('description').trim();
        let imageUrl = formData.get('imageUrl').trim();
        let type = formData.get('type');

        petService.create({
            name,
            description,
            imageUrl,
            type
        });
        navigate('/Dashboard');
    };

    const onCategoryChange = (e) => {
        setTypes(categories[e.target.value]);
    };


    return (
        <section id="create-page" className="create">
            <form id="create-form" method="POST" onSubmit={onPetCreate}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Category</label>
                        <span className="input">
                            <select id="type" name="type" onChange={onCategoryChange}>
                                {Object.keys(categories).map(x => <option key={x} value={x}>{x}</option>)}
                            </select>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                {types.map(x => <option key={x._id} value={x._id}>{x.name}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
}

export default Create;