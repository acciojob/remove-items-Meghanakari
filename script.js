function removeColor() {
    const select = document.getElementById('colorSelect');
    const selectedIndex = select.selectedIndex;
    console.log(selectedIndex); // Check the selected index

    if (selectedIndex >= 0) {
        select.remove(selectedIndex);
    } else {
        alert('Please select a color to remove');
    }
}