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

    constructor()
    {
        this.#mStack = [];
        this.#mPendingList = new Map();
        this.#mFactories = new Map();
    }

//private:
    #createState(id) //return state ptr
    {

    }

    #applyPendingChanges()
    {

    }
}