const fs = require('fs');

const products = JSON.parse(fs.readFileSync(`__dirname/../src/db/products/products.json`));

exports.getAllProducts = (req, res) => {
    res.status(200).json({
        status: 'getAllProducts',
        results: products.length,
        data: {
            products
        }
    });
};

exports.checkId = (req, res, next, val) => {
    if (!products.find(el => el.id * 1 === val * 1)) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
};

exports.getProduct = (req, res) => {
    const product = products.filter(el => el.id * 1 === req.params.id * 1);

    res.status(200).json({
        status: 'success',
        data: {
            product
        }
    });
};

exports.getFewProducts = (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: 'success'
        // data: {
        //     product
        // }
    });
};
