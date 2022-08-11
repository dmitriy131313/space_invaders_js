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

    getBoundingRect()
    {
        let ret = {
            x     : this._Position.x, 
            y     : this._Position.y, 
            width : this.#mSprite.SpriteProp.width,
            heigh : this.#mSprite.SpriteProp.heigh
        }
        return ret;
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

    stop()
    {
        this.#mSprite.Frame = {x : 1, y : 0};
        this._mVelocity.x = 0;
    }

    right()
    {
        this.#mSprite.Frame = {x : 2, y : 0};
        this._mVelocity.x = 5;
    }

    left()
    {
        this.#mSprite.Frame = {x : 0, y : 0};
        this._mVelocity.x = -5;
    }

    shoot()
    {

    }
}