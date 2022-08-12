class Player
{
    #mKeyBindingPush;
    #mKeyBindingRelease;

    constructor()
    {
        this.#mKeyBindingPush = new Map();
        this.#mKeyBindingRelease = new Map();
        this.initializeActions();
    }

    handleEvent(event)
    {
        if (event.keydown != undefined)
        {
            let act = this.#mKeyBindingPush.get(event.keydown);
            if (act != undefined) commandQueue.push({category : category.aircraft, action : act});
        }

        if (event.keyup != undefined)
        {
            let act = this.#mKeyBindingRelease.get(event.keyup);
            if (act != undefined) commandQueue.push({category : category.aircraft, action : act});
        }
        
    }

    assignKey(key, for_push, func)
    {
        if (for_push)
            this.#mKeyBindingPush.set(key, func);
        else
            this.#mKeyBindingRelease.set(key, func);
    }
	
    initializeActions()
    {
        this.assignKey('d', true,  function(node) { node.right(); });
        this.assignKey('d', false, function(node) { node.stop_right(); });
        
        this.assignKey('a', true,  function(node) { node.left(); });
        this.assignKey('a', false, function(node) { node.stop_left(); });

        this.assignKey(' ', true, function(node) { node.shoot(); });
    }
}