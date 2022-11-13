console.log(document);

let headr = document.getElementById("hdr");
headr.innerText="Lab12 Assignment";
headr.style.color = "blue";
document.body.appendChild(headr);

let line1 = document.createElement("hr");
document.body.appendChild(line1);

let subheadr1 = document.createElement("h2");
subheadr1.innerText="Task";
subheadr1.style.color = "red";
document.body.appendChild(subheadr1);

let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);

let list1 = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerHTML = "find elements in the DOM (<b>5 points</b>)";
li1.classList.add("even");
list1.appendChild(li1);
let li2 = document.createElement('li');
li2.innerHTML = "create/add/remove elements (<b>5 points</b>)";
li2.classList.add("odd");
list1.appendChild(li2);
let li3 = document.createElement('li');
li3.innerHTML = "change content of the elements (<b>5 points</b>)";
li3.classList.add("even");
list1.appendChild(li3);
let li4 = document.createElement('li');
li4.innerHTML = "change styles of the elements (<b>5 points</b>)";
li4.classList.add("odd");
list1.appendChild(li4);
let li5 = document.createElement('li');
li5.innerHTML = "change attributes of the elements (<b>5 points</b>)";
li5.classList.add("even");
list1.appendChild(li5);
let li6 = document.createElement('li');
li6.innerHTML = "change classes of the elements (<b>5 points</b>)";
li6.classList.add("odd");
list1.appendChild(li6);
document.body.appendChild(list1);

let p2 = document.createElement("p");
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this";
document.body.appendChild(p2);

let a1 = document.createElement("a");
a1.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
a1.innerText = "link";
document.body.appendChild(a1);

let line2 = document.createElement("hr");
document.body.appendChild(line2);

let subheadr2 = document.createElement("h2");
subheadr2.innerText="Submission";
subheadr2.style.color = "red";
document.body.appendChild(subheadr2);

let p3 = document.createElement("p");
p3.innerHTML = "To submit your work, follow these instructions:";
document.body.appendChild(p3);

let list2 = document.createElement('ul');
let li21 = document.createElement('li');
li21.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).";
li21.classList.add("even");
list2.appendChild(li21);
let li22 = document.createElement('li');
li22.innerText = "Clone this repository to your local machine and work inside it.";
li22.classList.add("odd");
list2.appendChild(li22);
let li23 = document.createElement('li');
li23.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with &quotHello, World!&quot message (<b>1 point</b>).";
li23.classList.add("even");
list2.appendChild(li23);
let li24 = document.createElement('li');
li24.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
li24.classList.add("odd");
list2.appendChild(li24);
let li25 = document.createElement('li');
li25.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note:place your script at the end of the <b>body</b> section).";
li25.classList.add("even");
list2.appendChild(li25);
let li26 = document.createElement('li');
li26.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
li26.classList.add("odd");
list2.appendChild(li26);
let li27 = document.createElement('li');
li27.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
li27.classList.add("even");
list2.appendChild(li27);
document.body.appendChild(list2);

let grntxt = document.getElementsByClassName("even");
for (var i = 0; i < grntxt.length; i++) {
   grntxt[i].style.color="green";}
let prpltxt = document.getElementsByClassName("odd");
for (var i = 0; i < prpltxt.length; i++) {
   prpltxt[i].style.color="purple";}

let line3 = document.createElement("hr");
document.body.appendChild(line3);
