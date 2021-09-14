//cau 1: ax+b=0
function giai_pt_bac1(a,b){
    if(a==0){
        if(b==0){
            console.log("phuong trinh co vo so nghiem");
        }
        else{
            console.log("phuong trinh vo nghiem")
        }
    }
    else{
        console.log("phuong trinh co nghiem la: "+b/a)
    }
}

giai_pt_bac1(5,8);
