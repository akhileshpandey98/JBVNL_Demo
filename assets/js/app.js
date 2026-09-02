AOS.init({duration:750,once:true,offset:60,easing:'ease-out-cubic'});
$(function(){
  $('.hero-slider').owlCarousel({
    items:1,loop:true,autoplay:true, autoplayHoverPause: true, autoplayTimeout:5000,smartSpeed:900,
    nav:true,dots:true,navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>']
  });
});
function faq(btn){btn.parentElement.classList.toggle('open');const i=btn.querySelector('i');i.classList.toggle('fa-plus');i.classList.toggle('fa-minus')}
function filterNotice(type,btn){
  document.querySelectorAll('.notice-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
  document.querySelectorAll('.notice-item').forEach(x=>x.style.display=(type==='all'||x.dataset.type===type)?'flex':'none');
}
function fontSize(n){document.body.style.fontSize=(n===1?'17px':n===-1?'13px':'15px')}
function toggleHindi(){alert('Hindi interface can be connected to the JBVNL Hindi content/routes.')}
function searchSite(){
  const q=document.getElementById('siteSearch').value.trim();
  if(!q){document.getElementById('siteSearch').focus();return}
  alert('Demo search: "'+q+'"\\nConnect this field to your Laravel/API search endpoint.');
}


// Notice, Circulars & Tenders

document.addEventListener("DOMContentLoaded", function () {

    const scrollBox = document.querySelector(".notice-scroll");
    const noticeList = document.getElementById("noticeList");

    if (!scrollBox || !noticeList) return;

    let scrollSpeed = 0.6;
    let isPaused = false;

    function autoScroll() {

        if (!isPaused) {

            scrollBox.scrollTop += scrollSpeed;

            /*
             * जब नीचे पहुंच जाए तो
             * वापस ऊपर से smoothly शुरू होगा
             */
            if (
                scrollBox.scrollTop + scrollBox.clientHeight
                >= scrollBox.scrollHeight - 1
            ) {

                scrollBox.scrollTop = 0;

            }
        }

        requestAnimationFrame(autoScroll);
    }

    /* Start scrolling */
    autoScroll();


    /* Mouse hover पर pause */
    scrollBox.addEventListener("mouseenter", function () {
        isPaused = true;
    });

    /* Mouse बाहर जाए तो फिर शुरू */
    scrollBox.addEventListener("mouseleave", function () {
        isPaused = false;
    });

});



// Tab filtering

function filterNotice(type, button) {

    /* Active tab */
    document.querySelectorAll(".notice-tab").forEach(function (tab) {
        tab.classList.remove("active");
    });

    button.classList.add("active");


    /* Notices */
    const notices = document.querySelectorAll(".notice-item");

    notices.forEach(function (notice) {

        const noticeType = notice.getAttribute("data-type");

        if (type === "all" || noticeType === type) {

            notice.style.display = "flex";

        } else {

            notice.style.display = "none";

        }

    });


    /* Scroll वापस ऊपर */
    const scrollBox = document.querySelector(".notice-scroll");

    if (scrollBox) {
        scrollBox.scrollTop = 0;
    }
}






document.addEventListener("DOMContentLoaded", function () {

    const quickLinksBtn = document.getElementById("quickLinksBtn");
    const quickLinksPanel = document.getElementById("quickLinksPanel");
    const quickLinksClose = document.getElementById("quickLinksClose");
    const quickLinksOverlay = document.getElementById("quickLinksOverlay");


    /* OPEN */
    quickLinksBtn.addEventListener("click", function () {

        quickLinksPanel.classList.add("active");
        quickLinksOverlay.classList.add("active");

        /* Stop blinking when opened */
        quickLinksBtn.style.animation = "none";

    });


    /* CLOSE */
    function closeQuickLinks() {

        quickLinksPanel.classList.remove("active");
        quickLinksOverlay.classList.remove("active");

        /* Start blinking again */
        quickLinksBtn.style.animation =
            "quickLinksBlink 1.4s infinite";
    }


    quickLinksClose.addEventListener("click", closeQuickLinks);


    /* CLICK OUTSIDE */
    quickLinksOverlay.addEventListener("click", closeQuickLinks);


    /* ESC KEY */
    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {
            closeQuickLinks();
        }

    });

});




