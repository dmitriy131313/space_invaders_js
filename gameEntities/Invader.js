class Invader extends Entity
{
    #mSprite;
    #mShootCnt;
//Math.floor(Math.random() * 101);
    constructor(position, hitpoints, cat)
    {
        super(cat);
        this._Position = position;
        this.#mSprite = new Sprite({
            position : position,
            imageSrc : "./sprites/SpaceShooterAssetPack_Ships_500.png",
            spriteProp : {width : 50, height : 50},
            scale : 0.5,
            framesMax : {x : 10, y : 10}
        });

        super.hitpoints = hitpoints;
        this.#mSprite.Frame = {x : 4, y : 2};

        this.#mShootCnt = Math.floor(Math.random() * 1001);
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

        if (this.#mShootCnt-- <= 0)
        {
            this.#mShootCnt = Math.floor(Math.random() * 1001);
            this.shoot();
        }

        if (this._Position.x <= 0)
        {
            commandQueue.push({category : category.invader, action : function(node) {node.moveRight();}});
        }
        else if (this._Position.x + this.#mSprite.SpriteProp.width >= 1024)
        {
            commandQueue.push({category : category.invader, action : function(node) {node.moveLeft();}});
        }
        return false;
    }

    drawCurrent()
    {
        this.#mSprite.draw();
    }

    shoot()
    {
        console.log("shoot");
        this.attachChildToTopParent(new Bullet(10, {x : this._Position.x + (this.#mSprite.SpriteProp.width / 2), y : this._Position.y + this.#mSprite.SpriteProp.height}, 1, category.inv_bullet));
    }

    moveLeft()
    {
        this._mVelocity.x = -5;
    }

    moveRight()
    {
        this._mVelocity.x = 5;
    }
}