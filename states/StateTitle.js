class StateTitle extends State
{
    #mSprite;
    #cnt;
    #state;
    #transparency;

    constructor(stateStack_ref)
    {
        super(stateStack_ref);
        this.#mSprite = new Sprite({
            position : {x : 0, y : 0},
            imageSrc : "./sprites/hero.jpg",
            spriteProp : {width : 1024, height : 500}
        });
        this.#cnt = 100;
        this.#state = 0;
        this.#transparency = 1;
    }

    draw() //virtual
    {
        this.#mSprite.draw();
        let str = "rgba(0, 0, 0, " + this.#transparency.toString() + ")";
        c.fillStyle = str;
        c.fillRect(0, 0, canvas.width, canvas.height);
    }

    update(dt) //virtual
    {
        switch (this.#state)
        {
            case 0:
                this.#transparency -= 0.02;
                if (this.#transparency <= 0)
                {
                    this.#transparency = 0;
                    this.#state = 1;
                }
                break;
            case 1:
                this.#cnt--;
                if (this.#cnt <= 0)
                {
                    this.#state = 2;
                }
                break;
            case 2:
                this.#transparency += 0.02;
                if (this.#transparency >= 1)
                {
                    this.requestStateClear();
                    this.requestStackPush(StateID.MENU);
                }
                break;
        }
        return false;
    }

    handleEvent(event) //virtual
    {
        return false;
    }  
}