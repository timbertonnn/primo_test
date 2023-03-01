export function merge_test(collection1: number[], collection2: number[]): number[] {
  
  const merged: number[] = [];

  let i = 0;
  let j = 0;

  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] < collection2[j]) {
      if (!merged.includes(collection1[i])) {
        merged.push(collection1[i]);
      }
      i++;
    } else if (collection2[j] < collection1[i]) {
      if (!merged.includes(collection2[j])) {
        merged.push(collection2[j]);
      }
      j++;
    } else {
      if (!merged.includes(collection1[i])) {
        merged.push(collection1[i]);
      }
      i++;
      j++;
    }
  }

  while (i < collection1.length) {
    if (!merged.includes(collection1[i])) {
      merged.push(collection1[i]);
    }
    i++;
  }

  while (j < collection2.length) {
    if (!merged.includes(collection2[j])) {
      merged.push(collection2[j]);
    }
    j++;
  }
  console.log("length of merged: "+merged.length);
  for (let i = 0; i < merged.length - 1; i++) {
    for (let j = 0; j < merged.length - 1 - i; j++) {
      if (merged[j] > merged[j + 1]) {
        const temp = merged[j];
        merged[j] = merged[j + 1];
        merged[j + 1] = temp;
      }
    }
  }

  //console.log(merged);
  return merged;
}

//const resultArray = merge_test([2,1,8,4,0,5],[11,7,4,5,3,6,9,10]);
//console.log(resultArray);