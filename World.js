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
    
    }

    #moveBackground()
    {
        this.#mSprite_background_y_pos += 5;
        if (this.#mSprite_background_y_pos > 0) this.#mSprite_background_y_pos = -500;
        this.#mSprite_background.Position = {x : 0, y : this.#mSprite_background_y_pos};
    }

    update(dt)
    {
        this.#mSceneGraph.update(dt);
        this.#moveBackground();
    }

    draw()
    {
        this.#mSprite_background.draw();
        this.#mSceneGraph.draw();
    }

    handleCollisions()
    {

    }
		
    buildScene()
    {
        this.#mSprite_background_y_pos = -500;
        this.#mSprite_background = new Sprite({
            position : {x : 0, y : this.#mSprite_background_y_pos},
            imageSrc : "./sprites/stars_n.jpg",
            spriteProp : {width : 1024, height : 1000},
            scale : 1,
            framesMax : {x : 1, y : 1}
        });

        this.#mPlayerAircraft = new Aircraft({x : 500, y : 450}, 100, category.aircraft);
        this.#mSceneGraph.attachChild(this.#mPlayerAircraft);
    }

    addEnemies()
    {

    }
}