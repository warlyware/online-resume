//###############
//#  /hello.js  #
//###############

 var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
    $.fn.modal.Constructor.prototype.setScrollbar = function () {
        oldSSB.apply(this);
        if (this.scrollbarWidth) $('.navbar-fixed-top').css('padding-right', this.scrollbarWidth);
    }

    var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
    $.fn.modal.Constructor.prototype.resetScrollbar = function () {
        oldRSB.apply(this);
        $('.navbar-fixed-top').css('padding-right', '');
    }


console.log("Thanks for looking under the hood!  Please visit my GitHub page if you want to see more: https://github.com/warlyware");