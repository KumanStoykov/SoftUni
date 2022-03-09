import { showHome } from "./home.js";


export async function makeDeleteRequest(id, e) {
    e.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem('userData'));
      
    try {
      const res = await fetch(`http://localhost:3030/data/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': userData.token
        }
      });
      if(!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }
      showHome();
      
    } catch(err) {
      alert(err.message);
    }  
}