

exports.vehicleCard = (vehicle) => `
<li>
    <img
    src=${vehicle.imageUrl}
    alt="Black Cat"
    />
    <h3>${vehicle.model}</h3>
    <p><span>Type: </span>${vehicle.type}</p>
    <p>
        <span>Description: </span>${vehicle.description}</p>
    <ul class="buttons">
        <li class="btn edit"><a href="">Change Info</a></li>
        <li class="btn delete"><a href="">For Sale</a></li>
    </ul>
</li>
`;