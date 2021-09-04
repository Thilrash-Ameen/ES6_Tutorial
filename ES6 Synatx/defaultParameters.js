function say(message = 'Hi') {
    console.log(message);
}

say();
say('Hello');

// Arguments vs parameters

function add(x, y) {
    // return x + y;

    console.log(x + y);
}

add(100, 200);

// Setting JavaScript default parameters for a function

function saySomething(message) {
    console.log(message);
}

saySomething(); // undefined
saySomething('Hello');

function sayMessage(message) {
    message = typeof message !== 'undefined' ? message : 'Hi, this is undefined msg';
    console.log(message);
}

sayMessage();
sayMessage('Hello World');

// More JavaScript default parameter exapmle

function createDiv(height='100px', width='100px', border='solid 1px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}

createDiv();
createDiv(undefined, undefined, 'solid 5px blue');

