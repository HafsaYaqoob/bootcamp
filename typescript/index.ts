console.log("hello ");

    let array:number[] = [1,2,3,4,5];
    function search(){
    class A{
        method1(){
         let  elem = document.querySelector('#search') as HTMLInputElement;
          let  inputValue:any  = elem.value 
        //   inputValue as number;
        let found = false;
    for(let ii = 0; ii<= array.length; ii++){
       if(inputValue == array[ii]){
           found = true;
           break;
       }
    }
    if(found){
       alert("ITS MATCHED");
    }else{
       alert("ITS NOT MATCHED");
    }

        }
    }
    let obj = new A();
    obj.method1();
    }
  //  add element at first
  function addFirst(){
         
       class B{
       method2(){
    
       let elem = document.querySelector('#element') as HTMLInputElement;
        let inputValue:any = elem.value;
        inputValue = parseInt(inputValue);
        if (!isNaN(inputValue)) {
        array.unshift(inputValue);
        }
    }
   }
   let obj2 = new B();
   obj2.method2();
   let result = document.getElementById("output") as HTMLDivElement ;
     result.innerHTML = array.join(', ');
     
    

  }

    //add element at last
    function addLast(){
     class C {
         method3(){
             let elem = document.querySelector('#element')as HTMLInputElement;
             let inputValue:any = elem.value;
              inputValue = parseInt(inputValue);
              if (!isNaN(inputValue)) {
              array.push(inputValue);
              }
              
         }
     }
     let obj3= new C();
     obj3.method3();
     let result = document.getElementById("output") as HTMLDivElement ;
     result.textContent = array.join(', ');
   
    } 
// function input(){
//     let elem = document.querySelector('#element')as HTMLInputElement;
//              let inputValue:any = elem.value;
//               inputValue = parseInt(inputValue);
// }

// remove from 0 index//
    function removeFirst(){
        class D{
           method4(){     
                array.shift();
            }
        }
        let objFirst = new D();
        objFirst.method4();
        let result = document.getElementById("output") as HTMLDivElement ;
              result.textContent = array.join(', ');
            
    }

    // remove from last index//
    function removeLast(){
        class E{
            method5(){
                
                array.pop()
            }
        }
        let objLast = new E();
    objLast.method5();
        let result = document.getElementById("output") as HTMLDivElement ;
              result.textContent = array.join(', ');
        
    }

    // sorting of array //
    function sort(){
        class F{
            sorting(){
                array.sort();
            }
        }
        let objSort = new F();
    objSort.sorting();
        let result = document.getElementById("output") as HTMLDivElement ;
              result.textContent = array.join(', ');
        
    }

    // assorting of array //
    function reverse(){
        class G{
            opposite(){
                array.reverse();
            }
        }
        let objReverse = new G();
    objReverse.opposite();
        let result = document.getElementById("output") as HTMLDivElement ;
              result.textContent = array.join(', ');
        
    }