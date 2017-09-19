function getFirstSelector (selector) {
    return document.querySelector(selector);
}

function nestedTarget () {
    return document.querySelector('.target');
}

function increaseRankBy (n) {
    const lists = document.querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < lists.length; i++) {
        lists[i].innerHTML = (parseInt(lists[i].innerHTML) + parseInt(n)).toString();
    }
}

function deepestChild () {
    return document.querySelector('#grand-node div div div div');
}
