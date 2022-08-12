class StateGame extends State
{
    #mWorld;

    constructor(stateStack_ref)
    {
        super(stateStack_ref);

        this.#mWorld = new World();
        console.log("GAME");
    }

    draw() //virtual
    {
        this.#mWorld.draw();
    }

    update(dt) //virtual
    {
        this.#mWorld.update(dt);
        return false;
    }

    handleEvent(event) //virtual
    {
        this.#mWorld.handleEvent(event);
        return false;
    }  
}