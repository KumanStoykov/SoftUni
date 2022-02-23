// function loadRepos() {
// 	const ulElement = document.querySelector('#repos');

// 	const userName = document.getElementById('username').value;
// 	const url = `https://api.github.com/users/${userName}/repos`;


// 	fetch(url)
// 		.then(res => {
// 			if (res.ok == false) {
// 				throw new Error(`${res.status} ${res.statusText}`);
// 			}
// 			return res.json();
// 		})
// 		.then(handleResponse)
// 		.catch(handelError);

// 	function handleResponse(data) {
// 		ulElement.innerHTML = '';

// 		for (let repo of data) {
// 			const createLiElement = document.createElement('li');
// 			createLiElement.innerHTML =
// 				`<a href="${repo.html_url}">
//                 ${repo.full_name}
//             </a>`
// 			ulElement.appendChild(createLiElement);
// 		}
// 	}

// 	function handelError(error) {
// 		ulElement.innerHTML = '';
// 		ulElement.textContent = `${error.message}`;
// 	}
// }
// ---------------------With ASYNC AWAIT----------------------------------------------
function loadRepos() {
	const ulElement = document.querySelector('#repos');

	const userName = document.getElementById('username').value;
	const url = `https://api.github.com/users/${userName}/repos`;

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
	returnRepos(url)

	function handleResponse(data) {
		ulElement.innerHTML = '';

		for (let repo of data) {
			const createLiElement = document.createElement('li');
			createLiElement.innerHTML =
				`<a href="${repo.html_url}">
                ${repo.full_name}
            </a>`
			ulElement.appendChild(createLiElement);
		}
	}
}