const express = require('express')
const app = express()


const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Math.round((Math.random()*100))+".mp3"
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  

const upload = multer({ storage: storage })



app.post('/beats', upload.single('beat'), function (req, res) {
   console.log(req.file, req.body)
   res.send("success")
});

app.listen(5000, console.log("server running"))
