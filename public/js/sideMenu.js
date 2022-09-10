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
            sideUrutan.classList.remove('bottom-[-350px]');
            sideUrutan.classList.add('bottom-0');
        }

        function closeUrutan(){
            sideUrutan.classList.remove('bottom-0');
            sideUrutan.classList.add('bottom-[-350px]');
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


var sideFilter = document.getElementById('side-filter');
        function openFilter(){
            sideFilter.classList.remove('bottom-[-740px]');
            sideFilter.classList.add('-bottom-0');
        }

        function closeFilter(){
            sideFilter.classList.remove('-bottom-0');
            sideFilter.classList.add('bottom-[-740px]');
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
        



