/**
 * Initializes dropdown toggle functionality for elements with the 'dropdown' class.
 * Each dropdown is expected to have a clickable list item (`<li>`) followed by a child `<ul>`.
 * The function modifies the dropdowns to toggle visibility of their child `<ul>` when clicked,
 * and changes the symbol in the `<li>` to indicate whether the dropdown is expanded or collapsed.
 */
function initializeDropdowns() {
    let dropdowns = document.getElementsByClassName('dropdown');

    // Symbols to indicate dropdown state
    let activatedDropdownSymbol = "-";
    let unactivatedDropdownSymbol = "+";

    // Loop through all dropdown elements
    for (let i = 0; i < dropdowns.length; i++) {
        let dropdown = dropdowns[i];
        let [dropdownLi, dropdownUl] = dropdown.children;

        // Set the initial state
        dropdownLi.style.cursor = 'pointer';
        dropdownLi.style.listStyle = 'none';
        dropdownLi.innerHTML = `${unactivatedDropdownSymbol} ${dropdownLi.innerHTML.slice(2)}`;
        dropdownUl.style.display = "none";

        // Add hover effects
        dropdownLi.onmouseenter = function () {
            dropdownLi.style.color = 'grey';
        };

        dropdownLi.onmouseleave = function () {
            dropdownLi.style.color = '';
        };

        // Toggle visibility on click
        dropdownLi.onclick = function () {
            if (dropdownUl.style.display === "none") {
                dropdownUl.style.display = "block";
                dropdownLi.innerHTML = `${activatedDropdownSymbol} ${dropdownLi.innerHTML.slice(2)}`;
            } else {
                dropdownUl.style.display = "none";
                dropdownLi.innerHTML = `${unactivatedDropdownSymbol} ${dropdownLi.innerHTML.slice(2)}`;
            }
        };
    }
}
