const movies = [
    {
        _id: 1, 
        title: "The avengers", 
        genre: {
            _id: 11, 
            name: 'action'
        }, 
        numberInStock: 10, 
        movieRate: 5, 
        liked: true
    }, 
    {
        _id: 2, 
        title: "Lacasa de papel", 
        genre: {
            _id: 22, 
            name: 'action'
        }, 
        numberInStock: 3, 
        movieRate: 7.5, 
        liked: true
    }, 
    {
        _id: 3, 
        title: "Amour Amanatane", 
        genre: {
            _id: 33, 
            name: 'Romantic'
        }, 
        numberInStock: 3, 
        movieRate: 3, 
        liked: true
    }, 
    {
        _id: 4, 
        title: "La force du coeur", 
        genre: {
            _id: 44, 
            name: 'Romantic'
        }, 
        numberInStock: 7, 
        movieRate: 2.3
    },
    {
        _id: 5, 
        title: "La reine", 
        genre: {
            _id: 55, 
            name: 'Comedy'
        }, 
        numberInStock: 10, 
        movieRate: 10
    }
]

module.exports = movies