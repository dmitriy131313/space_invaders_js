class Aircraft extends Entity
{
    #mSprite;
    #mButLeftHolded;
    #mButRightHolded;

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
        this._Position.x += this._mVelocity.x;
        this._Position.y += this._mVelocity.y;
        this.#mSprite.Position = this._Position;
        return false;
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
        this.#mButRightHolded = true;
        if (this.#mButLeftHolded == true)
        {
            this.#mSprite.Frame = {x : 1, y : 0};
        }
        else
        {
            this.#mSprite.Frame = {x : 2, y : 0};
        }
        this._mVelocity.x += 5;
    }

    stop_right()
    {
        this.#mButRightHolded = false;
        if (this.#mButLeftHolded == true)
        {
            this.#mSprite.Frame = {x : 0, y : 0};
            this._mVelocity.x -= 5;
        }
        else
        {
            this.#mSprite.Frame = {x : 1, y : 0};
            this._mVelocity.x = 0;
        }
    }

    left()
    {
        this.#mButLeftHolded = true;
        if (this.#mButRightHolded == true)
        {
            this.#mSprite.Frame = {x : 1, y : 0};
        }
        else
        {
            this.#mSprite.Frame = {x : 0, y : 0};
        }
        this._mVelocity.x -= 5;
    }

    stop_left()
    {
        this.#mButLeftHolded = false;
        if (this.#mButRightHolded == true)
        {
            this.#mSprite.Frame = {x : 2, y : 0};
            this._mVelocity.x += 5;
        }
        else
        {
            this.#mSprite.Frame = {x : 1, y : 0};
            this._mVelocity.x = 0;
        }
    }

    shoot()
    {
        console.log("shoot");
        this.attachChildToTopParent(new Bullet({x : this._Position.x + (this.#mSprite.SpriteProp.width / 2), y : this._Position.y}, 1, category.bullet));
    }
}