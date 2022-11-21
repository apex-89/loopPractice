// write a for loop that logs 0-15
for (i=0; i<=15; i++){
    console.log(i);
}

// write a for loop that counts from 15-0
for(i=15; i>=0; i--){
    console.log(i);
}

// make variable laps=0, write a for loop that logs ("that's another lap!") and adds 1 to the laps variable.
let laps=0;
for(i=1; i<=8; i++){
    console.log("That's another lap!");
    laps++;
}console.log(laps, "laps ran");

// make variable age. Make a loop from 0-100. In every loop check if i==age, if so log something, else say "age doesn't match".
let age=33;
for(i=0; i<=100; i++){
    if(age==i){
        console.log("Age verified:", age);
    }else{
        console.log("Age doesn't match.");
    }
}

// write a loop that logs all even numbers from 0-700.
for(i=0; i<=700; i++){
    if(i%2==0 && i!=0){
        console.log(i);
    }
}

// write a loop that logs all odd numbers from 0-700.
for(i=0; i<=700; i++){
    if(i%2!==0 && i!=0){
        console.log(i);
    }
}

// write a loop with some "if else" statements. The loop should start at 1900 and go to 1949 and log when things were invented.
for(i=1900; i<=1949; i++){
    if(i==1900){
        console.log("It is 1900- the zepplin is invented!");
    }else if(i==1902){
        console.log("It is 1902- the teddy bear is invented!");
    }else if(i==1910){
        console.log("It is 1910- the talking motion picture is invented!");
    }else if(i==1913){
        console.log("It is 1913- the bra is invented!");
    }else if(i==1918){
        console.log("It is 1918- the fortuen cookie is invented!");
    }else if(i==1923){
        console.log("It is 1923- the traffic signal is invented!");
    }else if(i==1935){
        console.log("It is 1935- the radar is invented!");
    }else if(i==1938){
        console.log("It is 1938- the ballpoint pen is invented!");
    }else if(i==1943){
        console.log("It is 1943- the slinky is invented!");
    }
}