let x_arr = [];
let zero_arr = ['0s'];
let flag = true;


// msg_div.innerHTML = "hello"
function myfun(event) {
    console.log(msg_div);
  if (flag) {
    event.target.innerHTML = "X";
    x_arr.push(event.target.id);
    player_x(x_arr);
    flag = !flag;
  }
  
  // for y array:
  else {
    event.target.innerHTML = "0";
    zero_arr.push(event.target.id);
    player_zero(zero_arr);
    flag = !flag;
  }
}
let msg_div = document.getElementById('msg');

function player_x(ar1){
     let count1 = 0,count2 = 0,count3 = 0, count4 = 0,count5 = 0,count6 = 0,count7 = 0,count8 = 0;
      ar1.forEach((val)=>{
         if(val === '1' || val === '5' || val === '9'){
              count1++;
              
         }
         if(val === '3' || val === '5' || val === '7'){
            count2++;
         }
         if(val === '3' || val === '6' || val === '9'){
            count3++;
         }
         if(val === '2' || val === '5' || val === '8'){
            count4++;
         }
         if(val === '1' || val === '4' || val === '7'){
            count5++;
         }
         if(val === '7' || val === '8' || val === '9'){
            count6++;
         }

         if(val === '4' || val === '5' || val === '6'){
            count7++;
         }
         if(val === '1' || val === '2' || val === '3'){
            count8++;
         }
      })

      if(count1 == '3' || count2 == '3' || count3 == '3' || count4 == '3' || count5 == '3' || count6 == '3'|| count7 == '3' || count8 == '3' ){
        let head = document.createElement('h1');
        msg_div.appendChild(head);

        // alert('player X won congratulations..')
        // msg_div.innerHTML = "player X won....."
      }
    
     
 }

 function  player_zero(ar2){
    let count1 = 0,count2 = 0,count3 = 0, count4 = 0,count5 = 0,count6 = 0,count7 = 0,count8 = 0;
      ar2.forEach((val)=>{
         if(val === '1' || val === '5' || val === '9'){
              count1++;
              
         }
         if(val === '3' || val === '5' || val === '7'){
            count2++;
         }
         if(val === '3' || val === '6' || val === '9'){
            count3++;
         }
         if(val === '2' || val === '5' || val === '8'){
            count4++;
         }
         if(val === '1' || val === '4' || val === '7'){
            count5++;
         }
         if(val === '7' || val === '8' || val === '9'){
            count6++;
         }

         if(val === '4' || val === '5' || val === '6'){
            count7++;
         }
         if(val === '1' || val === '2' || val === '3'){
            count8++;
         }
      })

      if(count1 == '3' || count2 == '3' || count3 == '3' || count4 == '3' || count5 == '3' || count6 == '3'|| count7 == '3' || count8 == '3' ){
        // alert('player Zero wale won congratulations..')
        // msg_div.innerHTML = "player Zero won.....";
      }
    
 }

