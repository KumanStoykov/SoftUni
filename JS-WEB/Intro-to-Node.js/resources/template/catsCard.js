
const catCard = (cat) => {
  return `<li>
      <img
        src=${cat.image}
        alt="Black Cat"
      />
      <h3>${cat.name}</h3>
      <p><span>Breed: </span>${cat.breed}</p>
      <p>
        <span>Description: </span>${cat.description}</p>
      <ul class="buttons">
        <li class="btn edit"><a href="/edit">Change Info</a></li>
        <li class="btn delete"><a href="/cats/catShelter" data-id=${cat._id}>New Home</a></li>
      </ul>
    </li>`;
};

module.exports = catCard;