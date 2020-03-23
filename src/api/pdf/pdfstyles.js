export default styles =
  `<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
h4,
h5 {
  font-weight: bold;
  margin: 0
}

p,
a,
label {
  font-weight: lighter;
}

.container {
  padding: 20px;
}

.brand {
  text-align: center;
  margin-bottom: 20px;
  color: #fc3c3d;
  display: flex;
  justify-content: center;
}

.brand div {
  color: #004e69
}

.red {
  background-color: #fc3c3d !important;
  color: white;
}

.card {
  border-radius: 0.35rem;
  box-shadow: 0 0 20px 0px #dadada;
  background-color: white;
  width: 100%;
}

.card-body {
  padding: 10px;
}

.title {
  margin: 0em;
  text-align: center;
  margin-bottom: 5px;
}

table {
  border-collapse: unset;
  border-spacing: 0em;
  border-radius: 0.35rem;
  background-color: #f6f6f6;
}

table tr {
  color: black;
}

table tr td {
  font-size: 12px;
  width: 100%;
  padding: 5px;
  font-weight: 600;
}

td label {
  font-weight: 600;
  font-size: 10px;
  color: grey;
  text-transform: uppercase;
}

tr.totalmonto {
  background-color: #ebebeb;
}

tr.metodopago {
  background-color: white;
}

tr.metodopago td {
  vertical-align: bottom;
}

tr.metodopago p {
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
}

table.resum {
  background-color: white;


}

table.resum td {
  border-bottom: 2px solid #f6f6f6;
}

table.resum td {
  text-align: start;
  color: gray;
  font-weight: lighter;
}

table.resum td:first-child {
  font-weight: 600;
}

.total {
  margin-bottom: 0 !important;
  background-color: white;
  color: black;
  border-bottom-left-radius: 0.35rem;
  border-bottom-right-radius: 0.35rem;
}

.totalpay {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.totalpay label {
  font-size: 10px;
  color: grey;
  text-transform: uppercase;
  font-weight: bold;
}

.totalpay p {
  font-size: 12px;
}

.user_data {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user_data label {
  font-size: 10px;
  color: gray;
  margin: 0;
  color: grey;
}

.user_data p {
  font-size: 12px;
  margin: 0;
  font-weight: bold;
}

.end {
  font-size: 12px;
  color: gray;
  text-align: center;
}

.end a {
  color: gray !important;
  font-weight: bold;
  text-decoration: none;
}
</style>`