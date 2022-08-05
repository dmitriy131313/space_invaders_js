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

const stack = new StateStack();

// stack.registerState(StateID.TITLE, function(){return new TestState1(stack);});
// stack.registerState(StateID.MENU, function(){return new TestState2(stack);});

// stack.pushState(StateID.TITLE);
// stack.update(1);
// stack.update(1);
// stack.draw();


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