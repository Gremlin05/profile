function addProduct()
{
    let selected = document.querySelector('input[name="size"]:checked')
    if(selected)
    {
        alert("Вы добавили товар в корзину. Размер товара: "+ selected.nextElementSibling.textContent);    
    }
    else
    {
        alert("Выберете размер товара!");
    }
    
}