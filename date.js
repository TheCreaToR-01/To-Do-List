exports.getDate = function(){
    const date = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-IN', options)
}