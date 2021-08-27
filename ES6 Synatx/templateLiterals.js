let sample = `This is a sample String literal`;

// basic template literals
let str = `Template literal in ES6`;

console.log(str);
console.log(str.length);
console.log(typeof str);

let anotherStr = `Here's a template \` literal`;

console.log(anotherStr);

// Multiline Strings

var msg = 'Multiline \n\
string';

console.log(msg);

var msg = ['This text ',
            'can ',
            'span multiple lines'].join('\n');

console.log(msg);

let p = 
`This text
can
span multiple lines`;

console.log(p);

let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here',
    tags: ['tags', 'template literals', 'javascript']
};

let {title, excerpt, body, tags} = post;

var postHtml = `<article>
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${excerpt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
        ${tags.map(tag => `<li>${tag}</li>`).join('\n    ')}
    </ul>
</footer>
</article>`; 

document.getElementById("demo").innerHTML = postHtml;