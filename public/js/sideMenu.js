var sideMenu = document.getElementById('side-menu');
        function openMenu() {
            sideMenu.classList.remove('left-[-750px]');
            sideMenu.classList.add('left-0');
        }

        function closeMenu() {
            sideMenu.classList.remove('left-0');
            sideMenu.classList.add('left-[-750px]');
        };

var sideUrutan = document.getElementById('side-urutan');
        function openUrutan(){
            sideUrutan.classList.remove('bottom-[-1400px]');
            sideUrutan.classList.add('bottom-0');
        }

        function closeUrutan(){
            sideUrutan.classList.remove('bottom-0');
            sideUrutan.classList.add('bottom-[-1400px]');
        }
var sideAksi = document.getElementById('side-aksi');
        function openAksi(){
            sideAksi.classList.remove('bottom-[-1050px]');
            sideAksi.classList.add('bottom-0');
        }

        function closeAksi(){
            sideAksi.classList.remove('bottom-0');
            sideAksi.classList.add('bottom-[-1050px]');
        }
var sideSentimen = document.getElementById('side-sentimen');
        function openSentimen(){
            sideSentimen.classList.remove('bottom-[-1400px]');
            sideSentimen.classList.add('bottom-0');
        }

        function closeSentimen(){
            sideSentimen.classList.remove('bottom-0');
            sideSentimen.classList.add('bottom-[-1400px]');
        }
var sideMin = document.getElementById('side-min');
        function openMin(){
            sideMin.classList.remove('bottom-[-1060px]');
            sideMin.classList.add('bottom-0');
        }

        function closeMin(){
            sideMin.classList.remove('bottom-0');
            sideMin.classList.add('bottom-[-1060px]');
        }
var sideCek = document.getElementById('side-cek');
        function openCek(){
            sideCek.classList.remove('bottom-[-1060px]');
            sideCek.classList.add('bottom-0');
        }

        function closeCek(){
            sideCek.classList.remove('bottom-0');
            sideCek.classList.add('bottom-[-1060px]');
        }
var sideList = document.getElementById('side-list');
        function openList(){
            sideList.classList.remove('bottom-[-1400px]');
            sideList.classList.add('bottom-0');
        }

        function closeList(){
            sideList.classList.remove('bottom-0');
            sideList.classList.add('bottom-[-1400px]');
        }
var sideRentan = document.getElementById('side-rentan');
        function openRentan(){
            sideRentan.classList.remove('bottom-[-1080px]');
            sideRentan.classList.add('bottom-0');
        }

        function closeRentan(){
            sideRentan.classList.remove('bottom-0');
            sideRentan.classList.add('bottom-[-1080px]');
        }
var sideSumber = document.getElementById('side-sumber');
        function openSumber(){
            sideSumber.classList.remove('bottom-[-1040px]');
            sideSumber.classList.add('bottom-0');
        }

        function closeSumber(){
            sideSumber.classList.remove('bottom-0');
            sideSumber.classList.add('bottom-[-1040px]');
        }


var sideFilter = document.getElementById('side-filter');
        function openFilter(){
            sideFilter.classList.remove('bottom-[-1120px]');
            sideFilter.classList.add('-bottom-[80px]');
        }

        function closeFilter(){
            sideFilter.classList.remove('-bottom-[80px]');
            sideFilter.classList.add('bottom-[-1120px]');
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
            sideKeyword.classList.remove('bottom-[-1020px]');
            sideKeyword.classList.add('bottom-0');
        }
        function closeKeyword() {
            sideKeyword.classList.remove('bottom-0');
            sideKeyword.classList.add('bottom-[-1020px]');
        }


var sideKustom = document.getElementById('side-kustom');
        function openKustom(){
            sideKustom.classList.remove('bottom-[-1050px]');
            sideKustom.classList.add('bottom-0');
        }

        function closeKustom(){
            sideKustom.classList.remove('bottom-0');
            sideKustom.classList.add('bottom-[-1050px]');
        }
