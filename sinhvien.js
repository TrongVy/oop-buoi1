function SinhVien(_maSV,_tenSV,_email,_ngaySinh,_matKhau,_khoaHoc,_diemToan,_diemLy,_diemHoa,){

   this.ma = _maSV;
   this.ten =_tenSV;
   this.email =_email;
   this.ngaySinh =_ngaySinh;
   this.matKhau = _matKhau;
   this.khoaHoc =_khoaHoc;
   this.diemToan = _diemToan;
   this.diemHoa =_diemHoa;
   this.diemLy =_diemLy;
   this.diemTB = function(){
      var dtb = (parseFloat(this.diemHoa)+parseFloat(this.diemLy)+parseFloat(this.diemToan) )/3;
      return dtb;
   }
}