class Entity extends SceneNode
{
    #mVelocity;
    #mHitpoints;

    constructor(cat)
    {
        super(cat);
    }

    set Velocity(velocity)
    {
        this.#mVelocity = velocity;
    }

    get Velocity()
    {
        return this.#mVelocity;
    }

    accelerate(velocity)
    {
        this.#mVelocity += velocity;
    }

    get Hitpoints()
    {
        return this.#mHitpoints;
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