document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    let selectedItems = [];

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('selected')) {
                item.classList.add('selected');
                selectedItems.push(item);
                if (selectedItems.length === 2) {
                    const pair1 = selectedItems[0].getAttribute('data-pair');
                    const pair2 = selectedItems[1].getAttribute('data-pair');
                    if (pair1 === pair2) {
                        document.getElementById('message').textContent = 'Вірно!';
                        document.getElementById('reset').style.display = 'inline-block';
                        document.getElementById('home').style.display = 'inline-block';
                    } else {
                        document.getElementById('message').textContent = 'Спробуй ще раз';
                        setTimeout(() => {
                            selectedItems.forEach(item => {
                                item.classList.remove('selected');
                            });
                            selectedItems = [];
                            document.getElementById('message').textContent = '';
                        }, 1000);
                    }
                }
            }
        });
    });

    document.getElementById('reset').addEventListener('click', () => {
        items.forEach(item => {
            item.classList.remove('selected');
        });
        selectedItems = [];
        document.getElementById('message').textContent = '';
        document.getElementById('reset').style.display = 'none';
        document.getElementById('home').style.display = 'none';
    });

    document.getElementById('home').addEventListener('click', () => {
        // Redirect to homepage or handle as needed
        alert("Redirecting to homepage...");
    });
});
