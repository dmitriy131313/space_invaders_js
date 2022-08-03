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

m1 = new SceneNode(category.ONE);
m2 = new SceneNode(category.TWO);
m3 = new SceneNode(category.THREE);
m4 = new SceneNode(category.FOUR);
m5 = new SceneNode(category.FIVE);


m1.attachChild(m2);
m1.attachChild(m3);

m2.attachChild(m4);
m4.attachChild(m5);
m1.draw();


animate();