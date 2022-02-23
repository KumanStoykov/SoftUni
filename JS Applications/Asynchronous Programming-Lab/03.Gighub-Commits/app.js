function loadCommits() {
    const ulElement = document.querySelector('#commits');

	const userName = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
	const url = `https://api.github.com/repos/${userName}/${repository}/commits`;

	async function returnRepos(url) {

		try {
			const response = await fetch(url);
			if (response.ok == false) {
				throw new Error(`${response.status} ${'Not found'}`);
			}
			const data = await response.json();
			handleResponse(data);
		} catch (err) {
			ulElement.innerHTML = '';
			ulElement.textContent = `${err.message}`;
		}

	}
	returnRepos(url);

	function handleResponse(data) {
		ulElement.innerHTML = '';

		for (let repo of data) {
            console.log(data)
			const createLiElement = document.createElement('li');
			createLiElement.textContent =
				`${repo.commit.author.name}: ${repo.commit.message}`;
			ulElement.appendChild(createLiElement);
		}
	}
}