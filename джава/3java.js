let week = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};

alert("1: " + week[1]);
alert("2: " + week[2]);
alert("3: " + week[3]);
alert("4: " + week[4]);
alert("5: " + week[5]);
alert("6: " + week[6]);
alert("7: " + week[7]);

let months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};

let allMonths = "";
for (let key in months) {
    allMonths += key + ": " + months[key] + "\n";
}
alert("Months:\n" + allMonths);
let user = {
    1: 'mitryushin',
    2: 'petr',
    3: 'b'
};
let alluser = '';
for (key in user) {
    alluser += key + ':' + user[key] + '\n';
}
alert('info:\n' + alluser);
let date = {
    year: '2025',
    month: 'october',
    day: '15'

}
let date1 = "";
for (let i in date) {
        date1 += date[i] + "-";
}
alert('info:\n' + date1);
let obj = { x: 1, y: 2, z: 3 };
obj.y = obj.y ** 2;
alert(obj.y);
obj.z = obj.z ** 2;
alert(obj.z);
let obj1 = {};
obj1['a'] = 1;
obj1['b'] = 2;
obj1['c'] = 3;
let keys = Object.keys(obj);
alert(keys);
keys = Object.keys(obj).length;
alert(keys)
