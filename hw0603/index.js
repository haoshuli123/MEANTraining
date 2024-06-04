// * filter, map, includes, indexOf, reduce, slice, splice

// 1 - filter
Array.prototype.myFilter = function (callback) {
    const result = [];
    for(let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
        
    }
    return result;
}


// 2 - map
Array.prototype.myMap = function (callback) {
    const result = [];
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}



// 3 - includes
Array.prototype.myIncludes = function (element, fromIndex) {
    const start = fromIndex === undefined ? 0 : fromIndex;
    for(let i = start; i < this.length; i++){
        if(this[i] === element){
            return true;
        }
    }
    return false;
}


// 4 - indexOf
Array.prototype.myIndexOf = function (element, fromIndex) {
    const start = fromIndex === undefined ? 0 : fromIndex;
    for(let i = start; i < this.length; i++){
        if(this[i] === element){
            return i;
        }
    }
    return -1;
}



// 5 - reduce
Array.prototype.myReduce = function (callback, initialVal) {
    let acc = initialVal === undefined ? 0 : initialVal;
    for(let i = 0; i < this.length; i++){
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}



// 6 - slice
Array.prototype.mySlice = function (start, end=this.length) {
    const result = [];
    if(start < 0) {
        start+=this.length
        if (start < 0){
            start = 0
        }
    }

    if(end < 0) {
        end+=this.length
        if (end < 0){
            end = 0
        }
    }
    for(let i = start; i < end; i++){
        result.push(this[i]);
    }
    return result;
}



// 7 - splice
Array.prototype.mySplice = function (start, deleteCount, ...args) {
    //const removedEle = [];

    // ensure start is whithin bound
    if(start < 0) {
        start+=this.length
        if (start < 0){
            start = 0
        }
    }

    if(start > this.length){
        start = this.length;
    }

    // ensure delete count is whithin bound
    if (deleteCount === undefined) {
        deleteCount = this.length - start;
    } else {
        deleteCount = Math.min(deleteCount, this.length - start);
    }
 
    // left, right, and deleted array
    const left = this.slice(0, start);
    const right = this.slice(start + deleteCount);
    const removedEle = this.slice(start, start + deleteCount);

    this.length = 0;

    const newArray = left.concat(args, right);
    for (let i = 0; i < newArray.length; i++) {
        this[i] = newArray[i];
    }
    
    return removedEle;
}

// * filter, map, includes, indexOf, reduce, slice, splice
// test
const arr1 = [9, 22, 1, 2, 3, 4, 5];
const filterRes =arr1.myFilter((x) => x % 2 === 0);
console.log("filter: " + filterRes);

const mapRes = arr1.myMap((x) => x * 2);
console.log("map: " + mapRes);

const includesRes = arr1.myIncludes(1);
console.log("includes: " + includesRes);

const indexRes = arr1.myIndexOf(1);
console.log("indexOf: " + indexRes);

const reduceRes = arr1.myReduce((acc, x) => acc + x, 0);
console.log("myReduce: " + reduceRes);

const sliceRes = arr1.mySlice(2);
console.log("sliceRes: " + sliceRes);
console.log("arr1 : " + arr1);

const spliceRes = arr1.mySplice(1, 2, 6, 7, 8);
console.log("spliceRes: " + spliceRes);
console.log("arr1: " + arr1);