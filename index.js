const express = require("express")// impor modul express
const app = express() // inisialisasi express
const expressLayout = require("express-ejs-layouts");//import modul express-ejs-layouts
const port = 3000 // port

app.set("views",__dirname + "/views");
app.set('view engine','ejs');

app.use(expressLayout);
app.use(express.static('public'));


//route /
app.get("/prodi",(req, res)=>{
    const programstudi =[
        {NamaProdi: "Sistem Informasi", Fakultas: "FIKR", Singkatan: "SI"},
        {NamaProdi: "Informatika", Fakultas: "FIKR", Singkatan: "IF"},
        {NamaProdi: "Teknik Elektro", Fakultas: "FIKR", Singkatan: "TE"},
        {NamaProdi: "Manajemen Informatika", Fakultas: "FIKR",Singkatan: "MI"},
        {NamaProdi: "Manajemen", Fakultas: "FEB", Singkatan: "MJ"},
        {NamaProdi: "Akuntasi", Fakultas: "FEB", Singkatan: "AK"}
    ];
    res.render('prodi',{title: 'halaman prodi',programstudi,layout:'main'});
});

// route /
app.get("/home", (req, res)=>{
    // res.sendFile(__dirname + "/home.html");

    const berita =[
        {
            judul: "berita 1",
            isi: "isi berita 1"
            
        },
        {
            judul: "berita 2",
            isi: "isi berita 2"
        }
    ];
    res.render('home',{title: 'halaman home',berita, layout:'main'});
});

// route /about
app.get("/about", (req, res)=>{
    // res.sendFile(__dirname + "/about.html");
    res.render('about',{title: 'halaman about', layout:'main'});
});

// route /contact
app.get("/contact", (req, res)=>{
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact',{title: 'halaman contact', layout:'main'});
});

// route /mahasiswa
app.get("/mahasiswa",(req, res)=>{
    res.json({
        "status" : "Success",
        "message" : "Data Mahasiswa",
        "data" : [{npm: 2226240059, nama: "Eric Candra"},{npm: 222624010, nama: "Nabila"}]
    })
});

// app.get("/dosen",(req, res)=>{
//     res.json({
//         "status" : "Success",
//         "message" : "Data dosen",
//         "data" : [{Prodi: "Sistem Informasi",dosen:["Iis","Faris","Dafid"],
//         {Prodi: "Informatika",dosen: "Derry","Siska","Yohanes"]},
        
//     })
// });

// handle route yang tidak terdaftar 
app.use("/",(req, res)=>{
    res.send("<h1>404 not found</h1>");
});

// jalankan server
app.listen(port, ()=>{
    console.log(`server dapat diakses di http://localhost:${port}`);
});

// https://s.id/nurrachmat