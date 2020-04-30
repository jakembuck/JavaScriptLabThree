let scores = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    }]

const addScore = (array, name, score, date) => {
    array.push({ name: name, score: score, date: date, passed: score >= 60 })
}
const deleteScoreByIndex = (array, index) => {
    array.splice(index, 1)
}
const deleteScoreByName = (array, name) => {
    let index = array.findIndex(person => {
        return person.name === name
    });
    array.splice(index, 1)
}
const editScore = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
}
const findScoreByName = (array, name) => {
    return array.find(person => {
        return person.name === name;
    })
}
const findLowestScore = (array) => {
    let lowestScore = array[0];
    array.forEach(person => {
        if (person.score < lowestScore.score) {
            lowestScore = person;
        }
    })
    return lowestScore.score;
}
const findAverageQuizScore = (array) => {
    let total = 0
    for (let person of array) {
        total += person.score;
    }
    return total / array.length
}
const filterScores = (array, property, value) => {
    return array.filter(person => {
        return person[property] === value;
    })
};
const sortScoresAsc = (array) => {
    return array.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return 0;
        }
    })
}