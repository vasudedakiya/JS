function add(n) {
    a = document.getElementById('answer');

    a.innerHTML = a.innerHTML + n;

}

function op(opr) {
    temp1 = document.getElementById('answer').innerHTML;
    temp2 = opr

    document.getElementById('answer').innerHTML = '';


}

function clr() {
    document.getElementById('answer').innerHTML = '';
    temp1 = 0
    temp2 = 0

}

function sol() {

    a = document.getElementById('answer');
    temp3 = a.innerHTML;

    if (temp2 == '+') {
        a.innerHTML = parseInt(temp1) + parseInt(temp3)

    }
    if (temp2 == '-') {
        a.innerHTML = parseInt(temp1) - parseInt(temp3)

    }
    if (temp2 == 'x') {
        a.innerHTML = parseInt(temp1) * parseInt(temp3)

    }
    if (temp2 == '/') {
        a.innerHTML = parseInt(temp1) / parseInt(temp3)

    }



}