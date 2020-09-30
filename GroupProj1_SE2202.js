shape = function(type, offset, dimension)                                  //Pallet function
{
    let line = "\n";
    let result = "";
    
    drawR = function(dimension){                                            //First nested function
        for(let i = 0; i < dimension; i ++)
        {
            for(let j = 0; j < offset; j ++)                                //Loop to create offset
            {
                result += " ";
            }
            for(let k = 0; k < dimension; k ++)                             //Loop to create rectangle itself
            {
                result += "*";
            }
            result += line;
        }
        return result;
    }

    drawT = function(dimension)                                             //Second nested function
    {
        for(let a = 0; a < dimension; a ++)
        {
            for(let b = 0; b < offset; b ++)                                 //Loop to create offset
            {
               result += " ";
            }
            for(let c = 0; c <= a; c ++)                                     //Loop to create triangle iself
            {                                                                //Note c <= a rather than c < dimension - differs triangle from rectangle
               result += "*";
            }
            result += line;
        }
        return result;
    }   

    if(type === "triangle")
    {   
        return drawT(dimension);                                             //Pallet function returns either nested function depending on input
    }
    else if(type === "rectangle")
    {
        return drawR(dimension);
    }
};


tenOffsetR = function(size)                                                   //Other functions to call pallet function --> internal functions
{
    return shape("rectangle", 10, size);
};

twentyOffsetR = function(size)
{
    return shape("rectangle", 20, size);
};

tenOffsetT = function(size)
{
    return shape("triangle", 10, size);
};

twentyOffsetT = function(size)
{
    return shape("triangle", 20, size);
};

//Prints differently sized rectangles with an offset of 10
console.log(tenOffsetR(5));
console.log(tenOffsetR(10));

//Prints differently sized rectangles with an offset of 20
console.log(twentyOffsetR(5));
console.log(twentyOffsetR(10));

//Prints differently sized triangles with an offset of 10
console.log(tenOffsetT(5));
console.log(tenOffsetT(10));

//Prints differently sized triangles with an offset of 20
console.log(twentyOffsetT(5));
console.log(twentyOffsetT(10));
