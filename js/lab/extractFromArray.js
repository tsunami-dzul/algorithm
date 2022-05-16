const mediaStream = (arr) => {
    if(arr.length === 0) {
        return ;
    }

    const a = arr.pop();

    mediaStream(arr);

    console.log(a);

    return a;
}

mediaStream([2,3,1,5,6]);