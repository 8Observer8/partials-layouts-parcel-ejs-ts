// https://www.raddy.dev/blog/nodejs-express-layouts-and-partials/
// https://www.anycodings.com/1questions/1514417/getting-error-title-not-defined-on-ejs-template-engine-with-express

import * as express from "express";
import * as expressLayouts from "express-ejs-layouts";
import * as http from "http";
import * as path from "path";

const app = express();
app.use(express.static(path.join(process.cwd(), "public")));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");

app.use("/contact", (request, response) =>
{
    response.render("contact", {
        title: "My Contacts",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});

app.use("/", (request, response) =>
{
    response.render("home", { title: "Home" });
});

const port = process.env.PORT || 3000;
const httpServer = http.createServer(app);
httpServer.listen(port, () => console.log("Listening at port:" + port));
