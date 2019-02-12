var Student = function(name, scores) {
    this.name = name;
    this.scores = scores;
};
Student.prototype.getTotalScore = function() {
    var total = 0;
    for( var index in this.scores ) {
        total += this.scores[index];
    }
    return total;
};

var data = [
    new Student("Micky",[80,85,92]),
    new Student("Donald",[88,96,80]),
    new Student("Anna",[90,92,82]),
    new Student("Elsa",[95,94,90]),
];

console.log("名前:合計点数");
for (var index in data) {
    console.log(data[index].name + ":" + data[index].getTotalScore());
}
