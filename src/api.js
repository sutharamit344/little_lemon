const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date);

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push({time: i + ':00', booking:[]});
        }
        if(random() < 0.5) {
            result.push({time: i + ':30', booking:[]});
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

export {fetchAPI,submitAPI}