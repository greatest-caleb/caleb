

document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('dynamicText').innerHTML = 'The text has been changed!';
});

document.querySelector('#buttonTest').addEventListener('click',
function() {
    document.querySelector('#text').innerHTML = 'boom';
});


