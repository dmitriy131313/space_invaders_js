class Explosion extends Entity
{
    #mSprite;

    constructor(position)
    {
        super(category.explosion);
        this._Position = position;
        this.#mSprite = new Sprite({
            position : position,
            imageSrc : "./sprites/SpaceShooterAssetPack_Miscellaneous_500.png",
            spriteProp : {width : 50, height : 50},
            scale : 0.5,
            frameCurrent : {x : 9, y : 6},
            framesToAnim : {start : 9, end : 12}
        });

        super.hitpoints = 1;
    }

    getBoundingRect()
    {
        let ret = {
            x      : this._Position.x, 
            y      : this._Position.y, 
            width  : this.#mSprite.SpriteProp.width,
            height : this.#mSprite.SpriteProp.height
        }
        return ret;
    }

    updateCurrent(dt)
    {
        if (this.isDestroyed()) return true;
        this.#mSprite.animate();
        if (this.#mSprite.AnimIterationsNum > 0) this.destroy();
        return false;
    }

    drawCurrent()
    {
        this.#mSprite.draw();
    }
}