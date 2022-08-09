const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 500;

c.fillRect(0, 0, canvas.width, canvas.height);

c.fillStyle = 'black';
c.fillRect(0, 0, canvas.width, canvas.height);

// function animate() {
//     c.fillStyle = 'black';
//     c.fillRect(0, 0, canvas.width, canvas.height);

//     window.requestAnimationFrame(animate);
// }

const stack = new StateStack();

// stack.registerState(StateID.TITLE, function(){return new TestState1(stack);});
// stack.registerState(StateID.MENU, function(){return new TestState2(stack);});

// stack.pushState(StateID.TITLE);
// stack.update(1);
// stack.update(1);
// stack.draw();

c.fillStyle = 'black';
c.fillRect(0, 0, canvas.width, canvas.height);

// const aaa = new Image();
// aaa.src = "./sprites/SpaceShooterAssetPack_Ships_500.png";

// c.drawImage(aaa, 50, 0, 50, 50,    100, 100, 30, 30);

// const aaa = new Sprite({x : 150, y : 150}, 100, category.ONE);
// aaa.draw();

const aaa = new Aircraft({x : 200, y : 200}, 100, category.ONE);
//aaa.draw();
//aaa.Position = {x : 10, y : 100};
aaa.Velocity = {x : 10, y : 0};

//var www = 20;

function animate() {
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    //www++;
    //aaa.Position = {x : www, y : 100};
    //console.log("ddd");
    aaa.update(1);
    aaa.draw();
    window.requestAnimationFrame(animate);
}


m1 = new SceneNode(category.ONE);
m2 = new SceneNode(category.TWO);
m3 = new SceneNode(category.THREE);
m4 = new SceneNode(category.FOUR);
m5 = new SceneNode(category.FIVE);

m1.attachChild(m2);
// m1.attachChild(m3);

m2.attachChild(m3);
m2.attachChild(m4);
m2.attachChild(m5);

// commandQueue.push({
//     category : (category.FOUR | category.ONE | category.THREE),
//     action   : function(node, dt)
//     {
//         console.log(node.getCategory());
//         node.test(111);
//     }
// });

while (!commandQueue.isEmpty()) m1.onCommand(commandQueue.pop(), 1);

animate();