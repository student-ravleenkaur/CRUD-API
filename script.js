const API_URL = "/api/blogs";


async function createBlog() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const body = document.getElementById("body").value;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, body })
    });

    const data = await response.json();
    alert("Blog Created: " + JSON.stringify(data, null, 2));
}

async function getBlog() {
    const id = document.getElementById("searchId").value;
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();

    if (data.error) {
        document.getElementById("blogResult").innerHTML = `<p style="color: red;">${data.error}</p>`;
    } else {
        document.getElementById("blogResult").innerHTML = `<h3>${data.title}</h3><p>${data.body}</p><small>By ${data.author}</small>`;
    }
}


async function updateBlog() {
    const id = document.getElementById("updateId").value;
    const newTitle = document.getElementById("newTitle").value;
    const newBody = document.getElementById("newBody").value;

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, body: newBody })
    });

    const data = await response.json();
    alert("Blog Updated: " + JSON.stringify(data, null, 2));
}

async function deleteBlog() {
    const id = document.getElementById("deleteId").value;
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    const data = await response.json();
    alert(data.message);
}
