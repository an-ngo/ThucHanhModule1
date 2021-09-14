function getPosition(value,arr){
    let check=false
    for(let i=0;i<arr.length-1;i++){
        if(value==arr[i]){
            console.log("gia tri vua nhap nam o vi tri thu " + i+1);
            check=true
        }
        
    }
    if(!check){
        console.log("gia tri vua nhap khong nam trong mang")
    }
}

arr=[0,1,2,3,4,5,6,7,8,9];
let value=prompt("nhap vao mot gia tri bat ky")
value=parseFloat(value)
getPosition(value,arr);