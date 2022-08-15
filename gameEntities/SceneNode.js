const category = {
    "scene_graph" : 0x01,
    "aircraft"    : 0x02,
    "invader"     : 0x04,
    "bullet"      : 0x08
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
        this.drawCurrent();
        this.#drawChildren();
    }

    update(dt)
    {
        let ret = this.updateCurrent(dt);
        this.#updateChildren(dt);
        return ret;
    }

    checkCollision(node)
    {
        if (this.#_mParent != undefined)
        { 
            alert("Collision checking avalable only on scene graph level!");
            return;
        }

        // this.#_mChildren.forEach(function(item, index)
        // {
        //     item.onCommand(command);
        // });
    }

    setParent(parent)
    {
        this.#_mParent = parent;
    }

    getParent()
    {
        return this.#_mParent;
    }

    attachChild(child)
    {
        child.setParent(this);
        this.#_mChildren.push(child);
    }

    attachChildToTopParent(child)
    {
        let topParent = this.#findTopParent(this.getParent());
        child.setParent(topParent);
        topParent.#_mChildren.push(child);
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

    onCommand(command)
    {
        // Command current node, if category matches
	    if (command.category & this.getCategory())
            command.action(this);

        // Command children
        this.#_mChildren.forEach(function(item, index){item.onCommand(command);});
    }

    updateCurrent(dt)
    {
        return false;
    }

    #updateChildren(dt)
    {
        let i = 0;
        while (i < this.#_mChildren.length) {
            const item = this.#_mChildren[i];
            if (item.update(dt)) {
                this.detachChild(item);
            }
            else {
                i += 1;
            }
        }
    }

    drawCurrent()
    {
        //console.log(this.#_mCategory)
    }

    #drawChildren()
    {
        this.#_mChildren.forEach(function(item, index){item.draw();});
    }

    #findTopParent(node)
    {
        if (node.getParent() == undefined) 
        {
            return node;
        }
        else 
        {
            node = node.getParent();
            this.#findTopParent(node);
        }
        return node;
    }
}