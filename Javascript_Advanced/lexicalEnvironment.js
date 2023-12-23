//Lexical Environment is function that as execution context which an function is surrounded....




function car(){
    let carPrice=10000;

    function Mileage(){
       let km=10;
       console.log(km+"kms"+"  "+carPrice +"Rs");
    }
    Mileage();
}


car();
