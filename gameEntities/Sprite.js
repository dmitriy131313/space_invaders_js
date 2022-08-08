class Sprite
{
    #mPosition;
    #mImage;
    #mScale;
    #mFramesMax;
    #mFramesCurrent;
    #mFramesElapsed;
    #mFramesHold;
    #mOffset;

    constructor({
        position,
        imageSrc,
        imageProp = {width: 50, height: 50},
        scale = 1,
        framesMax = 1,
        offset = { x: 0, y: 0 }
        }) 
    {
        this.#mPosition = position
        this.#mImage = new Image()
        this.#mImage.src = imageSrc
        this.#mImage.width = imageProp.width;
        this.#mImage.height = imageProp.height;
        this.#mScale = scale
        this.#mFramesMax = framesMax
        this.#mFramesCurrent = 0
        this.#mFramesElapsed = 0
        this.#mFramesHold = 5
        this.#mOffset = offset
    }
    
    draw() 
    {
        c.drawImage(
            this.#mImage,
            this.#mFramesCurrent * (this.#mImage.width / this.#mFramesMax),
            0,
            this.#mImag.width / this.#mFramesMax,
            this.#mImag.height,
            this.#mPosition.x - this.#mOffset.x,
            this.#mPosition.y - this.#mOffset.y,
            (this.#mImag.width / this.#mFramesMax) * this.#mScale,
            this.#mImag.height * this.#mScale
        )

        this.#mFramesElapsed++
    
        if (this.#mFramesElapsed % this.#mFramesHold === 0) 
        {
            if (this.#mFramesCurrent < this.#mFramesMax - 1) 
            {
                this.#mFramesCurrent++
            } 
            else 
            {
                this.#mFramesCurrent = 0
            }
        }
    }
}