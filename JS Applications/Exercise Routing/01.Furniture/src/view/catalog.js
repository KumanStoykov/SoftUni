import { getAllFurniture, loadMyFurniture } from '../api/data.js';
import { html, until } from '../library.js';


const catalogTemplate = (dataPromise, isOwner) => html`
<div class="container">
    <div class="row space-top">
        ${ html `${isOwner 
                ? html `<div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p></div>`  
                : html `<div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
                </div>`}`}
    </div>
    <div class="row space-top">
        ${until(dataPromise, html`<p>Loading...</p>`)}
    </div>
</div>`;

const furniture = (data) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${data.img}" />
                <p>Description here</p>
                <footer>
                    <p>Price: <span>${data.price} $</span></p>
                </footer>
                <div>
                    <a href=${`/details/${data._id}`} class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`

export function catalogPage(context) {
   const pathname = context.pathname == '/my-furniture';
    context.navBar();
    
    context.render(catalogTemplate(loadItem(pathname), pathname));
    
}

async function loadItem(pathname) {
        
    const allFurniture = await getAllFurniture();
    
    if(pathname) {
        const myFurniture = await loadMyFurniture();
       return myFurniture.map(furniture);
    } else {
        
        return allFurniture.map(furniture);
    }

}



