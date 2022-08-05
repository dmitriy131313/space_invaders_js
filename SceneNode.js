const category = {
    "ONE"   : 0x01,
    "TWO"   : 0x02,
    "THREE" : 0x04,
    "FOUR"  : 0x08,
    "FIVE"  : 0x10
}

//================================================================================

class SceneNode
{
    #_mChildren;
    #_mCategory;
    #_mParent;

//public:
    constructor(cat)
    {
        this.#_mCategory = cat;
        this.#_mParent = undefined;
        this.#_mChildren = [];
    }

    draw()
    {
        this.#drawCurrent();
        this.#drawChildren();
    }

    update(dt)
    {
        this.#updateCurrent(dt);
        this.#updateChildren(dt);
    }

    setParent(parent)
    {
        this.#_mParent = parent;
    }

    attachChild(child)
    {
        child.setParent(this);
        this.#_mChildren.push(child);
    }

    detachChild(child_to_detach)
    {
        const index = this.#_mChildren.indexOf(child_to_detach);
        
        if (index > -1) {
            this.#_mChildren.splice(index, 1);
        }
        else {
            alert("Can't find Children node!");
        }
    }

    getCategory()
    {
        return this.#_mCategory;
    }

    onCommand(command, dt)
    {
        // Command current node, if category matches
	    if (command.category & this.getCategory())
            command.action(this, dt);

        // Command children
        this.#_mChildren.forEach(function(item, index){item.onCommand(command, dt);});
    }

//private methods:
    #updateCurrent(dt)
    {

    }

    #updateChildren(dt)
    {
        this.#_mChildren.forEach(function(item, index){item.update(dt);});
    }

    #drawCurrent()
    {
        console.log(this.#_mCategory)
    }

    #drawChildren()
    {
        this.#_mChildren.forEach(function(item, index){item.draw();});
    }
}