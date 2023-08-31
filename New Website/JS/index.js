//Home Page Slider
function getImage() {
    let source = "media/sliderImage/image";
    source.concat(currentImage.toString()); //Expected Output: "media/sliderImage/imageX"
    return source;
}

//Possible problem we need to scale the image up and down based on the size of the screen of the user
const image = new Image();
const num_of_images = 2; //TODO make this automatically find how many images there are in the folder minus 1
let currentImage = 0;
image.src = getImage(); //TODO add the image for the slider into sliderImage folder
document.querySelector(".slide_image").appendChild(image)


function prev_slide() {
    if (currentImage == 0) {
        currentImage = num_of_images;
    } else {
        currentImage = currentImage - 1;
    }
}

function next_slide() {
    if (currentImage == num_of_images) {
        currentImage = 0;
    } else {
        currentImage = currentImage + 1;
    }
}