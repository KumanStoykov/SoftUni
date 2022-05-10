
const baseUrlData = 'http://localhost:3030/data';
const baseUrlJsonStore = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
   let res = await fetch(`${baseUrlData}/pets`);

   let pets = await res.json();

   return pets;
};

export const getOne = async (id) => {
   let res = await fetch(`${baseUrlData}/pets/${id}`);

   let pet = await res.json();
   return pet;
};

export const create = async (pet) =>{
   let res = await fetch(`${baseUrlJsonStore}/pets`, {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify({
         pet
      })

   });
   let result = await res.json();

   return result
   
};