function run(operator, bilangan1, bilangan2) {
    let output;

    switch (operator) {
        case '+':
        output = bilangan1 + bilangan2;
        break;

        case '-':
        output = bilangan1 - bilangan2;
        break;

        case '*':
        output = bilangan1 * bilangan2;
        break;

        case '/':
            if (bilangan2 !== 0) {
                output = bilangan1 / bilangan2;
            } else {
                output = 'Error';
            }
break;
default:
    output = 'tidak bisa dibagi nol/0';
    }
    
    return output;
}
