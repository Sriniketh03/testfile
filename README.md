# testfile
body {
    text-align: center;
    font-family: sans-serif;
}


.bg {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(212, 194, 194, 0.75),rgba(0, 0, 0, 0.75));
    background-size: cover;
    background-position: center;
}

h1 {
    color: #e67818;
}
.table{
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
    width: 300px;
    border-collapse: collapse;
    margin: 20px auto;
    border: 20px;
}
.cell {
    width: 100px;
    height: 100px;
    background-color: #ec9123;
    cursor: pointer;
}
.cell:hover{
    background-color: #ece2e2;
}
input {
    padding: 10px 20px;
    background-color: #f2640c;
    color: white;
    cursor: pointer;
}
input:hover {
    background-color: #f4e40e;
}
p{
    color: #f30d0daa;
}
h2{
    color: #f2640c;
}




.Tic{
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    color: #c8a61d;
    font-size: 50px;
    padding: 0 10px;
}
.Tic::before, .Tic::after{
    content: '';
    background: red;
    width: 0;
    height: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 20px;
    transition: width 0.2s;
}
.Tic::before{
    right: 100%;
}

.Tic::after{
    left: 100%;
}

.Tic:hover::before, .Tic:hover::after{
    width: 40%;
}


