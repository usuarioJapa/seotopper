angular
    .module('app')
    .factory('Produto', function() {

    var Produto = {
        salvar: salvar,
        getProdutos: getProdutos,
        produtos: [
        /*  {
              name: "teste",
              title: "titulo da minha pagina",
              description: "descricao da minha pagina",
              author: "autor da minha pagina",
              canonical: "canonicallll",
              robots: "index/follow",
              image: "http://meusite.com.br/image.png",
              fbadmins: 99999,
              type: "website",
              appid: 12321312323,
              ttcard: "summary"
          }*/
        ]
    };
    return Produto;

    function salvar(prod) {
        Produto.produtos.push(prod);
        console.log(JSON.stringify(prod, null, 3)+" --Inserido--> "+JSON.stringify(Produto.produtos, null, 3)+"===============");
    }

    function getProdutos(x) {
        console.log("LOG LISTA ====== "+JSON.stringify(Produto.produtos, null, 3)+" ===============");
        return Produto.produtos;
    }

});
