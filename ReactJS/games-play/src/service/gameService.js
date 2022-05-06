const baseUrl = 'http://localhost:3030/data';


export function getAll() {
   return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`)
        .then(res => res.json());        
}

export function getOne(id) {
        return fetch(`${baseUrl}/games/${id}`)
                .then(res => res.json());
}

export function getLatest(id) {
        return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
                .then(res => res.json());
}