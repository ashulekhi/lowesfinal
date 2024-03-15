var MobileService = require("../services/mobile.service")

exports.addMobile = async function(req,h){
   try{
    await MobileService.addMobile(req.body)
    return {
        message:"New Mobile Added"
    }
   }
   catch(e){
    h.response.code(500)
   }

}


exports.getAllMobiles = async (req, res) => {
    try {
        const result = await MobileService.findAllMobiles();
        res.send({
            data:result
        })
    } catch (error) {
        res.status(500).send()
    }
};