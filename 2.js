var dssv = [];

function getElm(id){
    return document.getElementById(id).value;
}
//them sinh vien
function themSV(){
    dssv = [];
    var tenSV = getElm('txtTenSV');
    var maSV = getElm('txtMaSV');
    var email = getElm('txtEmail');
    var ngaySinh =getElm('txtNgaySinh');
    var pass = getElm('txtPass');
    var khoaHoc = getElm('khSV');
    var diemToan = getElm('txtDiemToan');
    var diemLy = getElm('txtDiemLy');
    var diemHoa = getElm('txtDiemHoa');
    var sinhvien =new SinhVien(tenSV,maSV,email,ngaySinh,pass,khoaHoc,diemHoa,diemLy,diemToan);
    dssv.push(sinhvien);
    inSV();
    console.log(dssv);
}
function inSV(){
    for(var i =0; i<dssv.length;i++){
        //tao hang
        var tagTR = document.createElement('tr');
        //tao cot
        var tagTdTen = document.createElement('td');
        var tagTdMaSV = document.createElement('td');
        var tagEmail =document.createElement('td'); 
        var tagNgaySinh = document.createElement('td');     
        var tagTdKhoaHoc = document.createElement('td');     
        var tagTdDTB = document.createElement('td');
        //in ra man hinh
        tagTdTen.innerHTML = dssv[i].ten;
        tagTdMaSV.innerHTML = dssv[i].ma;
        tagEmail.innerHTML = dssv[i].email;  
        tagNgaySinh.innerHTML =dssv[i].ngaySinh;   
        tagTdKhoaHoc.innerHTML = dssv[i].khoaHoc;      
        tagTdDTB.innerHTML = dssv[i].diemTB();
        // them tr vao td
        tagTR.appendChild(tagTdTen);
        tagTR.appendChild(tagTdMaSV);
        tagTR.appendChild(tagEmail);
        tagTR.appendChild(tagNgaySinh);
        tagTR.appendChild(tagTdKhoaHoc);
        tagTR.appendChild(tagTdDTB);
        document.getElementById('tbodySinhVien').appendChild(tagTR);
    }
}
function reset(){
    document.getElementById('formQLSV').reset();
}