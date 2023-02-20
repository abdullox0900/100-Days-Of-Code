const elList = document.querySelector('.list');
const elRefreshBtn = document.querySelector(".btn");

const maxNumberBox = 21;

const generateColorPalette = () => {

    // *Clearing elList
    elList.innerHTML = ''

  for (let i = 0; i < maxNumberBox; i++) {

    // * Generation Rondom # Hex Code
    let randomHexCol = Math.floor(Math.random() * 0xf4ffff).toString(16);
    randomHexCol = `#${randomHexCol.padStart(6, "0")}`;

    // *Create New Element.
    const elListItem = document.createElement("li");
    elListItem.classList.add("list__item");
    elListItem.innerHTML = `<div class="item__color" style="background: ${randomHexCol}"></div>
                            <div class="item__color-value">${randomHexCol}</div>`;
    elListItem.addEventListener('click', () => copyColor(elListItem, randomHexCol));
    elList.append(elListItem);
  }
};

generateColorPalette();

// * Copy Funtion.
const copyColor = (element, hexValue) => {
    const colorCopyElement = element.querySelector(".item__color-value");
    navigator.clipboard.writeText(hexValue).then(() => {
        colorCopyElement.innerHTML = "Copied.";
    })
    // *Clearing "Copied" 2s.
    setTimeout(() => {
        colorCopyElement.innerHTML = hexValue;
    },2000)
}

elRefreshBtn.addEventListener("click", generateColorPalette);
