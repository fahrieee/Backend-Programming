// TODO 3: Import data students dari folder data/students.js
const students = require("../data/students.js");

class StudentController {
    index(req, res) {
    // TODO 4: Tampilkan data students
        const data = {
            message: "Menampilkan data student",
            data: students,
        };

        res.json(data);
    }

    store(req, res) {
    // TODO 5: Tambahkan data students
        const { nama } = req.body;
        students.push(nama)

        const data = {
        message: `menambahkan data students ${nama}`,
        data: students,
    };

    res.json(data);
    }

    update(req, res) {
    // TODO 6: Update data students
        const { id } = req.params;
        const { nama } = req.body;

        students[id] = nama;
        const data = {
        message: `mengedit data students id ${id} nama ${nama}`,
        data: students,
    };

    res.json(data);
}

    destroy(req, res) {
    // TODO 7: Hapus data students
        const { id } = req.params;
        students.splice(req, 1);
        const data = {
        message: `menghapus data students ${id}`,
        data: students,
    };

    res.json(data);
}
}

//buat object Student Controller
const object = new StudentController();

//export object
module.exports = object;