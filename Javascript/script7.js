function Postagem (titulo,mensagem,autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    visualizacoes = 0,
    comentarios= [
        {},
    ],
    estaaovivo = false
}

    let postagem = new Postagem('c','d','g');
    console.log(postagem);