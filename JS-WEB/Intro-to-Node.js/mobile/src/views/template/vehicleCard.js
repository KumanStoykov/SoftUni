

exports.vehicleCard = (vehicle) => `
<li>
    <img
    src=${vehicle.imageUrl}
    alt="Image.png"
    />
    <h3>${vehicle.model}</h3>
    <p><span>Type: </span>${vehicle.type}</p>
    <p><span>Description: </span>${vehicle.description}</p>
    <p><span>Price: </span>${vehicle.price}</p>
    <ul class="buttons">
        <li class="btn edit"><a href="/edit/${vehicle._id}">Change Info</a></li>
        <li class="btn delete"><a href="/bey-vehicle?id=${vehicle._id}">For Sale</a></li>
    </ul>
</li>`;