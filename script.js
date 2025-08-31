//your JS code here. If required.
const select = document.getElementById('colorSelect');
    const selectedIndex = select.selectedIndex;

    if (selectedIndex >= 0) {
        select.remove(selectedIndex);
    } else {
        alert('Please select a color to remove');
    }
}