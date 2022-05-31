var jaRodei = false; //controla se eu já executei o código ou não

window.onscroll = function() { //evento do usuário scrollar a página
   //throttle (limitando a execução a 1 vez a cada 100ms)
   if(jaRodei) return;
   jaRodei = true;
   setTimeout(function() {
        jaRodei = false;
   }, 100);

    var imgs = document.querySelectorAll('img[data-src]'); //carregar a imagem logo antes do momento em que ela fica visível
    for(var i = 0; i < imgs.length; i++) {
       if(imgs[i].getBoundingClientRect().top < window.innerHeight + 200) { //método getBound auxilia para sabermos se a imagem está visível, selecionamos o topo com .top e o innerHeight faz com saibamos o tamanho da janela
        imgs[i].src = imgs[i].getAttribute('data-src') //carregando as imagens a partir de quando a altura da página for 362px
       };
    }
}