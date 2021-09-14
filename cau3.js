let str
let check=['a','o','e','u','i']
function kiem_tra_ky_tu_nguyen_am(str) {
    let count=0
    for (const i of check) {
        for(let j=0;j<str.length;j++){
            if(i==str[j]){
                count++;
            }
        }
    }

    if(count==0) {return false;}
    else console.log("so ky tu nguyen am la: "+count)
}

str=prompt("hay nhap vao chuoi")
kiem_tra_ky_tu_nguyen_am(str);