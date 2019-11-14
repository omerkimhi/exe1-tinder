

$(document).ready(function () {

    $("#searchBtn").click(function () {
        if (CheckAttr() == true) {
            if ($("#male").is(':checked')) {
                rules.gender = "Male";

            }
            else {
                rules.gender = ("Female");
            }



            rules.minAge = $("#minAge").val();
            rules.maxAge = $("#maxAge").val();
            localStorage["rules"] = JSON.stringify(rules);
            window.location.href = "feed.html";
        }
    });




    function CheckAttr() {
        if (!$("#male").is(':checked') & !$("#female").is(':checked')) {
            alert("Select wanted gender!");
            return false;
        }

        if (!$.isNumeric($("#minAge").val()) || !$.isNumeric($("#maxAge").val())) {
            alert("Insert only numbers as ages!");
            return false;
        }

        if ($("#minAge").val() > $("#maxAge").val()) {
            alert("Minimum age should be bigger than Maximum age!");
            return false;
        }

        return true;

    }

});




class Profile {
    constructor(id, name, gender, age, height, city, image, premium) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.city = city;
        this.image = image;
        this.premium = premium;

    }

    Render() {
        return "<p>Name: " + this.name + "</br>Age:" + this.age + "</br>Height: " + this.height + "</br>From: " + this.city + "</p>"
    }
}

class Premium extends Profile {
    constructor(id, name, gender, age, height, city, image, premium, hobbies) {
        super(id, name, gender, age, height, city, image, premium);
        this.hobbies = hobbies;


    }
    Render() {
        return super.Render() + "<p>Hobbies:" + this.hobbies + "</p>";
    }

}

class MainApp {
    _proArr = [];
    get proArr() {
        return this._proArr;
    }
    set proArr(value) {
        this._proArr = value;
    }


    constructor(users) {

        for (let i = 0; i < users.length; i++) {
            if (users[i].premium == false) {
                this.proArr.push(new Profile(users[i].id, users[i].name, users[i].gender, users[i].age, users[i].height, users[i].city, users[i].image, users[i].premium));
            }
            else {
                this.proArr.push(new Premium(users[i].id, users[i].name, users[i].gender, users[i].age, users[i].height, users[i].city, users[i].image, users[i].premium, users[i].hobbies));
            }
        }
    }

    filterArr(rules) {

        var prof = [];
        for (let i = 0; i < this.proArr.length; i++) {

            if (this.proArr[i].age <= rules.maxAge && this.proArr[i].age >= rules.minAge && this.proArr[i].gender == rules.gender)
                prof.push(this.proArr[i]);

            //this.proArr.splice(i, 1);
        }

        this.proArr = prof;

    }

}




