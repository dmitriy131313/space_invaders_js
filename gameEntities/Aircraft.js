class Aircraft extends Entity
{
    #mSprite;
    constructor(position, hitpoints, cat)
    {
        super(cat);
        this.#mSprite = new Sprite({
            position : position,
            imageSrc : "./sprites/SpaceShooterAssetPack_Ships.png",
            imageProp : {width : 8, height : 8},
            scale : 20,
            offset : {x : 8, y : 0}
        });

        super.hitpoints = hitpoints;
    }

    updateCurrent(dt)
    {

    }

    drawCurrent()
    {
        this.#mSprite.draw();
    }
}