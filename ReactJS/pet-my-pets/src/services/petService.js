const baseUrlData = 'http://localhost:3030/data';

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

export const create = async (pet, token) =>{
   let res = await fetch(`${baseUrlData}/pets`, {
      method: 'POST',
      headers: {
         'content-type': 'application/json',
         'X-Authorization': token
      },
      body: JSON.stringify({
         ...pet,
         likes: []
      })

   });
   let result = await res.json();

   return result
   
};

export const deleteOne = async (petId, token) => {
   let res = await fetch(`${baseUrlData}/pets/${petId}`, {
      method: 'DELETE',
      headers: {
         'X-Authorization': token
      }
   });

   return res.json();
};