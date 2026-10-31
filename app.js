var stdName = prompt('Enter your name');
var stdClass = prompt('Enter your class');
var stdRoll = prompt('Enter your roll no');

var stdInfo = `<pre>
<b>Name :</b> ${stdName}
<b>Class : </b> ${stdClass}
<b>Roll no : </b> ${stdRoll}
</pre>`;

document.write(stdInfo);

var eng = Number(prompt('Enter marks of English'));
var maths = Number(prompt('Enter marks of Mathematics'));
var phy = Number(prompt('Enter marks of Physics'));
var chem = Number(prompt('Enter marks of Chemistry'));
var urdu = Number(prompt('Enter marks of Urdu'));
var isl = Number(prompt('Enter marks of Islamiat'));
var comp = Number(prompt('Enter marks of Computer Science'));

var sum = eng + phy + maths + chem + urdu + isl + comp;
var total = 700;
var percentage = (sum/total) * 100;

document.write(`<pre>
<b>English :</b> ${eng}
<b>Mathematics : </b> ${maths}
<b>Physics : </b> ${phy}
<b>Chemistry : </b> ${chem}
<b>Urdu : </b> ${urdu}
<b>Islamiat : </b> ${isl}
<b>Computer Science : </b> ${comp}

<b>Obtained Marks : </b> ${sum}
<b>Total Marks</b> ${total}
<b>Percentage : </b> ${percentage}%
</pre>`)
