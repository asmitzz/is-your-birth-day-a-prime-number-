var readlineSync = require('readline-sync');
var chalk = require('chalk');

var username = readlineSync.question(chalk.yellow('Enter your name : '));

var loop = true;

while(loop){
  var DOB = readlineSync.question(chalk.yellow('\nEnter your date of birth in this format '+chalk.yellowBright('( DD/MM ) : ')  ));

  var date = parseInt(DOB.slice(0,2));
  var mon = parseInt(DOB.slice(3,5));

  if(date <= 31 && mon <= 12){
     
          loop = false;
          var i = 2;
          var prime = 0;
          while( i <= date/2 ){
            if( date % i == 0 ){
               prime++;
            }
            i++;
          }

          if( prime == 0 ){
             console.log(chalk.green('\nCongratulations, Your birth day is a prime number'));
          }
          else{
            console.log(chalk.red('\nSorry')+chalk.red(',Your birth day is not a prime number'));
          }
           
       }
       
  else{
       if( (date > 31 && date.toString().length <= 2 )){
          console.log(chalk.red('Invalid date ! please input valid date'));
       }
       else if( (mon > 12 && mon.toString().length <=2 )  ){
          console.log(chalk.red('Invalid month ! please input valid month'));
       }
       else if(isNaN(date)){
          console.log(chalk.red('Invalid date ! please input valid date'));
       }
       else if(isNaN(mon)){
          console.log(chalk.red('Invalid month ! please input valid month'));
       }
       else{
         console.log(chalk.red('Invalid DOB format ! please input DOB in this format ( DD/MM/YYYY )'))
       }
    }
  }
   
   
   


