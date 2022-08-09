class Entity extends SceneNode
{
    _mVelocity;
    #mHitpoints;
    _Position;

    constructor(cat)
    {
        super(cat);
        this._Position = {x : 0, y : 0};
    }

    set Velocity(velocity)
    {
        this._mVelocity = velocity;
    }

    get Velocity()
    {
        return this._mVelocity;
    }

    set Position(position)
    {
        this._Position = position;
    }

    get Position()
    {
        return this._Position;
    }

    accelerate(velocity)
    {
        this._mVelocity += velocity;
    }

    get Hitpoints()
    {
        return this._mHitpoints;
    } 

    damage(points)
    {
        this.#mHitpoints -= points;
    }

    destroy()
    {
        this.#mHitpoints = 0;
    }

    isDestroyed()
    {
        return (this.#mHitpoints <= 0);
    }
}