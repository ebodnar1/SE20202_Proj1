shape = function(type, offset, dimension)
{
    let line = "\n";

   
    drawR = function(dimension){
        let result = "";
        for(let i = 0; i < dimension; i ++)
        {
            for(let j = 0; j < offset; j ++)
            {
                result += " ";
            }
            for(let k = 0; k < dimension; k ++)
            {
                result += "*";
            }
            result += line;
        }
        return result;
    }

    drawT = function(dimension)
    {
        let result = "";
        for(let a = 0; a < dimension; a ++)
        {
            for(let b = 0; b < offset; b ++)
            {
               result += " ";
            }
            for(let c = 0; c <= a; c ++)
            {
               result += "*";
            }
            result += line;
        }
        return result;
        console.log(result);
    }   


    if(type === "triangle")
    {   
        return drawT(dimension);
    }
    else if(type === "rectangle")
    {
        return drawR(dimension);
    }

};


tenOffsetR = function(size)
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

console.log(tenOffsetR(5));
console.log(tenOffsetR(10));

console.log(twentyOffsetR(5));
console.log(twentyOffsetR(10));

console.log(tenOffsetT(5));
console.log(tenOffsetT(10));

console.log(twentyOffsetT(5));
console.log(twentyOffsetT(10));
