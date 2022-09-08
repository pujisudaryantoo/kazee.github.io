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


var sideFilter = document.getElementById('side-filter');
        function openFilter(){
            sideFilter.classList.remove('bottom-[-920px]');
            sideFilter.classList.add('-bottom-[80px]');
        }

        function closeFilter(){
            sideFilter.classList.remove('-bottom-[80px]');
            sideFilter.classList.add('bottom-[-920px]');
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
        