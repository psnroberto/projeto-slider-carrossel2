
const buttons = document.querySelectorAll(".buttons"); // variável para fazer referência a todos os elementos com classe "buttons", que são os botões "left" e "right" do carrossel;
let currentItem = 0; // Definimos que o item atual do carrossel terá índice igual a zero;
const items = document.querySelectorAll(".carrossel-imgs"); // variável para fazer referência a todos os elementos com classe "carrossel-imgs", que são as divs que contém cada imagem do carrossel;
const maxItems = items.length; // variável criada para receber o valor do commprimento do vetor "items", ou seja, a quantidade de imagens que o nosso carrosel possui;


for (let i = 0; i < buttons.length; i++) { // loop para adicionar um "escutador" em cada botão do carrossel, que acionará a função "buttonClick()" quando o evento "click" ocorrer;
    buttons[i].addEventListener("click", buttonClick) 
}

function buttonClick() {
    if (this.id == 'left-button') { // se o botão acionador do evento "click" ou seja, "this", tiver o id "left-button", o "currentItem", que tem como valor padrão 0, será decrementado em -1;
        currentItem -= 1
    } else if (this.id == 'right-button') { // se o botão acionador do evento evento "click", ou seja, "this", tiver o id "right-button", o "currentItem, que tem como valor padrão 0, será incrementado em +1;
        currentItem += 1
    }
    
    if (currentItem < 0) { // Se o índice do "currentItem" for menor que zero, queremos que ele passe a receber como índice o valor máximo. Ou seja, quando a primeira imagem do carrossel for o "currentItem", e clicarmos no botão "left-button", queremos que o próximo "currentItem" seja o último item do carrossel;
        currentItem = maxItems - 1
    } else if (currentItem >= maxItems) { // Se o índice do "currentItem" for maior ou igual ao maior índice, queremos que ele passe a receber como índice o valor incial, ou seja, 0. Como efeito, quando a última imagem do carrossel for o "currentItem", e clicarmos no botão "right-button", queremos que o próximo "currentItem" seja o primeiro item do carrossel;
        currentItem = 0
    }

    for (let j = 0; j < maxItems; j++) { // loop para que quando o evento "click" ocorrer, todas as imagens do carrossel tenham a classe "current-img" removida. Isso garante que todas fiquem opacas (pois a única imagem com opacidade 1/100% é da classe "current-img");
        items[j].classList.remove('current-img')
    }
    
    items[currentItem].classList.add("current-img"); // Após garantir que todas as imagens tenha a opacidade de 1/100% removidas, adicionamos a classe "current-img" apenas ao item atual do carrosel, "currentItem";

    items[currentItem].scrollIntoView( { // O método "scrollIntoView" garante que o "currentItem" esteja sempre centralizado no container, através da propriedade "inline: center".
    behavior: "smooth", // Permite que seja suave o deslizamento das imagens no carrossel.
    inline: "center",
    })
}