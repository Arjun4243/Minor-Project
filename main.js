function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = document.getElementById("user").value;
    if (email == "himanshu@gmail.com", "arjun@gmail.com", "ritik@gmail.com" && password == "Himanshu123", "Arjun123", "Ritik123" && user == "Heman"/*,"Allu","Tiktik"*/) {
        window.location.assign("index.html");
        alert("login successfully");
    }
    else {
        alert("Invalid Information");
        return;
    }
}
function n() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = document.getElementById("user").value;
    if (email == "himanshu@gmail.com", "arjun@gmail.com", "ritik@gmail.com" && password == "Himanshu123", "Arjun123", "Ritik123" && user == "Heman"/*,"Allu","Tiktik"*/) {
        window.location.assign("login.html");
        alert("login successfully");
    }
    else {
        alert("Invalid Information");
        return;
    }
}
function registration() {
    // Hide the existing #login element
    document.querySelector('#login').style.display = 'none';
    document.querySelector('#registration').style.display = 'block';
}

function login() {
    document.querySelector('#registration').style.display = 'none'
    document.querySelector('#login').style.display = 'block'
}

function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = document.getElementById("user").value;
    if (email == "himanshu@gmail.com", "arjun@gmail.com", "ritik@gmail.com" && password == "Himanshu123", "Arjun123", "Ritik123" && user == "Heman"/*,"Allu","Tiktik"*/) {
        window.location.assign("demo.html");
        alert("login successfully");
    }
    else {
        alert("Invalid Information");
        return;
    }
}
function n() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = document.getElementById("user").value;
    if (email == "himanshu@gmail.com", "arjun@gmail.com", "ritik@gmail.com" && password == "Himanshu123", "Arjun123", "Ritik123" && user == "Heman"/*,"Allu","Tiktik"*/) {
        window.location.assign("login.html");
        alert("login successfully");
    }
    else {
        alert("Invalid Information");
        return;
    }
}
function registration() {
    // Hide the existing #login element
    document.querySelector('#login').style.display = 'none';
    document.querySelector('#registration').style.display = 'block';
}

function login() {
    document.querySelector('#registration').style.display = 'none'
    document.querySelector('#login').style.display = 'block'
}

//Sidebar
const menuItems = document.querySelectorAll('.menu-item');
//Messages
const messagesnotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})
//Messages
//search chats
const searchMessage = () => {
    const val = messageSearch.Value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}
//search chat
messageSearch.addEventListener('keyup', searchMessage);
//remove active class from all menu items
messagesnotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesnotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 5000);
})
//Theme/Display customization
//open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
//closes modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
//close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

//fonts
//remove active class from spans or front size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})
// change primary colors
//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//Theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
//Changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {
    //add active class
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    //add active class
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    //add active class
    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})


//create post dynamice




function call_post() {
    var create_post = document.querySelector(".create_post_div");
    create_post.style.display = "block";
}

function create_post_close(){
    var create_post = document.querySelector(".create_post_div");
    create_post.style.display = "none";
}
function openCamera() {
    const video = document.getElementById('cameraFeed');

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
                video.style.display = "block"; // Make sure the video element is visible
                video.play();

                const close = document.getElementById('close_camera_button');
                close.style.display = "block";
            })
            .catch(function (err) {
                console.log(err);
            });
    } else {
        alert("You didn't allow the camera");
    }
}

function closeCamera() {
    console.log("Closing camera");

    const video = document.getElementById('cameraFeed');
    const close = document.getElementById('close_camera_button');
    close.style.display = "none";

    // Pause and stop the video stream
    const stream = video.srcObject;
    if (stream) {
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());

        video.srcObject = null;
        video.style.display = "none"; // Hide the video element
    } else {
        console.log("No video stream to close");
    }
}


function captureImage() {
    const video = document.getElementById('cameraFeed');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set the canvas dimensions to match the video feed
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to a data URL representing the captured image
    const imageDataUrl = canvas.toDataURL('image/png');

    // Display the captured image in the designated div
    const capturedImageContainer = document.getElementById('capturedImageContainer');
    const capturedImage = new Image(); // Create a new Image object
    capturedImage.src = imageDataUrl;

    // Set the width and height of the captured image
    const maxWidth = 250; // Adjust this value as needed
    const maxHeight = 200; // Adjust this value as needed

    // Calculate new dimensions while maintaining the aspect ratio
    let newWidth, newHeight;
    if (canvas.width > canvas.height) {
        newWidth = maxWidth;
        newHeight = (canvas.height / canvas.width) * maxWidth;
    } else {
        newHeight = maxHeight;
        newWidth = (canvas.width / canvas.height) * maxHeight;
    }

    capturedImage.width = newWidth;
    capturedImage.height = newHeight;
    capturedImage.style.margin="1rem";

    capturedImageContainer.innerHTML = ''; // Clear the container before appending
    capturedImageContainer.appendChild(capturedImage);

    // Clean up: You can hide the video feed if needed
    video.style.display = 'none';
}
function add_to_post_input_image_call() {
    const add_to_post_input_image = document.querySelector('#add_to_post_gallary');
    const add_to_post_output_image = document.querySelector('.add_to_post_image_output');

    const selectedFile = add_to_post_input_image.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function (e) {
            add_to_post_output_image.innerHTML = ''; // Clear previous content
            const image = new Image();
            image.src = e.target.result;

            // Set the width and height of the displayed image
            image.width = 300; // Set your desired width
            image.height = 200; // Set your desired height

            add_to_post_output_image.appendChild(image);
        };

        reader.readAsDataURL(selectedFile);
    } else {
        console.error('No file selected.');
    }
}
