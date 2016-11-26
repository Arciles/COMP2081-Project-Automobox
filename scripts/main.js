/**
 * Created by esattahaibis on 2016-11-21.
 */

// IIFE for js
(function () {

    $('.carousel').carousel({
        interval: 5000
    });

    let anchors = document.querySelectorAll('#img-section a');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('span.close');
    const modalContent = document.querySelector('.modal-content');

    for(let index = 0; index < anchors.length; index++){
        // loop thru all of the anchors in the DOM
        setEventListener(anchors[index])
    }

    close.addEventListener('click',function (event) {
        //set the display none when the user clicks X
        modal.style.display = 'none';
    });

    // add event listener for esc key press and set the display none for model
    document.addEventListener('keyup', function (event) {
        event = event || window.event;
        if (event.keyCode == 27) {
            modal.style.display = 'none';
        }
    });

    /**
     * Custom function to add event listener to the elements passed in
     * @param element: passed in dom element to set the event listener
     * */
    function setEventListener(element) {
        const _self = element;
        element.addEventListener('click', function (event) {
            //prevent default action to take place
            event.preventDefault();

            // get the img tag and read the src attribute
            let imgElement = _self.children[0];
            let imgSrc = imgElement.getAttribute('src');

            //set the imgSrc to modalt img tag
            const modalImg = modalContent.children[0];
            modalImg.setAttribute('src', imgSrc);

            //capture event to bring modal to display
            modal.style.display = "block";
        });
    }

})();
