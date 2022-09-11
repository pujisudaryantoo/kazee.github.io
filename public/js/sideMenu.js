var sideMenu = document.getElementById('side-menu');
        function openMenu() {
            sideMenu.classList.remove('left-[-350px]');
            sideMenu.classList.add('left-0');
        }

        function closeMenu() {
            sideMenu.classList.remove('left-0');
            sideMenu.classList.add('left-[-350px]');
        };

var sideUrutan = document.getElementById('side-urutan');
        function openUrutan(){
            sideUrutan.classList.remove('bottom-[-300px]');
            sideUrutan.classList.add('bottom-0');
        }

        function closeUrutan(){
            sideUrutan.classList.remove('bottom-0');
            sideUrutan.classList.add('bottom-[-300px]');
        }
var sideMin = document.getElementById('side-min');
        function openMin(){
            sideMin.classList.remove('bottom-[-560px]');
            sideMin.classList.add('bottom-0');
        }

        function closeMin(){
            sideMin.classList.remove('bottom-0');
            sideMin.classList.add('bottom-[-560px]');
        }
var sideCek = document.getElementById('side-cek');
        function openCek(){
            sideCek.classList.remove('bottom-[-560px]');
            sideCek.classList.add('bottom-0');
        }

        function closeCek(){
            sideCek.classList.remove('bottom-0');
            sideCek.classList.add('bottom-[-560px]');
        }
var sideList = document.getElementById('side-list');
        function openList(){
            sideList.classList.remove('bottom-[-350px]');
            sideList.classList.add('bottom-0');
        }

        function closeList(){
            sideList.classList.remove('bottom-0');
            sideList.classList.add('bottom-[-350px]');
        }
var sideRentan = document.getElementById('side-rentan');
        function openRentan(){
            sideRentan.classList.remove('bottom-[-380px]');
            sideRentan.classList.add('bottom-0');
        }

        function closeRentan(){
            sideRentan.classList.remove('bottom-0');
            sideRentan.classList.add('bottom-[-380px]');
        }
var sideSumber = document.getElementById('side-sumber');
        function openSumber(){
            sideSumber.classList.remove('bottom-[-740px]');
            sideSumber.classList.add('bottom-0');
        }

        function closeSumber(){
            sideSumber.classList.remove('bottom-0');
            sideSumber.classList.add('bottom-[-740px]');
        }


var sideFilter = document.getElementById('side-filter');
        function openFilter(){
            sideFilter.classList.remove('bottom-[-920px]');
            sideFilter.classList.add('-bottom-[80px]');
        }

        function closeFilter(){
            sideFilter.classList.remove('-bottom-[80px]');
            sideFilter.classList.add('bottom-[-920px]');
        }
var sideNotifikasi = document.getElementById('side-notifikasi');
        function openNotifikasi(){
            sideNotifikasi.classList.remove('bottom-[-920px]');
            sideNotifikasi.classList.add('bottom-0');
        }

        function closeNotifikasi(){
            sideNotifikasi.classList.remove('bottom-0');
            sideNotifikasi.classList.add('bottom-[-920px]');
        }

var sideKeyword = document.getElementById('side-keyword');
        function openKeyword() {
            sideKeyword.classList.remove('bottom-[-420px]');
            sideKeyword.classList.add('bottom-0');
        }
        function closeKeyword() {
            sideKeyword.classList.remove('bottom-0');
            sideKeyword.classList.add('bottom-[-420px]');
        }


var sideKustom = document.getElementById('side-kustom');
        function openKustom(){
            sideKustom.classList.remove('bottom-[-450px]');
            sideKustom.classList.add('bottom-0');
        }

        function closeKustom(){
            sideKustom.classList.remove('bottom-0');
            sideKustom.classList.add('bottom-[-450px]');
        }
var sideHapus = document.getElementById('side-hapus');
        function openHapus(){
            sideHapus.classList.remove('bottom-[-490px]');
            sideHapus.classList.add('bottom-0');
        }

        function closeHapus(){
            sideHapus.classList.remove('bottom-0');
            sideHapus.classList.add('bottom-[-490px]');
        }
var sideSimpan = document.getElementById('side-simpan');
        function openSimpan(){
            sideSimpan.classList.remove('bottom-[-450px]');
            sideSimpan.classList.add('bottom-0');
        }

        function closeSimpan(){
            sideSimpan.classList.remove('bottom-0');
            sideSimpan.classList.add('bottom-[-450px]');
        }
var sideEdit = document.getElementById('side-edit');
        function openEdit(){
            sideEdit.classList.remove('bottom-[-450px]');
            sideEdit.classList.add('bottom-0');
        }

        function closeEdit(){
            sideEdit.classList.remove('bottom-0');
            sideEdit.classList.add('bottom-[-450px]');
        }

        function hapusTgl() {
            document.getElementById("tanggal").reset();
        }
        function hapusTgl1() {
            document.getElementById("tanggal1").reset();
        }
        function hapusJam() {
            document.getElementById("jam").reset();
        }
        function hapusJam1() {
            document.getElementById("jam1").reset();
        }
        function aturUlang() {
            document.getElementById("form").reset();
        }
        function aturUlang1() {
            document.getElementById("form1").reset();
        }
        // delay on link page
        function delay(){
            setTimeout(function(){ 
            window.location="linimasa.html"
         }, 1000);
        }
        function openSemua(){
            setTimeout(function(){ 
            window.location="semuaTopik.html"
         }, 0);
        }
        function openLinimasa(){
            setTimeout(function(){ 
            window.location="linimasa.html"
         }, 0);
        }
        function openUbahKeyword(){
            setTimeout(function(){ 
            window.location="ubahKeyword.html"
         }, 0);
        }
        function openWelcome(){
            setTimeout(function(){ 
            window.location="welcome.html"
         }, 1500);
        }
        // tombol loading
        const btn = document.getElementById('loading');
            btn.addEventListener('click', function handleClick() {
            btn.textContent = 'Menyimpan...';
        });


        //hapus semua checkbox
        function uncek() {
            var inputs = document.querySelectorAll('.check');
            for(var i = 0; i < inputs.length; i++) {
              inputs[i].checked = false;
            }
          }
          
          window.onload = function() {
            window.addEventListener('load', uncek, false);
          }

        //   toast berhasil
        function toast() {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }

          function toast2() {
            var x = document.getElementById("snackbar2");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
          }

          



