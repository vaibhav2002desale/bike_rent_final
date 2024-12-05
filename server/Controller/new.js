const shoeslist = require("..//modules/shoes.json");

 exports.getallshoes=(req,res)=>{
    res.status(200).json({list:shoeslist});
 };
 exports.getshoesbyname = (req, res) => {
    const shoesname = req.params.category;
    const shoes = shoeslist.find(rest => rest.category == shoesname);

    if (shoes) {
        res.status(200).json({ shoes: shoes });
    } else {
        res.status(404).json({
            message: "Please provide a valid shoes Category"
        });
    }
};