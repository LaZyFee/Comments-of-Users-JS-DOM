function printCommnets() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => getCommnets(data))

}

function getCommnets(data) {
    const commnetsList = document.getElementById('comments-container');
    for (const comments of data) {
        const commentsDiv = document.createElement('div');
        commentsDiv.classList.add('commentsStyle');
        commentsDiv.innerHTML = `
        <p>id: ${comments.id}</p>
        <h3>user: ${comments.name}</h3>
        <p>email:${comments.email}</p>
        <p>comments:${comments.body}</p>
        `
        commnetsList.appendChild(commentsDiv)
    }
}



printCommnets();