var sideHapus = document.getElementById('side-hapus');
        function openHapus(){
            sideHapus.classList.remove('bottom-[-1090px]');
            sideHapus.classList.add('bottom-0');
        }

        function closeHapus(){
            sideHapus.classList.remove('bottom-0');
            sideHapus.classList.add('bottom-[-1090px]');
        }
var sideSembunyi = document.getElementById('side-sembunyi');
        function openSembunyi(){
            sideSembunyi.classList.remove('bottom-[-1090px]');
            sideSembunyi.classList.add('bottom-0');
        }

        function closeSembunyi(){
            sideSembunyi.classList.remove('bottom-0');
            sideSembunyi.classList.add('bottom-[-1090px]');
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
            sideEdit.classList.remove('bottom-[-1250px]');
            sideEdit.classList.add('bottom-0');
        }

        function closeEdit(){
            sideEdit.classList.remove('bottom-0');
            sideEdit.classList.add('bottom-[-1250px]');
        }

        function hapusTgl() {
            document.getElementById("tanggal").reset();
        }
        function hapusTeks() {
            document.getElementById("hapusteks").reset();
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
            document.getElementsByName("form").reset();
        }
        function aturUlang1() {
            document.getElementById("form1").reset();
        }
        // delay on link page
        function delay(){
            setTimeout(function(){ 
            window.location="linimasa.html"
         }, 1200);
        }
        function openSemua(){
            setTimeout(function(){ 
            window.location="semuaTopik.html"
         }, 0);
        }
        function openLinimasanotif(){
            setTimeout(function(){ 
            window.location="linimasanotif.html"
         }, 0);
        }
        function openLinimasa(){
            setTimeout(function(){ 
            window.location="linimasanotoast.html"
         }, 0);
        }
        function openLinimasaside(){
            setTimeout(function(){ 
            window.location="linimasaside.html"
         }, 0);
        }
        function openUbahKeyword(){
            setTimeout(function(){ 
            window.location="ubahKeyword.html"
         }, 0);
        }
        function openLinimasaKeyword(){
            setTimeout(function(){ 
            window.location="linimasakeyword.html"
         }, 0);
        }
        function openLinimasaKosong(){
            setTimeout(function(){ 
            window.location="linimasakosong.html"
         }, 0);
        }
        function openBuatTopikback(){
            setTimeout(function(){ 
            window.location="buattopikkembali.html"
         }, 0);
        }
        function openUbahKeyword(){
            setTimeout(function(){ 
            window.location="UbahKeyword.html"
         }, 0);
        }
        function openWelcome(){
            setTimeout(function(){ 
            window.location="welcome.html"
         }, 1500);
        }
        function openWelcome1(){
            setTimeout(function(){ 
            window.location="welcome.html"
         }, 0);
        }
        function openBackKonten(){
            setTimeout(function(){ 
            window.location="overviewkonten.html"
         }, 0);
        }
        function openLokasi(){
            setTimeout(function(){ 
            window.location="overviewlokasibalinot.html"
         }, 0);
        }
        function openBali(){
            setTimeout(function(){ 
            window.location="overviewlokasibali.html"
         }, 0);
        }
        function openBackLokasi(){
          setTimeout(function(){ 
          window.location="overviewlokasi.html"
       }, 0);
      }
        function openHastag(){
            setTimeout(function(){ 
            window.location="overviewhastagpmpnot.html"
         }, 0);
        }
        function openPmp(){
            setTimeout(function(){ 
            window.location="overviewhastagpmp.html"
         }, 0);
        }
        function openBackHastag(){
          setTimeout(function(){ 
          window.location="overviewhashtag.html"
       }, 0);
      }
        function openTurna(){
            setTimeout(function(){ 
            window.location="overviewkeywordnot.html"
         }, 0);
        }
        function openTurnamen(){
            setTimeout(function(){ 
            window.location="overviewkeywordturnamen.html"
         }, 0);
        }
        function openBackKeyword(){
            setTimeout(function(){ 
            window.location="overviewkeyword.html"
         }, 0);
        }
        function openOrganisasi(){
            setTimeout(function(){ 
            window.location="overvieworganisasinot.html"
         }, 0);
        }
        function openAura(){
            setTimeout(function(){ 
            window.location="overvieworganisasiaura.html"
         }, 0);
        }
        function openBackOrganisasi(){
            setTimeout(function(){ 
            window.location="overvieworganisasi.html"
         }, 0);
        }
        function openTokoh(){
            setTimeout(function(){ 
            window.location="overviewtokohnot.html"
         }, 0);
        }
        function openGD(){
            setTimeout(function(){ 
            window.location="overviewotokohgd.html"
         }, 0);
        }
        function openBackTokoh(){
            setTimeout(function(){ 
            window.location="overviewtokoh.html"
         }, 0);
        }
        function openWelcome1(){
            setTimeout(function(){ 
            window.location="welcome.html"
         }, 0);
        }
        function openLinimasaKeyword2(){
            setTimeout(function(){ 
            window.location="linimasakeywordnottoast.html"
         }, 0);
        }
        function openLinimasaKeyword3(){
            setTimeout(function(){ 
            window.location="linimasakeyword2.html"
         }, 0);
        }
        function openLinimasaKeyword4(){
            setTimeout(function(){ 
            window.location="linimasakeyword3.html"
         }, 0);
        }
        function openHilang(){
            setTimeout(function(){ 
            window.location="linimasakontenhilang.html"
         }, 0);
        }
        function openHilang2(){
            setTimeout(function(){ 
            window.location="linimasakontenhilang2.html"
         }, 0);
        }
        function openTampil(){
            setTimeout(function(){ 
            window.location="linimasakontentampilnormal.html"
         }, 0);
        }
        function openTampilblur(){
            setTimeout(function(){ 
            window.location="linimasakontentampil.html"
         }, 0);
        }
        function openTampil2(){
            setTimeout(function(){ 
            window.location="linimasakontentampil2.html"
         }, 0);
        }
        function openTampilnormal(){
            setTimeout(function(){ 
            window.location="linimasakontentampilnormal2.html"
         }, 0);
        }
        function openReview(){
            setTimeout(function(){ 
            window.location="reviewContentKeyword.html"
         }, 0);
        }
        function openReview(){
            setTimeout(function(){ 
            window.location="reviewContentKeyword.html"
         }, 0);
        }
        function openOverviewPubg(){
            setTimeout(function(){ 
            window.location="overviewkontenpubg.html"
         }, 0);
        }
        // tombol loading
        const btn = document.getElementById('loading');
            btn.addEventListener('click', function handleClick() {
            btn.textContent = 'Menyimpan...';
        });

        const berapapun = document.getElementById('berapapun');
            berapapun.addEventListener('click', function handleClick() {
            berapapun.textContent = 'Berapapun...';
        });

        
        
        function gantiMin1() {
            var x = document.getElementById("pilih").value;
            document.getElementById("demo").innerHTML = "" + x;
          }
        function gantiMin2() {
            var x = document.getElementById("pilih2").value;
            document.getElementById("demo").innerHTML = "" + x;
          }
        function gantiMin3() {
            var x = document.getElementById("pilih3").value;
            document.getElementById("demo").innerHTML = "" + x;
          }
        function gantiMin4() {
            var x = document.getElementById("pilih4").value;
            document.getElementById("demo").innerHTML = "" + x;
          }
        function gantiMin5() {
            var x = document.getElementById("pilih5").value;
            document.getElementById("demo").innerHTML = "" + x;
          }
        function gantiMin6() {
            var x = document.getElementById("pilih6").value;
            document.getElementById("demo").innerHTML = "" + x;
          }
        function gantiMin7() {
            var x = document.getElementById("pilih7").value;
            document.getElementById("demo").innerHTML = "" + x;
          }


