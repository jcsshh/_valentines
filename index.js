$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    envelope.on("click", function() {
        window.open('https://www.google.ca', '_blank');
    });

    const shrinkBtn = document.getElementById('shrink');
    const enlargeBtn = document.getElementById('open');

    shrinkBtn.addEventListener('click', () => {
        const currentSize = parseFloat(window.getComputedStyle(shrinkBtn).fontSize);
  
    if (currentSize > 0.1) {
        const newSize = currentSize * 0.9;
        shrinkBtn.style.fontSize = newSize + 'px';
        enlargeBtn.style.fontSize = (parseFloat(window.getComputedStyle(enlargeBtn).fontSize) * 2) + 'px';
    }
});

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        if (envelope.hasClass("open")) {
            envelope.removeClass("open").addClass("close");
        } else {
            envelope.removeClass("close").addClass("open");
        }
    }

})