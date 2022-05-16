/**
 * Module Product additional variable images Plugin
 */
;
(function(document,Themify){
    'use strict';
    Themify.on('themify_theme_additional_variations_images_init',function(items,main,thumbs){
        const mainSlider=document.createDocumentFragment(),
			thumbSlider=document.createDocumentFragment();
		for(let i=0,len=items.length;i<len;++i){
			  let thumbWrap=document.createElement('li'),
			  mainWrap=document.createElement('div'),
			  thumbImg=document.createElement('img'),
			  mainImg=items[i].getElementsByTagName('img')[0];
			  thumbWrap.className='tf_swiper-slide post-image';
			  mainWrap.className='tf_swiper-slide woocommerce-main-image woocommerce-product-gallery__image zoom post-image';
			  mainWrap.setAttribute('data-zoom-image',mainImg.getAttribute('data-large_image'));
			  mainWrap.appendChild(mainImg);
			  thumbImg.src=items[i].getAttribute('data-thumb');
			  thumbImg.width=thumbImg.height='100';
			  thumbWrap.appendChild(thumbImg);
			  thumbSlider.appendChild(thumbWrap);
			  mainSlider.appendChild(mainWrap);
		}
		main.firstChild.innerHTML='';
		main.firstChild.appendChild(mainSlider);
		  
		thumbs.firstChild.innerHTML='';
		thumbs.firstChild.appendChild(thumbSlider);
		Themify.trigger('themify_theme_product_gallery',[main.parentNode]);
    });
})(document,Themify);