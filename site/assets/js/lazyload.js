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

/*(function(){

   // controle do throttle
   var jarodei = false;

   // pega todas as imagens num array e pre-calcula seu topo
   var imgs = document.querySelectorAll('img[data-src]:not([src])');
   var cache = [];
   for (var i = 0; i < imgs.length; i++) {
       cache.push({
           topo: imgs[i].getBoundingClientRect().top + pageYOffset,
           elemento: imgs[i]
       });
   }

   // cache da altura da janela
   var alturaJanela = window.innerHeight;

   window.addEventListener('scroll', function scrollListener() {

       // throttle
       if (jarodei) return;
       jarodei = true;
       setTimeout(function () { 
           jarodei = false; 
       }, 100);

       // meu while não toca no DOM, observa apenas variáveis cacheadas e o pageYOffset.
       // só manipulo o DOM quando preciso realmente mexer na imagem.
       while (cache.length && cache[0].topo < pageYOffset + alturaJanela + 200) {
           var img = cache.shift().elemento;
           img.src = img.getAttribute('data-src');
       }

       // removo o onscroll se não precisar mais dele
       if (cache.length == 0) {
           window.removeEventListener('scroll', scrollListener);
       }

   });

})();*/