function lockedProfile() {

    const profiles = document.querySelectorAll('.profile');
    const buttons = document.querySelectorAll('.profile button');

    Array.from(buttons).forEach(forProfile => {
        forProfile.addEventListener('click', showMore);
    });   

    function showMore(e) {

        
        for (let profile of profiles) {
            let user = profile.children[9];
            let lock = profile.children[2].checked;
            let unlock = profile.children[4].checked;
            
            if(unlock == true && e.target.parentNode.children[9] == user) {
                
                if(e.target.textContent === 'Show more') {

                    user.style.display = 'block';
                    e.target.textContent = 'Hide it';

                } else {
                    e.target.textContent = 'Show more';
                    user.style.display = 'none';
                }
            } else if (lock === true && e.target.parentNode.children[9] == user){
                e.target.textContent = 'Show more';
                user.style.display = 'none';
            }
           
        }

    }
}