const container = document.querySelector('.container')

for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div')
    div.classList.add('card')

    const imgNo = document.createElement('h2')
    const img = document.createElement('img')

    imgNo.textContent = i
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    div.append(imgNo, img)

    container.appendChild(div)
}
