const vierNullVier = (req, res, next) => {
    res.status(404);
    res.render('404', {pageTitle: "404: Dance, Cocaine, LSD, XTC💊, Chooms!"})
}

export { vierNullVier };