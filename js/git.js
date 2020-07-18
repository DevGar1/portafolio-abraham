

const url = "https://api.github.com/users/DevGar1/repos";
const gif = [
    {
        "path": "im/aling-end.gif",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    }
]
function git() {
    const git = document.getElementById('projects');
    let index = 0;


    fetch(url)
        .then(res => res.json()
            .then(repos => {
                for (const repo of repos) {
                    const div = document.createElement('div');
                    const h4 = document.createElement('h4');
                    h4.innerText = repo.name;
                    div.appendChild(h4);
                    const p = document.createElement('p');
                    p.textContent = gif[index].description;
                    div.appendChild(p);
                    const img = document.createElement('img');
                    img.src = gif[index].path;
                    img.alt = gif[index].description;
                    div.appendChild(img);
                    const a = document.createElement('a');
                    a.href = repo.html_url;
                    a.innerText = 'Ingresar al proyecto';
                    a.style.color = 'rgba(44, 100, 200, 0.9)';
                    div.appendChild(a);
                    git.appendChild(div);
                    index++;
                }
            })
        );
}