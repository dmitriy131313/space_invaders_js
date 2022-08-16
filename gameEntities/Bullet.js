class Bullet extends Entity
{
    #mBulletRect;

    constructor(position, hitpoints, cat)
    {
        super(cat);
        super.hitpoints = hitpoints;
        this._Position = position;
        this._mVelocity = {x : 0, y : -10};
        this.#mBulletRect = {width : 2, height : 5};
    }

    updateCurrent(dt)
    {
        if (this.isDestroyed()) return true;
        this._Position.x += this._mVelocity.x;
        this._Position.y += this._mVelocity.y;
        if (this._Position.y < -5) this.destroy();
        return false;
    }

    drawCurrent()
    {
        c.fillStyle = 'white';
        c.fillRect(this._Position.x, this._Position.y, this.#mBulletRect.width, this.#mBulletRect.height);
    }

    getBoundingRect()
    {
        let ret = {
            x      : this._Position.x, 
            y      : this._Position.y, 
            width  : this.#mBulletRect.width,
            height : this.#mBulletRect.height
        }
        return ret;
    }
}