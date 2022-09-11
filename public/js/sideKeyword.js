var sideKeyword = document.getElementById('side-keyword');
function openKeyword() {
    sideKeyword.classList.remove('bottom-[-420px]');
    sideKeyword.classList.add('bottom-0');
}
function closeKeyword() {
    sideKeyword.classList.remove('bottom-0');
    sideKeyword.classList.add('bottom-[-420px]');
}
