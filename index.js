let año = prompt("Ingrese el año")
let bi = "es biciesto"
let s = "Si"
let n = "No"
if(año % 4 == 0){
  if(año % 100 == 0){
    if(año % 400 == 0){
    alert(`${s} ${bi}`)
    }
    else{
      alert(`${n} ${bi}`)
    }
  }
  else{
    alert(`${s} ${bi}`)
  }
}
else{
  alert(`${n} ${bi}`)
}