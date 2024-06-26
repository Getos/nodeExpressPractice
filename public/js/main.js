
const output = document.querySelector("#output")
const btn = document.querySelector("#get-posts-btn")
const form = document.querySelector("form")


const apiUrl = '/api/posts'
export async function showPosts() {
    try {
        const res = await fetch('/api/posts');
    if (!res.ok) {
        throw new Error('failed to fetch')
    }
    const posts = await res.json();
    output.innerHTML = ''
    posts.forEach((post) => {
        const tableQuery = document.createElement('table');
        const tableRow = document.createElement('tr');
        const postEl =document.createElement('td')
        postEl.textContent = post.id
        const postEl2 = document.createElement('td')
        postEl2.textContent = post.title
        output.appendChild(tableQuery);
        tableQuery.appendChild(tableRow);
        tableRow.appendChild(postEl)
        tableRow.appendChild(postEl2)
    })
    }
    catch (error) {
        console.log('error fetching post',error)
    }
}
//add post
export async function addPost(e) {
    e.preventDefault()
    const formData = new FormData(this);
    const title = formData.get('title')
    try {
        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })
        if (!res.ok) {
            throw new Error('failed to add post')
        }
        const newPost = await res.json();
        const postE = document.createElement('div')
        postE.textContent = newPost.title
        output.appendChild(postE)
        showPosts();

        }
    catch(error) {
      console.error('Error adding post')
    }
}
btn.addEventListener('click', showPosts)
form.addEventListener('submit', addPost)