var galleryTop_home = new Swiper('.gallery-top_home', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
var galleryThumbs_home = new Swiper('.gallery-thumbs_home', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
galleryTop_home.params.control = galleryThumbs_home;
galleryThumbs_home.params.control = galleryTop_home;


var galleryTop_custom = new Swiper('.gallery-top_custom', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
var galleryThumbs_custom = new Swiper('.gallery-thumbs_custom', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
galleryTop_custom.params.control = galleryThumbs_custom;
galleryThumbs_custom.params.control = galleryTop_custom;
    

var galleryTop2x4 = new Swiper('.gallery-top2x4', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
var galleryThumbs2x4 = new Swiper('.gallery-thumbs2x4', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
galleryTop2x4.params.control = galleryThumbs2x4;
galleryThumbs2x4.params.control = galleryTop2x4;


var galleryTop2x6 = new Swiper('.gallery-top2x6', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
var galleryThumbs2x6 = new Swiper('.gallery-thumbs2x6', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true
});
galleryTop2x6.params.control = galleryThumbs2x6;
galleryThumbs2x6.params.control = galleryTop2x6;