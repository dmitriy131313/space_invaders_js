const StateID = {
    "TITLE"     : 0,
    "MENU"      : 1,
    "INGAME"    : 2,
    "ENDSCREEN" : 3
};

const StackAction = {
    "PUSH"  : 1,
    "POP"   : 2,
    "CLEAR" : 3
}

//===================================================================================

class StateStack
{
    #mStack;
    #mPendingList;
    #mFactories;

//public:
    constructor()
    {
        this.#mStack = [];
        this.#mPendingList = new Map();
        this.#mFactories = new Map();
    }

    registerState(state_id, factoryFunction)
    {
        this.#mFactories.set(state_id, factoryFunction);
    }

	update(dt)
    {
        // Iterate from top to bottom, stop as soon as update() returns false
        for (let index = this.#mStack.length - 1; index >= 0; index--) {
            if (!this.#mStack[index].update(dt)) break;
        }
	    this.#applyPendingChanges();
    }

	draw()
    {
        this.#mStack.forEach(function(item, index){item.draw();});
    }

	handleEvent(event)
    {
        // Iterate from top to bottom, stop as soon as handleEvent() returns false
        for (let index = this.#mStack.length - 1; index >= 0; index--) {
            if (!this.#mStack[index].handleEvent(event)) break;
        }
	    this.#applyPendingChanges();
    }

	pushState(state_id)
    {

    }

	popState()
    {

    }
		
    clearStates()
    {

    }

	isEmpty() // -> bool
    {

    }

//private:
    #createState(id) // -> state pointer
    {

    }

    #applyPendingChanges()
    {

    }
}