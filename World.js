class World
{
    #mSceneGraph;
    #mPlayerAircraft;

    #mSprite_background;
    #mSprite_background_y_pos;

    constructor()
    {
        this.#mSceneGraph = new SceneNode(category.scene_graph);
        this.buildScene();

        this.#mPlayerAircraft = new Aircraft({x : 500, y : 475}, 100, category.aircraft);
        this.#mSceneGraph.attachChild(this.#mPlayerAircraft);

        this.addEnemies();
    }

    #moveBackground()
    {
        this.#mSprite_background_y_pos += 5;
        if (this.#mSprite_background_y_pos > 0) this.#mSprite_background_y_pos = -500;
        this.#mSprite_background.Position = {x : 0, y : this.#mSprite_background_y_pos};
    }

    handleEvent(event)
    {
        mPlayer.handleEvent(event);
        return false;
    }

    update(dt)
    {
        while (!commandQueue.isEmpty()) this.#mSceneGraph.onCommand(commandQueue.pop());

        this.#mSceneGraph.update(dt);
        this.keepPlayerInSceneBounds();
        this.handleCollisions();
        this.#moveBackground();
    }

    draw()
    {
        this.#mSprite_background.draw();
        this.#mSceneGraph.draw();
    }

    handleCollisions()
    {
        let PairsArr = [];
        this.#mSceneGraph.checkSceneCollision(this.#mSceneGraph, PairsArr);
        for (let index = 0; index < PairsArr.length; index++)
        {
            if ((PairsArr[index].l.getCategory() == category.bullet && PairsArr[index].r.getCategory() == category.invader) ||
                (PairsArr[index].l.getCategory() == category.inv_bullet && PairsArr[index].r.getCategory() == category.aircraft))
            {
                PairsArr[index].l.destroy();
                PairsArr[index].r.destroy();
                //this.#mSceneGraph.attachChild(new Explosion({x : 300, y : 300}));
                this.#mSceneGraph.attachChild(new Explosion({
                    x : PairsArr[index].r.Position.x + PairsArr[index].r.getBoundingRect().width / 2, 
                    y : PairsArr[index].r.Position.y + PairsArr[index].r.getBoundingRect().height / 2
                }));
            }
        }
    }
		
    buildScene()
    {
        this.#mSprite_background_y_pos = -500;
        this.#mSprite_background = new Sprite({
            position : {x : 0, y : this.#mSprite_background_y_pos},
            imageSrc : "./sprites/stars_n.jpg",
            spriteProp : {width : 1024, height : 1000}
        });
    }

    addEnemies()
    {
        for (let i_y = 10; i_y < 130; i_y += 30)
        {
            for (let i_x = 30; i_x < 630; i_x += 30)
            {
                let inv = new Invader({x : i_x, y : i_y}, 100, category.invader);
                inv.Velocity = {x : 5, y : 0};
                this.#mSceneGraph.attachChild(inv);
            }
        }
    }

    keepPlayerInSceneBounds()
    {
        if (this.#mPlayerAircraft.Position.x < 0) this.#mPlayerAircraft.Position.x = 0;
        else if (this.#mPlayerAircraft.Position.x + this.#mPlayerAircraft.getBoundingRect().width > 1024) this.#mPlayerAircraft.Position.x = 999; 
    }
}