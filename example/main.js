var video_btn = document.getElementById("video-btn");
var speech_btn = document.getElementById("speech-btn");

video_btn.onclick = function() {
    Uin({mode: "media", conf: {audio: true, video: true}}).load(function(stream) {
        var video = document.getElementById("vd");
        video.srcObject = stream;
        video.onloadedmetadata = function() {
            video.play();
        };
    });
};

speech_btn.onclick = function() {
    var speech = Uin({mode: "speech", conf: {}});
    speech.load(function(result) {
        alert(result);
    });
    speech.on("speechend", function() {
        console.log("Speech End!");
    });
};
