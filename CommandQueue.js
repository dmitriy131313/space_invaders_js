class CommandQueue
{
    #mQueue;

//public:
    constructor()
    {
        this.#mQueue = [];
    }

	push(command)
    {
        this.#mQueue.push(command);
    }

	pop()
    {
        return this.#mQueue.shift();
    }
    
    isEmpty()
    {
        return this.#mQueue.length == 0;
    }
		
	//private:
};

const commandQueue = new CommandQueue();