const express = require("express");

const app = express();

app.use(express.json());

// Install request by running "npm install --save request"
var request = require("request");

const configureOptions = cnum => {
  let myOptions = {
    method: "GET",
    url: `https://w3.api.ibm.com/common/run/bluepages/cnum/${cnum}/manager`,
    headers: {
      accept: "application/json",
      "x-ibm-client-id": "f1ce44da-1cc2-4771-9bd8-5547a23ecf9a"
    }
  };
  return myOptions;
};
//console.log(configureOptions("123781"));

var options = {
  method: "GET",
  url: "https://w3.api.ibm.com/common/run/bluepages/cnum/123781631/manager",
  headers: {
    accept: "application/json",
    "x-ibm-client-id": "f1ce44da-1cc2-4771-9bd8-5547a23ecf9a"
  }
};

// request(options, function(error, response, body) {
//   if (error) return console.error("Failed: %s", error.message);

//   console.log(body.search.return);
// });

app.get("/", (req, res) => {
  var arr = ["123781631", "123781631"];

  arr.forEach(element => {});

  request(configureOptions("123781631"), function(error, response, body) {
    if (error) return console.error("Failed: %s", error.message);

    const parsed = JSON.parse(body);
    //console.log(parsed.search.entry[0].attribute[0].value[0]);

    var a = parsed.search.entry[0].attribute[0].value;
    var b = a[0].split(",");
    var c = b[0].split("=");
    console.log(c[1]);

    res.json({
      contractor: "123",
      manager: c[1]
    });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
