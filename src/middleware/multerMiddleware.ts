import multer from "multer";

const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        cb(null,"./public/data")
    },
    filename : function (req,file,cb) {
        // change name if want or keep orignal but orignal name is bad practice
        cb(null,Date.now().toString() + file.originalname)
    }
})

export const upload = multer({ storage })