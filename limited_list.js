function setupLimitedLists(n) {
    // Find all UL elements with the class 'limited-list'
    const lists = document.querySelectorAll('ul.limited-list');

    lists.forEach(list => {
        // Get all the list items in the UL
        const items = Array.from(list.children);

        // Check if the list has more than n items
        if (items.length > n) {
            // Hide items beyond the nth one
            items.slice(n).forEach(item => {
                item.style.display = 'none';
            });

            // Create a "See more"/"Show less" toggle link
            const toggleItem = document.createElement('li');
            const toggleLink = document.createElement('a');
            toggleLink.href = '#';
            toggleLink.textContent = 'See more';

            toggleItem.appendChild(toggleLink);
            list.appendChild(toggleItem);

            // Add a click event listener to the toggle link
            toggleLink.addEventListener('click', (e) => {
                e.preventDefault();

                if (toggleLink.textContent === 'See more') {
                    // Show all the hidden items
                    items.slice(n).forEach(item => {
                        item.style.display = '';
                    });
                    toggleLink.textContent = 'Show less';
                } else {
                    // Hide the items beyond the nth one
                    items.slice(n).forEach(item => {
                        item.style.display = 'none';
                    });
                    toggleLink.textContent = 'See more';
                }
            });
        }
    });
}

// Example usage: Limit to the first 3 items
setupLimitedLists(3);