// ganti cek seiap notifikasi
        function ganti1() {
            var x = document.getElementById("pilih1").value;
            document.getElementById("demo1").innerHTML = "" + x;
          }
        function ganti2() {
            var x = document.getElementById("pilih2").value;
            document.getElementById("demo1").innerHTML = "" + x;
          }
        function ganti3() {
            var x = document.getElementById("pilih3").value;
            document.getElementById("demo1").innerHTML = "" + x;
          }
        function ganti4() {
            var x = document.getElementById("pilih4").value;
            document.getElementById("demo1").innerHTML = "" + x;
          }
        function ganti5() {
            var x = document.getElementById("pilih5").value;
            document.getElementById("demo1").innerHTML = "" + x;
          }
        function ganti6() {
            var x = document.getElementById("pilih6").value;
            document.getElementById("demo1").innerHTML = "" + x;
          }
        function ganti7() {
            var x = document.getElementById("pilih7").value;
            document.getElementById("demo1").innerHTML = "" + x;
          }

          // ubah sentimen
          function ubahSentimen(){
            var x = document.getElementById("ubahsentimen").value;
            document.getElementById("ganti").innerHTML = "" +x;
          }
          function ubahSentimen1(){
            var x = document.getElementById("ubahsentimen1").value;
            document.getElementById("ganti").innerHTML = "" +x;
          }
          function ubahSentimen2(){
            var x = document.getElementById("ubahsentimen2").value;
            document.getElementById("ganti").innerHTML = "" +x;
          }

          function positif() {
            var x = document.getElementById("ubahsentimen").value;
            document.getElementById("pop").innerHTML = "" + x;
            document.getElementById("warna").style.backgroundColor = "#3EC764";
          }
          function negatif() {
            var x = document.getElementById("ubahsentimen1").value;
            document.getElementById("pop").innerHTML = "" + x;
            document.getElementById("warna").style.backgroundColor = "#F92B60";
          }
          function netral() {
            var x = document.getElementById("ubahsentimen2").value;
            document.getElementById("pop").innerHTML = "" + x;
            document.getElementById("warna").style.backgroundColor = "#A2A5B9";
          }
          // // hidden konten
          // function hilang(){
          //   //alert("cheked the button - worked");
          //   document.getElementById('hilang').style.visibility= 'hidden';
          // }

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
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }

          function toast3() {
            var x = document.getElementById("snackbar3");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }
          function toast4() {
            var x = document.getElementById("snackbar4");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }
          function toast5() {
            var x = document.getElementById("snackbar5");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }
          function toast6() {
            var x = document.getElementById("snackbar6");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }
          function toast7() {
            var x = document.getElementById("snackbar7");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }
          function toast8() {
            var x = document.getElementById("snackbar8");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }

          function toastUrutan() {
            var x = document.getElementById("toastUrutan");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }
        //   validation
          
        function validasi(){
            var form = document.getElementById("form");
            var email = document.getElementById("email").value;
            var text = document.getElementById("text");
            var pattern = "[]+@[]+\.[a-z]{2,3}$";

            if(email.match(pattern))
            {
                form.classList.add("valid");
                form.classList.remove("invalid");
                text.innerHTML = "email atau kata sandi salah";
                text.style.color = "#E31F26";
            }
            else
            {
                form.classList.remove("valid");
                form.classList.add("invalid");
                text.innerHTML = "email Anda belum terdaftar";
                text.style.color = "#E31F26";
            }
        }

        function aktif(source) {
            checkboxes = document.getElementsByName('checkboxsumber');
            for(var i=0, n=checkboxes.length;i<n;i++) {
              checkboxes[i].checked = source.checked;
            }
          }

          function aktifSemua(source) {
            checkboxes = document.getElementsByName('all');
            for(var i=0, n=checkboxes.length;i<n;i++) {
              checkboxes[i].checked = source.checked;
            }
          }

          function date() {
            var x = document.getElementById("myDate").value;
            document.getElementById("demo").innerHTML = x;
          }

          const dropdownButton = document.querySelector("#gas");
          const dropdownList = document.querySelector("#gas + div.hidden");

          dropdownButton.addEventListener("click", () => {
            dropdownList.classList.toggle("hidden");
          });


          const hide = document.querySelector("#hilang");
          hide.addEventListener('click', function() {
            hide.style.display = "none";
          });

          var input = document.getElementById("input");
          input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
              event.preventDefault();
              document.getElementById("gaskan").click();
            }
          });

          //shadow behind
          function shadow() {
            document.body.style.background = "rgba(97,97,97,0.69)"
          }

          