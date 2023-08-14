// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด   
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา


const TERMINATE = 'stop';
const obj = {};

let key;
let value;


while(true) {
    key = prompt('Enter key');
    value = prompt('Enter value');
    if (key == TERMINATE && value == TERMINATE) {
       break; 
    }
    obj[key] = value;
}

console.log(obj);