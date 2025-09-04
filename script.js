function removeColor() {
    const select = document.getElementById('colorSelect');
    const selectedIndex = select.selectedIndex;

    if (selectedIndex >= 0) {
        select.remove(selectedIndex);
    } else {
        alert('Please select a color to remove');
    }
}