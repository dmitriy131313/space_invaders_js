class TestState1 extends State
{
    constructor(stateStack_ref)
    {
        super(stateStack_ref);
    }

    draw() //virtual
    {
        console.log("draw Test 1");
    }

    update(dt) //virtual
    {
        console.log("update Test 1");
        return false;
    }

    handleEvent(event) //virtual
    {
        console.log("event Test 1");
        return false;
    }  
}