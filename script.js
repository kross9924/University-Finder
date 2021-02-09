const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    universitiesEl = document.getElementById('universities'),
    resultHeading = document.getElementById('result-heading');
    


//Search university and fetch from API
function searchuniversity(e) {
    e.preventDefault();

    
    // Get search term
    const term = search.value;
    

    //Check for empty
    if (term.trim()) {
        fetch(`http://universities.hipolabs.com/search?country=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;
                if (data.length === 0) {
                    resultHeading.innerHTML = `<p>There are no search results. Try again!!</p>`;
                    universitiesEl.innerHTML = '';
                } else {
                    universitiesEl.innerHTML = data.map(university => `
                <a href='${university.web_pages}' target="_blank" class="university">

                <div class="university-info" >
                <h3>${university.name} </h3>
                 </div>
                </a>
                `)
                        .join('')
                }
            });
        //Clear search text
        search.value = '';
    } else {
        alert('Please enter a search term');
    }
}


// Event Listener
submit.addEventListener('submit', searchuniversity);

