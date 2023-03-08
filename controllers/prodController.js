const Prod = require("../models/product");

var Category = Prod.category;

const cateList = async (req, res) => {
    let data = await Prod.category.find();
    if(data){
        res.status(200).json({ status: 200, message: 'Success', result : data });
    }
    else{
        res.status(400).json({ status: 400, message: 'Somthing went wrong'});
    }
}

const cateAdd = async (req, res) => {
    console.log(req.body);
    if (!req.body.name || !req.body.slug) {
        res.status(400).json({ status: 400, message: 'Please Enter the data' });
    }
    else {
        let categoryCheck = await Category.findOne({ "slug": req.body.slug });
        console.log(categoryCheck)

        if (categoryCheck) {
            res.status(400).json({ status: 400, message: 'Data Already exist' });
        }
        else {
            let { name, slug } = req.body;
            let data = await Category({ name, slug });
            let response = await data.save();
            res.status(200).json({ status: 200, message: 'Add Successfully', result : response });
        }
    }
}

const cateDelete = async (req, res) => {
    Category.findByIdAndDelete(req.params.id, (err, Category) => {
        if(err){
            res.status(400).json({ status: 400, message: 'Somthing Wrong', data:err });
        }
        else{
            res.status(200).json({ status: 200, message: 'Deleted Successfully' });
        }
    });
}

module.exports = {
    cateAdd, cateList, cateDelete
}