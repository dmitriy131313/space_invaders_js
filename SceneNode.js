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