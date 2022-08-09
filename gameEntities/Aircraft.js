class Aircraft extends Entity
{
    #mSprite;
    constructor(position, hitpoints, cat)
    {
        super(cat);
        this._Position = position;
        this.#mSprite = new Sprite({
            position : position,
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
        this._Position.x += this._mVelocity.x;
        this._Position.y += this._mVelocity.y;
        this.#mSprite.Position = this._Position;
    }

    drawCurrent()
    {
        this.#mSprite.draw();
    }
}