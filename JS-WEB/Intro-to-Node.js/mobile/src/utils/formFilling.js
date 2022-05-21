exports.formFilling = (view, vehicle) => {
    view = view.replace('{{imageUrl}}', vehicle.imageUrl); 
    view = view.replace('{{model}}', vehicle.model); 
    view = view.replace('{{price}}', vehicle.price); 
    view = view.replace('{{description}}', vehicle.description); 
    view = view.replace('{{type}}', vehicle.type); 
    view = view.replace('{{_id}}', vehicle._id); 
    return view;

};