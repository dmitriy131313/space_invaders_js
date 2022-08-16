const category = {
    "scene_graph" : 0x01,
    "aircraft"    : 0x02,
    "invader"     : 0x04,
    "bullet"      : 0x08
}

//================================================================================

class SceneNode
{
    #_mCategory;
    #_mParent;

//public:
    constructor(cat)
    {
        this.#_mCategory = cat;
        this.#_mParent = undefined;
        this._mChildren = [];
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

    checkSceneCollision(sceneGraph, PairsMap)
    {
	    this.checkNodeCollision(sceneGraph, PairsMap);

        for (let index = 0; index < sceneGraph._mChildren.length; index++)
        {
            this.checkSceneCollision(sceneGraph._mChildren[index], PairsMap);
        }
    }

    checkNodeCollision(node, PairsMap)
    {
	    if (this != node && this.collision(this, node))
            PairsMap.set(this, node);

        for (let index = 0; index < this._mChildren.length; index++)
        {
            this._mChildren[index].checkNodeCollision(node, PairsMap);
        }
    }

    collision(node_l, node_r)
    {
        let rect_l = node_l.getBoundingRect();
        let rect_r = node_r.getBoundingRect();

        let conditionFor_X = (
            (rect_l.x + rect_l.width > rect_r.x && rect_l.x + rect_l.width < rect_r.x + rect_r.width) || 
            (rect_l.x < rect_r.x && rect_l.x + rect_l.width > rect_r.x + rect_r.width) ||
            (rect_l.x < rect_r.x && rect_l.x + rect_l.width > rect_r.x + rect_r.width)
        );

        let conditionFor_Y = 1;

        if ((rect_l.x + rect_l.width > rect_r.x && rect_l.x + rect_l.width < rect_r.x + rect_r.width) ||
            (1))
        {

        }
    }

    getBoundingRect() //virtual
    {
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
        this._mChildren.push(child);
    }

    attachChildToTopParent(child)
    {
        let topParent = this.#findTopParent(this.getParent());
        child.setParent(topParent);
        topParent._mChildren.push(child);
    }

    detachChild(child_to_detach)
    {
        const index = this._mChildren.indexOf(child_to_detach);
        
        if (index > -1) {
            this._mChildren.splice(index, 1);
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
        this._mChildren.forEach(function(item, index){item.onCommand(command);});
    }

    updateCurrent(dt)
    {
        return false;
    }

    #updateChildren(dt)
    {
        let i = 0;
        while (i < this._mChildren.length) {
            const item = this._mChildren[i];
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
        this._mChildren.forEach(function(item, index){item.draw();});
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