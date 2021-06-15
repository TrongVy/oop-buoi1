function getEml(id){
    return document.getElementById(id);
}
var student = {
    maSV : getEml('txtMaSV'),
    tenSV : getEml('txtTenSV'),
    hoanCanhSV : getEml('loaiSV'),
    diemToan : getEml('txtDiemToan'),
    diemVan : getEml('txtDiemVan'),
    DTB : function(){
        return ( parseFloat(this.diemToan.value)+parseFloat(this.diemVan.value))/2;
    }
}
function xepLoai(dtb){
    if(dtb >0 && dtb<5){
        return spanXepLoai.innerHTML ='yeu';
    } else if(dtb >5 && dtb<8){
        return spanXepLoai.innerHTML ='kha';
    } else {
        return spanXepLoai.innerHTML ='gioi';
    }
}
btn.addEventListener('click', function(){
   
    spanTenSV.innerHTML = student.tenSV.value;
    spanMaSV.innerHTML = student.maSV.value;
    spanLoaiSV.innerHTML = student.hoanCanhSV.value;
    spanDTB.innerHTML = student.DTB();
    xepLoai(student.DTB());
})