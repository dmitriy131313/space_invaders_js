class TestState2 extends State
{
    constructor(stateStack_ref)
    {
        super(stateStack_ref);
    }

    draw() //virtual
    {
        console.log("draw Test 2");
    }

    update(dt) //virtual
    {
        console.log("update Test 2");
        return false;
    }

    handleEvent(event) //virtual
    {
        console.log("event Test 2");
        return false;
    }  
}