const Category = require('./model');

module.exports={
    index: async(req, res) => {
        try {
            const category = await Category.find();

            res.render("admin/category/view_category.ejs", {
                category: category
            });
        } catch(err) {
            console.log(err);
        }
    },

    viewCreate: async(req, res) => {
        try {
            res.render("admin/category/create");
        } catch(err) {
            console.log(err);
        }
    },

    actionCreate: async(req, res) => {
        try {
            const { name } = req.body;

            const category = await Category({ name });
            await category.save();

            res.redirect('/category');
        } catch(err) {
            console.log(err);
        }
    },

    viewEdit: async(req, res) => {
        try {
            const { id } = req.params;
            const category = Category.findOne({_id: id});

            res.render('admin/category/edit', {
                category: category
            })
        } catch(err) {
            console.log(err);
        }
    }
}