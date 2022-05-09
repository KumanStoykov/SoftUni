
const baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
   let res = await fetch(`${baseUrl}/pets`);

   let pets = await res.json();

   return pets;
};

export const getOne = async (id) => {
   let res = await fetch(`${baseUrl}/pets/${id}`);

   let pet = await res.json();
   return pet;
}