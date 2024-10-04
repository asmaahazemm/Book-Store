function Slider(){
    let imageCount = document.querySelectorAll("img");
    let image = document.querySelector("ul");

    if (imageCount.length === 0){
        imageCount = document.querySelectorAll("img");
        image.style.transform =`translateX(0px)`;
        return;
    }

    image.style.transform = `translate(-${currentSlider * 550}px)`;

    //remove the active class from all dots
    // let do

    return(
        <>
            <div className="slider">
                <ul>
                    <li><img src="./img/home-book-1.png"/></li>
                    <li><img src="./img/home-book-2.png"/></li>
                    <li><img src="./img/home-book-3.png"/></li>
                    <li><img src="./img/home-book-4.png"/></li>
                </ul>
            </div>
            <div className="pagination-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </>
    );
}