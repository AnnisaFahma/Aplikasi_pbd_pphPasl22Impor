##PBD Tgl 7 Mei 2018 [Perubahan aplikasi yang dibuat]
##**Aplikasi PPh Pasal 22 atas IMPOR GANDUM, KEDELAI, dan TEPUNG TERIGU**

       *1. Nama Aplikasi = Aplikasi PPh Pasal 22 atas impor*
       *2. Deskripsi Aplikasi = Aplikasi ini nantinya digunakan untuk melakukkan perhitungan pph pasal 22 atas impor, didalam aplikasi ini nantinya bisa dilakukkan proses penginputan nilai impor dan kemudian nanti bisa menampilkan berapa pph yang harus dibayarkan*
       *3. Pembuat = Annisa Fahma Aziza Yekti (163210007)*

*4. Development Tools =*

        * Sistem Operasi    : Windows 8
	* Bahasa Pemograman : JavaScript
	* Database Server   : MongoDB
	* Web Server        : Express js
	* Text Script Editor: Visual Studio Code
	* Web Browser       : Chrome
*5.Instalasi development Tools =* 	

        * Instalasi  OS : Saya tidak melakukkan instal sendiri karena OS yang saya gunakan sudah ada sejak saya beli PC yang saya gunakan sekarang
	* Instalasi Database Server : Saya menginstal MongoDB yang  versi 6.3
	* Instalasi Text Script Editor : VSC yang saya install berukuran sekitar 1 KB
	* Instalasi Web Browser : saya tidak menginstal Chrome karena sudah ada sejak saya beli PC yg saya gunakan sekarang'''
*6.Lisensi =*

        * lisensi untuk MongoDB adalah (https://www.mongodb.com/community/licensing)
	* lisensi untuk Visual Studio Code adalah (https://code.visualstudio.com/License)
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

## MASALAH DIAPLIKAISNYA
#    Masalahnya masih sama pak seperti yang kemarin, untuk langkah yang bapak sarankan untuk buat 2 file pug [file form, dan file hasil] di folder views itu saya  masih bingung dibagian handler'nya seperti apa yang digunakan untuk memproses dipas bagian file hasil.
     
INI PROGRAM server.js

     const express = require('express')
     const app = express()

     app.set('views', './views')
     app.set('view engine', 'pug')
     app.use(express.static('public'))

     app.get('/',  (req, res) => res.send('hello world'))
   
      app.get('/hey', function (req, res) {
     res.render('index', { title: 'Template', message: 'Hello there!' })
      })
     
     app.get('/yuhu', function (req, res) {
     res.render('index')
     })

     app.get('/nih', function (req, res) {
     res.render('form')
      })
     app.listen(3000, () => console.log('Example app listening on port 3000!'))
   
INI program form.pug

      <HTML>
      <BODY BGCOLOR="FFFCCC">
      <form action = "http://localhost:3000/nih", method = "GET">

      <CENTER><h1><I><FONT COLOR="MAROON"> Tax Calculation Apps.</FONT></I></h1></CENTER>
      <CENTER><h3><I><FONT COLOR="BLACK"> PPh Pasal 22 untuk Impor Gandum, Kedelai, dan Tepung </FONT></I></h3></CENTER>
      <BR>
	
      Masukkan Nilai CIF : 
       <INPUt type="text" id="nFirstEntry" name="nFirstEntry"> <BR>
      <BR>
      Nilai    Tarif Pajak : 
      <INPUt type="text" id="nSecondEntry" name="nSecondEntry"> <BR>
      <BR> 
      Jumlah   Jumlah Pajak Terutang : 
      <INPUt type="text" id="operation" name="operation" > <BR>
      <BR>
      <input type="submit" id="hasil" value="Hitung Pajak" onclick=" multCall()"><BR>

       </form>
      </BODY>
      </HTML>
      
## PERUBAHAN APLIKASI
APLIKASINYA MENJADI APLIKASI PENCATATAN PEMBELIAN TUNAI
TERDAPAT 2 FILE YAITU server.js  & index.html

INI PROGRAM server.js

      var express = require('express');
     var path = require('path');
     var bodyParser = require('body-parser');
     var mongodb = require('mongodb');

     var dbConn = mongodb.MongoClient.connect('mongodb://localhost/pembelian');

     var app = express();

     app.use(bodyParser.urlencoded({ extended: false }));
     app.use(express.static(path.resolve(__dirname, 'public')));

    app.post('/post-feedback', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
        db.pembelian('feedback').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

     app.use(express.static(path.resolve(__dirname, 'public')));

     app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
     
INI program index.html

     <!doctype html>
     <html lang="en">
        <BODY BGCOLOR="FFFCCC">
     <head>
    <meta charset="UTF-8">
    <title>Aplikasi Kece</title>
    <CENTER><h1><I><FONT COLOR="MAROON"> Purchase Recording Apps.</FONT></I></h1></CENTER>
    <CENTER><h3><I><FONT COLOR="BLACK"> Pencatatan Pembelian Pada Perusahaan Jasa </FONT></I></h3></CENTER>
    <BR>
    </head>
    <body>
    <h3>Isikan Data yang dibutuhkan dibawah ini :</h3>
    <form method="POST" action="/post-feedback">
        <label> Nama Akun : <input type="text" name="client-name" required></label> <BR>
        <br>
        <label> Debet : <input type="text" name="client-debet" required></label> <BR>
        <br>
        <label> Kredit : <input type="text" name="client-kredit" required></label> <BR>
        <br>
        <label> Keterangan : <br><textarea name="keterangan"></textarea></label> <BR>
        <input type="submit" value="Submit">
    </form>
    
       </body>
     </html>



