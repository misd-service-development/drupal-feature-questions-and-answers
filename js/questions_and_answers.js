(function ($) {

    Drupal.behaviors.cambridgeQuestionsAndAnswers = {
        attach: function (context, settings) {
            $('.campl-questions-question', context).click(function () {
                $(this).next('.campl-questions-answer').toggleClass('campl-questions-answer-revealed');
                $(window).trigger('resize'); // force column heights to be recalculated
            });
        }
    };

})(jQuery);
