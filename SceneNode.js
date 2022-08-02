class SceneNode
{
//public:
    constructor()
    {
        this._mParent = undefined;
        this._mChildren = [];
    }

    draw()
    {
        drawCurrent();
        drawChildren();
    }

    update(dt)
    {
        updateCurrent(dt);
        updateChildren(dt);
    }

    attachChild(child)
    {
        child.mParent = this;
        mChildren.push(child);
    }

    detachChild(child_to_detach)
    {
        const index = mChildren.indexOf(child_to_detach);
        
        if (index > -1) {
            mChildren.splice(index, 1);
        }
        else {
            alert("Can't find Chaldren node!");
        }
    }

    getCategory()
    {
        return category.SCENE;
    }

//private methods:
    #updateCurrent(dt)
    {

    }

    #updateChildren(dt)
    {
        mChildren.forEach(function(item, index){item.update(dt);});
    }

    #drawCurrent()
    {
        
    }

    #drawChildren()
    {
        mChildren.forEach(function(item, index){item.draw();});
    }

}