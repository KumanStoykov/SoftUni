import { editItem, getOneId } from '../api/data.js';
import { html } from '../library.js';

const editTemplate = (item, onSubmit, errorMsg, errors) => html ` <div class="container">
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
${errorMsg ? html `<div class="form-group error">${errorMsg}</div>` : null}
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${'form-control' + (errors.make ? ' is-invalid' : '')} id="new-make" type="text" name="make" .value=${item.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${'form-control' + (errors.model ? ' is-invalid' : '')} id="new-model" type="text" name="model" .value=${item.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${'form-control' + (errors.year ? ' is-invalid' : '')} id="new-year" type="number" name="year" .value=${item.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${'form-control' + (errors.description ? ' is-invalid' : '')} id="new-description" type="text" name="description" .value=${item.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${'form-control' + (errors.price ? ' is-invalid' : '')} id="new-price" type="number" name="price" .value=${item.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${'form-control' + (errors.img ? ' is-invalid' : '')} id="new-image" type="text" name="img" .value=${item.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit"/>
        </div>
    </div>
</form>
</div>`;

export async function editPage(context) {
    const item = await getOneId(context.params.id);
    
    updateView(null, {});

    function updateView(errorMsg, errors) {
        context.render(editTemplate(item, onSubmit, errorMsg, errors));
    
    }

    async function onSubmit(e) {
        e.preventDefault();
    
        const formData = [...(new FormData(e.target)).entries()];
    
        const inputs = formData.reduce( (a, [k, v]) => Object.assign(a, { [k] : v.trim()}), {});
    
        const checking = checkInputs(inputs);
        
        try{
            if(Object.values(checking).some(i => i == true)) {
                throw{
                    error: new Error('All fields are required!'),
                    errors: checking
                }; 
            }

          const data = await editItem(context.params.id, inputs);
          context.page.redirect('/details/' + data._id);
    
        } catch(err) {
            const message = err.message || err.error.message;
            updateView(message, err.errors || {});
        }    
    }
    
    function checkInputs(inputs) {
        inputs.year = Number(inputs.year);
        inputs.price = Number(inputs.price);        
    
        if (inputs.make == '' || (inputs.make.length < 4)) {
           inputs.make  = true;
        }
        if(inputs.model == '' || (inputs.model.length < 4)) {
            inputs.model = true;
        }
        if (inputs.year == '' || (inputs.year < 1950 || inputs.year > 2050)) {
            inputs.year = true;
        } 
        if (inputs.description == '' || (inputs.description.length < 10)) {
            inputs.description = true;
        } 
        if (inputs.price == '' || (inputs.price < 0)) {
            inputs.price = true;
        }
        if (inputs.img == '') {
            inputs.img = true;
        }
        //Make rest value of false
        const trueFalse = Object.entries(inputs).reduce((a, [k, v]) =>  Object.assign(a, { [k] : v.toString() == 'true' ? true : false}), {});
        return trueFalse;
    }    
}