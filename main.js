function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/s9yNeITOK/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        document.getElementById("result_label") = 'I can hear: '+results[0].label;
        document.getElementById("confidence_label") = 'Accuracy: '+(results[0].confidence*100).toFixed(2)+"%";

        img_1 = document.getElementById('dog.png');
        img_2 = document.getElementById('cat.png');
        img_3 = document.getElementById('bird.png');

        if (results[0].label == "Dog") {
            img_1.src = "dog.gif";
            img_2.src = "cat.png";
            img_3.src = "bird.png";
        } else if (results[0].label == "Cat") {
            img_1.src = "dog.png";
            img_2.src = "cat.gif";
            img_3.src = "bird.png";
        } else {
            img_1.src = "dog.png";
            img_2.src = "cat.png";
            img_3.src = "bird.gif";
        }

    }
}

