$(document).ready(function () {
    $('li.feilds').filter(':nth-child(n+4)').addClass('hide');
    $('ul').on('click', 'li.title', function () {
        $(this).next().slideDown(200).siblings('li.feilds').slideUp(200);
    });
});
function validateform() {
    for (var i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].className == "req" && myform.elements[i].value.length == 0) {
            alert('Fill all required Fields');
            return false;
        }
    }
}

