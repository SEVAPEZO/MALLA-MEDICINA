body {
  font-family: sans-serif;
  background: #f0f4f8;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
}

.malla {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
}

.semestre {
  flex: 0 0 auto;
  border: 2px solid #ccc;
  padding: 10px;
  background: #fff;
  min-width: 200px;
  border-radius: 10px;
}

.ramo {
  background-color: #b3e5fc; /* celeste */
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;
}

.ramo.aprobado {
  background-color: #0288d1; /* celeste más oscuro */
  color: white;
  text-decoration: line-through;
}

.ramo.bloqueado {
  background-color: #ccc; /* gris */
  color: #666;
  cursor: not-allowed;
}

