const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 500;

c.fillStyle = 'black';
c.fillRect(0, 0, canvas.width, canvas.height);


//c.fillRect(0, 0, canvas.width, canvas.height);

// function animate() {
//     c.fillStyle = 'black';
//     c.fillRect(0, 0, canvas.width, canvas.height);

//     window.requestAnimationFrame(animate);
// }

const mStack = new StateStack();

mStack.registerState(StateID.TITLE, function(){return new StateTitle(mStack);});
mStack.registerState(StateID.MENU, function(){return new StateMenu(mStack);});
mStack.registerState(StateID.GAME, function(){return new StateGame(mStack);});
mStack.registerState(StateID.ENDSCREEN, function(){return new StateEndscreen(mStack);});

mStack.pushState(StateID.TITLE);

// stack.pushState(StateID.TITLE);
// stack.update(1);
// stack.update(1);
// stack.draw();

// c.fillStyle = 'black';
// c.fillRect(0, 0, canvas.width, canvas.height);

// const aaa = new Aircraft({x : 200, y : 200}, 100, category.ONE);
// aaa.Velocity = {x : 10, y : 0};

var KeyEvent = {
    keyup : undefined, 
    keydown : undefined, 
    mouse_move : undefined, 
    mouse_click : false
};

window.addEventListener('keydown', (event) => {
    KeyEvent.keydown = event.key;
})

window.addEventListener('keyup', (event) => {
    KeyEvent.keyup = event.key;
})

canvas.addEventListener('mousemove', (event) => {
    KeyEvent.mouse_move = event;
})

canvas.addEventListener('click', () => {
    KeyEvent.mouse_click = true;
})

function Loop() 
{
    mStack.handleEvent(KeyEvent);
    KeyEvent = {
        keyup : undefined, 
        keydown : undefined,
        mouse_move : undefined, 
        mouse_click : false
    };
    mStack.update(20);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    mStack.draw()
}
window.requestAnimationFrame(Loop);
window.setInterval(Loop, 20);

// function animate() {
//     c.fillStyle = 'black';
//     c.fillRect(0, 0, canvas.width, canvas.height);

//     //www++;
//     //aaa.Position = {x : www, y : 100};
//     //console.log("ddd");
//     aaa.update(1);
//     aaa.draw();
//     window.requestAnimationFrame(animate);
// }


// m1 = new SceneNode(category.ONE);
// m2 = new SceneNode(category.TWO);
// m3 = new SceneNode(category.THREE);
// m4 = new SceneNode(category.FOUR);
// m5 = new SceneNode(category.FIVE);

// m1.attachChild(m2);

// m2.attachChild(m3);
// m2.attachChild(m4);
// m2.attachChild(m5);

// commandQueue.push({
//     category : (category.FOUR | category.ONE | category.THREE),
//     action   : function(node, dt)
//     {
//         console.log(node.getCategory());
//         node.test(111);
//     }
// });

//while (!commandQueue.isEmpty()) m1.onCommand(commandQueue.pop(), 1);

//animate();