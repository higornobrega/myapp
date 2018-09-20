module.exports = (application) => {
    application.get('/' , (req , resp) => {
        application.src.controllers.index.home(application, req , resp);
    })
}