const homeRoute = (req, res) => {
    res.render("index");
};

const mitchelleRoute = (req, res) => {
    res.send("Mitchelle Garrett");
};

const spencerRoute = (req, res) => {
    res.send("Spencer Garrett");
};

const dadeRoute = (req, res) => {
    res.send("Dade Garrett");
};

const testRoute = (req, res) => {
    res.render("test", {output: req.params.id});
};

const testSubmit = (req, res) => {
    const id = req.body.id;
    res.redirect("/test/" + id);
};

module.exports = {
    homeRoute,
    mitchelleRoute,
    spencerRoute,
    dadeRoute,
    testRoute,
    testSubmit
};