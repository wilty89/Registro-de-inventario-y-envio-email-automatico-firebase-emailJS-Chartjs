// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCP3gWSCtI4aCRvQ6WHG13CTEnO-pAvl4Q",
  authDomain: "banco-de-prueba-5005d.firebaseapp.com",
  databaseURL: "https://banco-de-prueba-5005d.firebaseio.com",
  projectId: "banco-de-prueba-5005d",
  storageBucket: "banco-de-prueba-5005d.appspot.com",
  messagingSenderId: "51822716336",
  appId: "1:51822716336:web:b9638d804f41f164d66275",
  measurementId: "G-YXCN833T83"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database().ref("messages/");
database.orderByChild("value").on("child_added", function (data) {
  //console.log(data.val().cantidad);
});
database.once("value", function (snapshot) {
  //console.log(snapshot.val());
});
document.getElementById("formulario").addEventListener("submit", GuardarDatos);

function GuardarDatos(e) {
  e.preventDefault();

  let compania = document.getElementById("compania").value;
  let cantidad = document.getElementById("cantidad").value;
  let tipo = document.getElementById("tipo").value;
  let Aquien = document.getElementById("quien").value;
  let detalle = document.getElementById("detalle").value;
  let NuevoDespacho = database.push();

  NuevoDespacho.set({
    compania: compania,
    cantidad: Number(cantidad),
    tipo: tipo,
    Aquien: Aquien,
    detalle: detalle,
    ahora: new Date().toLocaleString()
  });

  var templateParams = {
    notes: "Agenda despachada",
    name: compania,
    cantidad: Number(cantidad),
    Aquien: Aquien,
    detalle: detalle,
    ahora: new Date().toLocaleString()
  };

  emailjs.send("service_iez1lea", "template_li36118", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

function readUserData() {
  database.on("value", function (snapshot) {
    // llamado a la funcion dibujar
    refreshUI(snapshot.val());
  });
}

function refreshUI(users) {
  var nombre = [];
  var stock = [];
  var tBody = "";

  Object.keys(users).forEach(function (key) {
    var tRow = `
      <tr>
        <th scope="row">${key}</th>
        <td>${users[key].compania}</td>
        <td>${users[key].cantidad}</td>
        <td>${users[key].tipo}</td>
        <td>${users[key].Aquien}</td>
        <td>${users[key].ahora}</td>
      </tr>
    `;
    tBody += tRow;
    //console.log(users[key].cantidad);

    nombre.push(users[key].tipo);
    stock.push(users[key].cantidad);
    //console.log(astra.reduce((a, b)=> a + b));
  });
  console.log("Cantidad gps:" + " " + stock.reduce((a, b) => a + b));
  console.log("Cantidad despachos" + " " + nombre.length);
  //console.log(nombre);
  // tBody debe ser agregado al html
  document.getElementById("usersList").innerHTML = tBody;

  var eyf = 186;
  var culo = [eyf, 114, 106, 106, 107, 111, 133, 221, 783, 2478];

  document.getElementById(
    "chart"
  ).innerHTML = `<canvas id="myChart" width="445" height="385"></canvas>`;
  var ctx = document.getElementById("myChart").getContext("2d");
  var stackedLine = new Chart(ctx, {
    type: "line",
    data: {
      labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
      datasets: [
        {
          data: culo,
          label: "despachos",
          borderColor: "#3e95cd",
          fill: false
        },
        {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: "devuetos",
          borderColor: "#8e5ea2",
          fill: false
        },

        {
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: "Otros",
          borderColor: "#e8c3b9",
          fill: false
        },
        {
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          label: "Otros",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Total de despachos"
      }
    }
  });

  document.getElementById(
    "chart2"
  ).innerHTML = `<canvas id="myChart2" width="445" height="385"></canvas>`;
  var ctx = document.getElementById("myChart2").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["calamp", "benway", "pointer", "queclink", "C-32bits"],
      datasets: [
        {
          label: "# de dispocitivos",
          data: [11, 19, 3, 5, 2],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  var color = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)"
  ];
  var bordercolor = [
    "rgba(255,99,132,1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)"
  ];
  var chartdata = {
    labels: nombre,
    datasets: [
      {
        label: nombre,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 2,
        hoverBackgroundColor: color,
        hoverBorderColor: bordercolor,
        data: stock
      }
    ]
  };

  document.getElementById(
    "chart3"
  ).innerHTML = `<canvas id="myChart3" width="445" height="385"></canvas>`;
  var ctx4 = document.getElementById("myChart3").getContext("2d");
  var grafico = new Chart(ctx4, {
    type: "doughnut",
    data: chartdata,
    options: {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}

readUserData();

///
