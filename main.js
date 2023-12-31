let img = document.querySelectorAll('.img');
let inp = document.querySelector('.inp');
let bigImg = document.querySelector('.bigImg');
let num = 0;

inp.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        let url = `https://api.unsplash.com/search/photos/?query=${inp.value}&per_page=9&client_id=NlTgucyAO3EyzTb09PjhlNu1lNW7BuW0FaiBzMNYqDs`;
        inp.value = '';

        let gettingData = async () => {
            let data = await fetch(url);
            if (data) {
                return data.json();
            } else {
                console.error("Some error occured");
            }
        }
        (async () => {
            let response = await gettingData();
            img.forEach((img) => {
                let fullLink = response.results[num].urls.regular;
                img.src = fullLink
                num++
                img.addEventListener('click', () => {
                    bigImg.src = fullLink
                    bigImg.style.display = 'block';
                })
                bigImg.addEventListener('click', () => {
                    bigImg.style.display = 'none';
                })
            })
            num = 0;
        })();
    }
})


