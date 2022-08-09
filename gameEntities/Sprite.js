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
        // this.#mImage.width = imageProp.width;
        // this.#mImage.height = imageProp.height;
        this.#mScale = scale;
        this.#mFramesMax = framesMax;
        this.#mFramesCurrent = frameStart;
        this.#mFramesElapsed = 0;
        this.#mFramesHold = 5;
        //this.#mOffset = offset;
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

    set Frame(frame)
    {
        this.#mFramesCurrent = frame;
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