const data1 = new Date();
const data2 = new Date(`March 17 2022 14:52`);
const data3 = new Date(2022,02,17,14,52);
array = [data1,data2,data3]
for(let i=0; i<3; i++){
    console.log(array[i])
}