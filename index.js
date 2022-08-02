const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 500;

c.fillRect(0, 0, canvas.width, canvas.height);

function animate() {
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    

    window.requestAnimationFrame(animate);
}

animate();