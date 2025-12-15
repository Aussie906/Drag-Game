$(function () {
    console.log("document is ready!");

    //
    // 1. MAKE DOGE DRAGGABLE
    //
    $("#doge-meme-pic").draggable({
        containment: "#containment-wrapper",
        scroll: false,
        drag: function () {
            calculateWow();   // live scoring as user drags
        },
        stop: function () {
            calculateWow();   // final update
        }
    });

    //
    // 2. DOGE SCORE CALCULATION
    //
    function calculateWow() {
        var pos = $("#doge-meme-pic").position();

        // score value based on doge position
        var score = Math.floor(pos.top + pos.left);

        // update text output box (legacy behavior)
        if (score < 500) {
            $("#wow-output").html('<h2>not very nyan (' + score + ')</h2>');
        } else {
            $("#wow-output").html('<h2>much much nyan (' + score + ')!!</h2>');
        }



        //
        // ---- NEW GAME UI UPDATES ----
        //

        // Score text
        $("#score-display").text(score);

        // Progress bar (max 1000)
        var percent = Math.min((score / 1000) * 100, 100);
        $("#score-progress").css("width", percent + "%");

        // Status message
        if (score < 0) {
            $("#status-message").text("WHY DID YOU CREATE ME THIS WAY?!");
        }
        else if (score < 300) {
            $("#status-message").text("Poptart Cat is buffering...");
        } else if (score < 600) {
            $("#status-message").text("Woah, slow down there Tex.");
        } else if (score < 900) {
            $("#status-message").text("Very Nyan of you!");
        } else {
            $("#status-message").text("LOTS OF NYAN! TOO MUCH! 💥");
        }
    }
});
