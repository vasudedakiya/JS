function add2number() {
    n1 = parseInt(prompt("Enter 1st number "));
    n2 = parseInt(prompt("Enter 2st number "));

    document.write(n1 + " + " + n2 + " = " + (n1 + n2));
}

function evenodd() {
    n1 = parseInt(prompt("Enter 1st number : "));

    if (n1 % 2 == 0) {
        document.write("number " + n1 + " is even");
    }
    else {
        document.write("number " + n1 + " is odd");
    }

}

function biggerof3() {

    n1 = parseInt(prompt("Enter 1st number "));
    n2 = parseInt(prompt("Enter 2st number "));
    n3 = parseInt(prompt("Enter 3st number "));

    if (n1 > n2 && n1 > n3) {
        document.write("1st number " + n1 + " is biggest")

    }
    else if (n2 > n1 && n2 > n3) {
        document.write("2st number " + n2 + " is biggest")

    }
    else if (n3 > n2 && n3 > n1) {
        document.write("3st number " + n3 + " is biggest")

    }

    else {
        document.write("Numbers re same")
    }

}

function fibonacci() {

    n = parseInt(prompt('Enter the number of terms: '));
    n1 = 0;
    n2 = 1;
    nextTerm = 0;

    document.write('Fibonacci Series:');

    for (i = 1; i <= n; i++) {
        document.write(" " + n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

}

function prime_or_not() {
    n = parseInt(prompt('Enter the number of terms: '));

    if (n == 1) {
        document.write("1 is neither prime nor composite number.")
    }

    else {


        if (n == 2 || n == 3 || n == 5) {
            document.write("number is prime")

        }
        else if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0) {
            document.write("number is not a prime.")

        }
        else {
            document.write("number is prime")
        }

    }

}

function n_prime_number() {

    n = parseInt(prompt('Enter the number of terms: '));
    count = 0;

    for (let i = 0; count != n; i++) {
        if (n == count) {
            break;

        }
        else if (i == 2 || i == 3 || i == 5) {
            document.write(i + "<br>");
            count++;

        }
        else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i == 1) {
            continue;

        }
        else {
            document.write(i + "<br>");
            count++;
        }

    }

}

function pattern() {

    for (let i = 1; i < 5; i++) {
        for (let j = 0; j < i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }

    document.write("<br><br><br><br>");

    for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 5; j++) {

            if (j == 1 || j == 3 || i == 1 || i == 5) {
                document.write("#" + "&nbsp;");
            }
            else {
                document.write("&nbsp;" + "&nbsp;" + "&nbsp;");
                // document.write(" ")
            }
        }
        document.write("<br>");
    }


    document.write("<br><br><br><br>");
    v = 1
    for (let i = 4; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            document.write("&nbsp;");
        }
        for (let k = 1; k <= v; k++) {
            document.write("*" + "&nbsp;");

        }
        v++;
        document.write("<br>");

    }

}