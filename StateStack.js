const StateID = {
    "NO_STATE"  : -1,
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
        this.#mPendingList = [];
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

	pushState(id)
    {
        this.#mPendingList.push({action : StackAction.PUSH, state_id : id});
    }

	popState()
    {
        this.#mPendingList.push({action : StackAction.POP, state_id : StateID.NO_STATE});
    }
		
    clearStates()
    {
        this.#mPendingList.push({action : StackAction.CLEAR, state_id : StateID.NO_STATE});
    }

	isEmpty() // -> bool
    {
        return (arr.length == 0) ? true : false;
    }

//private:
    #createState(id) // -> state pointer
    {
        return this.#mFactories[id];
    }

    #applyPendingChanges()
    {
        for (let index = 0; index < this.#mPendingList.length; index++)
        {
            switch (this.#mPendingList[index].action)
            {
                case StackAction.PUSH:
                    this.#mStack.push(this.#createState(this.#mPendingList[index].state_id));
                    break;
    
                case StackAction.POP:
                    this.#mStack.pop();
                    break;
    
                case StackAction.CLEAR:
                    this.#mStack = [];
                    break;
            }
        } 
        this.#mPendingList = [];
    }
}