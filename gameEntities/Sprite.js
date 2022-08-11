class Sprite
{
    #mPosition;
    #mImage;
    #mSpriteProp;
    #mScale;
    #mFramesMax; // x, y
    #mFramesCurrent; // x, y
    #mFramesElapsed;
    #mFramesHold;

    constructor({
        position,
        imageSrc,
        spriteProp = {width: 50, height: 50},
        scale = 1,
        framesMax = {x : 1, y : 1},
        frameStart = {x : 0, y : 0},
        }) 
    {
        this.#mPosition = position;
        this.#mImage = new Image();
        this.#mImage.src = imageSrc;
        this.#mSpriteProp = spriteProp;
        this.#mScale = scale;
        this.#mFramesMax = framesMax;
        this.#mFramesCurrent = frameStart;
        this.#mFramesElapsed = 0;
        this.#mFramesHold = 5;
    }
    
    draw() 
    {
        c.drawImage(
            this.#mImage,                                       //img source
            this.#mSpriteProp.width * this.#mFramesCurrent.x,   //pos X on IMG
            this.#mSpriteProp.height * this.#mFramesCurrent.y,  //pos Y on IMG
            this.#mSpriteProp.width,                            //frame WIDTH in IMG
            this.#mSpriteProp.height,                           //frame HEIGH in IMG
            this.#mPosition.x,                                  //pos X on CANVAS
            this.#mPosition.y,                                  //pos y on CANVAS
            this.#mSpriteProp.width * this.#mScale,             //WIDTH on CANVAS
            this.#mSpriteProp.height * this.#mScale             //HEIGH on CANVAS
        )
    }

    set Position(position)
    {
        this.#mPosition = position;
    }

    get Position()
    {
        return this.#mPosition;
    }

    set Scale(scale)
    {
        this.#mScale = scale;
    }

    get Scale()
    {
        return this.#mScale;;
    }

    set Frame(frame)
    {
        this.#mFramesCurrent = frame;
    }

    get SpriteProp()
    {
        return {
            width : this.#mSpriteProp.width * this.#mScale,
            heigh : this.#mSpriteProp.height * this.#mScale
        };
    }

    animate()
    {
        this.#mFramesElapsed++

        if (this.#mFramesElapsed % this.#mFramesHold === 0) 
        {
            if (this.#mFramesCurrent.x < this.#mFramesMax.x - 1) 
            {
                this.#mFramesCurrent.x++
            } 
            else 
            {
                this.#mFramesCurrent.x = 0
            }
        }
    }
}