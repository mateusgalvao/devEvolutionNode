
module.exports = class PaginaErro{

    async getErro(req,res){
        res.status(500).render('paginaErro');
    }
}