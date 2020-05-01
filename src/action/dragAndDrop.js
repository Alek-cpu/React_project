const removeCard = () => {
    const cards = document.querySelectorAll('.card');
    const baskets = document.querySelectorAll('.deleted');

        cards.forEach((card, j) => {
            baskets.forEach((basket, i) => {
                basket.addEventListener('click', function (e)  {
                    if ( i === j ) {
                        cards[i].remove();
                    }
                });
            });
        });
    }
export default removeCard;