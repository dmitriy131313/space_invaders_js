class State
{
    #mStateStack_ref;

    constructor(StateStack_ref)
    {
        this.#mStateStack_ref = StateStack_ref;
    }

//public:

    draw() //virtual
    {

    }

    update(dt) //virtual
    {

    }

    handleEvent(event) //virtual
    {

    }

    requestStackPush(state_id)
    {
        this.#mStateStack_ref.pushState(state_id);
    }

    requestStackPop()
    {
        this.#mStateStack_ref.popState();
    }

    requestStateClear()
    {
        this.#mStateStack_ref.clearStates();
    }

}

