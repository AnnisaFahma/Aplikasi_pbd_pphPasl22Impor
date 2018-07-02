##PBD Tgl 7 Mei 2018 [Perubahan aplikasi yang dibuat]
##**Aplikasi PPh Pasal 22 atas IMPOR GANDUM, KEDELAI, dan TEPUNG TERIGU**

       *1. Nama Aplikasi = Aplikasi PPh Pasal 22 atas impor*
       *2. Deskripsi Aplikasi = Aplikasi ini nantinya digunakan untuk melakukkan perhitungan pph pasal 22 atas impor, didalam aplikasi ini nantinya bisa dilakukkan proses penginputan nilai impor dan kemudian nanti bisa menampilkan berapa pph yang harus dibayarkan*
       *3. Pembuat = Annisa Fahma Aziza Yekti (163210007)*

*4. Development Tools =*

        * Sistem Operasi    : Windows 8
	* Bahasa Pemograman : JavaScript
	* Database Server   : MongoDB
	* Web Server        : Apache
	* Text Script Editor: Visual Studio Code
	* Web Browser       : Chrome'''
*5.Instalasi development Tools =* 	

        * Instalasi  OS : Saya tidak melakukkan instal sendiri karena OS yang saya gunakan sudah ada sejak saya beli PC yang saya gunakan sekarang
	* Instalasi Database Server : Saya menginstal MongoDB yang  versi 6.3
	* Instalasi Text Script Editor : VSC yang saya install berukuran sekitar 1 KB
	* Instalasi Web Browser : saya tidak menginstal Chrome karena sudah ada sejak saya beli PC yg saya gunakan sekarang'''
*6.Lisensi =*

        * lisensi untuk MongoDB adalah (https://www.mongodb.com/community/licensing)
	* lisensi untuk Apache  adalah (http://www.apache.org/licenses/)
	* lisensi untuk Visual Studio Code adalah (https://code.visualstudio.com/License)'''
## Perkembangan hari ini 
1. Membuat Routing yang akan dilakukkan pada aplikasi, Adapun routingnya adalah sebagai berikut :

          app.get('/', (req, res) => res.send('Hello World!'))
          app.get('/menampilkanTemplate', function (req, res) {
          res.render('index', { title: 'Hey', message: 'Hello there!' })
          app.get(/inputCIA/, function (req, res) {
          res.send('/inputCIA/')
          })
          app.get(/TampilPPH/, function (req, res) {
          res.send('/TampilPPH/')
          })

## Perkembangan hari ini tgl 14 Mei 2018
         saya sudah membuat routing untuk template dan form
## perkembangan  hari ini tgl 28 Mei 2018
1.Pada hari ini saya telah membuat form untuk aplikasinya adapun scriptnya seperti dibawah ini:

         html
	 head
	 <h2>Aplikasi PPh Pasal 22 atas Impor Gandum, Kedelai, Dan Tepung<h2/>
            title Aplikasi PPh Pasal 22 atas Impor Gandum, Kedelai, Dan Tepung
	 body
	 form(action = "/nih", method = "POST")
	 div
            label(for = "Nama Perusahaan : ") Nama Perusahaan :
            input(name = "Nama Perusahaan" value = "")
         br
         div
            label(for = "Nilai Cost :")             Nilai Cost :
            input(name = "Nilai Cost" value = "")
         br
         div
            label(for = "Nilai Insurance :")    Nilai Insurance :
            input(name = "Nilai Insurance" value = "")
         br
         div
            label(for = "Nilai Freight :")      Nilai Freight :
            input(name = "Nilai Freight" value = "")
         br
         div
         button(type = "submit")                     CEK PPN :
          br
          br

         div
            label(for = "Tarif PPN :")          Tarif PPN :
            input(name = "Tarif PPN" value = "")
	  
 2.Selanjutnya saya juga membuat ststic files untuk direktori *public*, dengan menambahkan query seperti dibawah ini pada file server.js : 
   
      app.use(express.static('public'))
 setelah dilakukkan percobaan untuk pemanggilan file yang ada didirektori *public*, dengan link seperti dibawah ini :
 
      http://localhost:3000/images/f1.jpg [hanya salah satu contoh file yang saya panggil] , hasil yang keluar adalah filenya tertampil di browser
  
## PERKEMBANGAN HARI INI TANGGAL 4 JUNI 2018 
1. Hari ini saya mencoba mengkoneksikan dengan database dengan menggunakan query sbg berikut :

           mongod --storageEngine=mmapv1 --dbpath C:\MongoDB\data
	   
  Setelah berhasil konek dengan server database, kemudian saya membuat tabel di dalam database yang nantinya akan saya gunkaan sebagai     tempat penyimpanan data pada aplikasi saya 	  
  
           Database yang saya buat bernama "pph" 
           didalam database pph saya sudah membuat satu collection "tarif" dimana collection ini nanatinya akan digunakan untuk menyimpan tarif dari pph pasal 22 atas Impor gandum, kedelai dan tepung terigu
