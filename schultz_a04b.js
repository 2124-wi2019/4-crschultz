/*Chris Schultz
schultz_a04b.js
Info 2124 WW
Thoendel
01-07-2020*/

//declare variables
const firstName = "Chris";  //3a, constant to hold my first name
const weight = "220.0";   //3b, constant to hold my weight as a string, with a decimal
const height = 72.0; //3c, constant to hold my height inches, as a float
const age = "37"; //3d, constant to hold my age as a string, no decimal
const marsGravity = 0.38; //3e, constant to hold Mars gravity (instructions don't specify but I assumed float)
const inchesToMeters = 2.54; //3f constant to hold inches to meters (instructions don't specify but I assumed float)

//block for block-scoped variables
{
    //declaring variables to satifsy add'l assignment requirements
    let ageInDays = Number(age) * 365; //4a, convert age to an integer, multiply by 365
    let ageInMarsYears = ageInDays / 687; //4b, convert age in days from last step by dividing by 687; result will still be an integer
    let weightOnMars = parseFloat(weight) * marsGravity; //4c, convert weight to float, multiply by mars Gravity

    let templateLiteral = `
    Hello there, ${ firstName }! On Earth you weigh ${ parseFloat(weight) } pounds. 
    But, since gravity is weaker on Mars, you would only weigh ${ String(weightOnMars) } pounds there!

    Neat huh? Want to know what else is neat?

    Mars takes longer to rotate around the Sun than does Earth. This means the Mars year is actually 
    longer than our "terran" year. So although you are ${ parseInt(age) } years old on Earth, you're
    only ${ ageInMarsYears.toFixed(2) } years old on Mars.

    Did you know, the European Space Agency requires potential astronauts to measure between 
    153 and 190 cm? Just in case you ever decide to move to Europe and want to be
    an astronaut, your height in metric is ${ String(height * inchesToMeters) } cm.
    `;//end declare template literal, req 5

    console.log(templateLiteral);

    /*Developer's note:
    req 7a is on lines 20 & 23; req 7b is on line 29; req 7c is on line 18
    req 7d is on lines 24 & 34. See below for more on 7d.
    I used String() on only numeric values, but not all numeric values, as allowed by req 5
    */

}//end block
//end program
