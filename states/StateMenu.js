class StateMenu extends State
{
    constructor(stateStack_ref)
    {
        super(stateStack_ref);
        console.log("MENU")
    }

    draw() //virtual
    {

    }

    update(dt) //virtual
    {
        return false;
    }

    handleEvent(event) //virtual
    {
        return false;
    }  
}