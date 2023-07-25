function findMissingNumber(arr,n)
{
    
    let tempArr=[];
    for(let i=0;i<n;i++)
    {
        tempArr[i]=0;
    }
    for (i = 0; i < n; i++) { 
        tempArr[arr[i] - 1] = 1;
    } 
    let missed = 0;
    for (i = 0; i <= n; i++) {
        if (tempArr[i] == 0)
        {
          missed = i + 1;
        }
    }
    console.log("missing number is: ",missed);
}
findMissingNumber([1,2,5,4,3,6,9,7],9)