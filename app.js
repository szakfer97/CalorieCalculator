function radio_checked() {
    var set1 = new RadioGroup(document.getElementById("set1-of-buttons"));
    rg1.init();
    var set2 = new RadioGroup(document.getElementById("set2-of-buttons"));
    rg2.init();
}
function calsPerDay() {
    var age = parseInt(document.getElementById("age").value);
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (male.checked) result = 10 * weight + 6.25 * height - 5 * age + 5;
    else if (female.checked) result = 10 * weight + 6.25 * height - 5 * age - 161;
    activityLevel(result);
}
function activityLevel(result) {
    var activity1 = document.getElementById("activity1");
    var activity2 = document.getElementById("activity2");
    var activity3 = document.getElementById("activity3");
    var activity4 = document.getElementById("activity4");
    var activity5 = document.getElementById("activity5");
    if (activity1.selected) result *= 1.2;
    else if (activity2.selected) result *= 1.375;
    else if (activity3.selected) result *= 1.55;
    else if (activity4.selected) result *= 1.725;
    else if (activity5.selected) result *= 1.9;
    goal_checked(result);
}
function goal_checked(result) {
    var fat_loss = document.getElementById("fat_loss");
    var muscle_gain = document.getElementById("muscle_gain");
    if (fat_loss.selected) result *= 0.75;
    else if (muscle_gain.selected) result *= 1.25;
    if (
        document.getElementById("age").value == 0 ||
        document.getElementById("age").value == "" ||
        document.getElementById("height").value == 0 ||
        document.getElementById("height").value == "" ||
        document.getElementById("weight").value == 0 ||
        document.getElementById("weight").value == ""
    )
        document.getElementById("output_result1").innerHTML =
            "All fields are required.";
    else {
        if (
            !document.getElementById("age").value.match(/^\d*[1-9]\d*$/) ||
            !document.getElementById("height").value.match(/^\d*[1-9]\d*$/) ||
            !document.getElementById("weight").value.match(/^\d*[1-9]\d*$/)
        )
            document.getElementById("output_result1").innerHTML =
                "All fields requires positive numbers.";
        else {
            document.getElementById("output_result1").innerHTML = "You calorie intake: \n " + Math.round(result) + " calories";
        }
    }
}