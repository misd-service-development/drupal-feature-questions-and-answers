jQuery(function ($) {

    var $questions = $('.field-collection-item-field-questions-and-answers > .content > h2');

    $questions.each(function () {
        var $question = $(this);
        var $answer = $question.next('.field-name-field-answer');

        $question.addClass('campl-questions-question');
        $answer.addClass('campl-questions-answer');

        $question.prepend('<span class="campl-questions-indicator">Q.</span> ');

        $question.click(function () {
            $answer.toggleClass('campl-questions-answer-revealed');
            $(window).trigger('resize'); // force column heights to be recalculated
        })
    });

});
