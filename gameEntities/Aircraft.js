class Aircraft extends Entity
{
    #mSprite;
    constructor(position, hitpoints, cat)
    {
        super(cat);
        this._Position = position;
        this.#mSprite = new Sprite({
            position : this._Position,
            imageSrc : "./sprites/SpaceShooterAssetPack_Ships_500.png",
            spriteProp : {width : 50, height : 50},
            scale : 1,
            framesMax : {x : 10, y : 10}
        });

        super.hitpoints = hitpoints;

        this.#mSprite.Frame = {x : 1, y : 0};
    }

    updateCurrent(dt)
    {

    }

    drawCurrent()
    {
        this.#mSprite.draw();
    }
}