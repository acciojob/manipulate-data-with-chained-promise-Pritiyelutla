//your JS code here. If required.

let div = document.getElementById("output");
const arr = [1, 2, 3, 4];

function promOdd(arr)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let oddArr = [];
            for(let i=0; i<arr.length; i++)
            {
                if(arr[i] % 2 == 0)
                {
                    oddArr.push(arr[i]);
                }
            }
            resolve(oddArr);
        }, 1000);
    });
}

function promEven(arr)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let res =[];
            for(let i=0; i<arr.length; i++)
            {
                if(arr[i] % 2 == 0)
                {
                    res.push((arr[i])*2);
                }
            } 
            resolve(res);
        }, 2000);
    });
}


promOdd(arr)
.then((res) => {
    div.innerText = res;
    //console.log("back in chain");//ye line nhi execute ho rha i am not coming here only
    promEven(arr)
    .then((res) => {
        div.innerText = res;
    });
});
