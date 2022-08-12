class Bullet extends Entity
{
    constructor(position, hitpoints, cat)
    {
        super(cat);
        super.hitpoints = hitpoints;
        this._Position = position;
        this._mVelocity = {x : 0, y : -10};
    }

    updateCurrent(dt)
    {
        this._Position.x += this._mVelocity.x;
        this._Position.y += this._mVelocity.y;
    }

    drawCurrent()
    {
        c.fillStyle = 'white';
        c.fillRect(this._Position.x, this._Position.y, 2, 5);
    }
}