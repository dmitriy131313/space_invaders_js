class StateMenu extends State
{
    #mSprite_back;
    #mSprite_play;
    #buttonState;
    #transparency;

    constructor(stateStack_ref)
    {
        super(stateStack_ref);
        this.#mSprite_back = new Sprite({
            position : {x : 0, y : 0},
            imageSrc : "./sprites/menu.jpg",
            spriteProp : {width : 1024, height : 500},
            scale : 1,
            framesMax : {x : 1, y : 1}
        });

        this.#mSprite_play = new Sprite({
            position : {x : 410, y : 330},
            imageSrc : "./sprites/play.png",
            spriteProp : {width : 2020, height : 672},
            scale : 0.1,
            framesMax : {x : 1, y : 1}
        });

        this.#buttonState = 0;
        this.#transparency = 0;

        console.log("MENU")
    }

    draw() //virtual
    {
        this.#mSprite_back.draw();
        this.#mSprite_play.draw();

        let str = "rgba(0, 0, 0, " + this.#transparency.toString() + ")";
        c.fillStyle = str;
        c.fillRect(0, 0, canvas.width, canvas.height);
    }

    update(dt) //virtual
    {
        if (this.#buttonState == 2)
        {
            this.#transparency += 0.02;
            if (this.#transparency > 1) 
            {
                this.requestStateClear();
                this.requestStackPush(StateID.GAME);
            }
        }
        return false;
    }

    handleEvent(event) //virtual
    {
        if (event.mouse_move != undefined)
        {
            if (   event.mouse_move.clientX > this.#mSprite_play.Position.x 
                && event.mouse_move.clientX < this.#mSprite_play.Position.x + this.#mSprite_play.SpriteProp.width
                && event.mouse_move.clientY > this.#mSprite_play.Position.y
                && event.mouse_move.clientY < this.#mSprite_play.Position.y + this.#mSprite_play.SpriteProp.heigh)
            {
                if (this.#buttonState == 0)
                {
                    this.#buttonState = 1;
                    this.#mSprite_play.Position = {x : 395, y : 323};
                    this.#mSprite_play.Scale = 0.12;
                }
                //console.log({x : event.mouse_move.clientX, y : event.mouse_move.clientY});
            }
            else
            {
                if (this.#buttonState == 1)
                {
                    this.#buttonState = 0;
                    this.#mSprite_play.Position = {x : 410, y : 330};
                    this.#mSprite_play.Scale = 0.1;
                }
            }
        }
        if (event.mouse_click == true)
        {
            if (this.#buttonState == 1)
            {
                this.#buttonState = 2;
                console.log("mouse click!");
            }
        }
        return false;
    }  
}