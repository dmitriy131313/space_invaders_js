class Sprite
{
    #mPosition;
    #mImage;
    #mSpriteProp;
    #mScale;
    #mFramesCurrent; // x, y
    #mFramesElapsed;
    #mFramesHold;
    #mFramesToAnim;
    #mAnimIters;

    constructor({
        position,
        imageSrc,
        spriteProp = {width: 50, height: 50},
        scale = 1,
        frameCurrent = {x : 0, y : 0},
        framesToAnim = {start : 0, end : 0}
        }) 
    {
        this.#mPosition = position;
        this.#mImage = new Image();
        this.#mImage.src = imageSrc;
        this.#mSpriteProp = spriteProp;
        this.#mScale = scale;
        this.#mFramesCurrent = frameCurrent;
        this.#mFramesElapsed = 0;
        this.#mFramesHold = 5;
        this.#mFramesToAnim = framesToAnim;
        this.#mAnimIters = 0;
    }
    
    draw() 
    {
        c.drawImage(
            this.#mImage,                                       //img source
            this.#mSpriteProp.width * this.#mFramesCurrent.x,   //pos X on IMG
            this.#mSpriteProp.height * this.#mFramesCurrent.y,  //pos Y on IMG
            this.#mSpriteProp.width,                            //frame WIDTH in IMG
            this.#mSpriteProp.height,                           //frame height in IMG
            this.#mPosition.x,                                  //pos X on CANVAS
            this.#mPosition.y,                                  //pos y on CANVAS
            this.#mSpriteProp.width * this.#mScale,             //WIDTH on CANVAS
            this.#mSpriteProp.height * this.#mScale             //height on CANVAS
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
            height : this.#mSpriteProp.height * this.#mScale
        };
    }

    set AnimFrames(frames)
    {
        this.#mFramesToAnim = frames;
    }

    get AnimIterationsNum()
    {
        return this.#mAnimIters;
    }

    animate()
    {
        this.#mFramesElapsed++

        if (this.#mFramesElapsed % this.#mFramesHold === 0) 
        {
            this.#mFramesCurrent.x = (this.#mFramesCurrent.x + 1) % (this.#mFramesToAnim.end + 1);
            if (this.#mFramesCurrent.x == 0)
            {
                this.#mFramesCurrent.x = this.#mFramesToAnim.start;
                this.#mAnimIters++;
            }
        }
    }
}