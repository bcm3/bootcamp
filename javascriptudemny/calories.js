function inputCaloriesByDay(dia) {


    switch (dia) {
        case 'Lunes':
            return 3500;
            break;
        case 'Martes':
            return 1000;
            break;
        case 'Miercoles':
            return 1800;
            break;
        case 'Jueves':
            return 2300;
            break;
        case 'Viernes':
            return 1400;
            break;
        case 'Sabado':
            return 1500;
            break;
        case 'Domingo':
            return 1800;
            break;
        default:
            return 'dias NO validos';
    }

}

function getTotalCalories(){

    return inputCaloriesByDay('Lunes') + inputCaloriesByDay('Martes') +
    inputCaloriesByDay('Miercoles') +   inputCaloriesByDay('Jueves') +
    inputCaloriesByDay('Viernes') + inputCaloriesByDay('Sabado') + 
    inputCaloriesByDay('Domingo');

}


function getIdealCalories() {

    let caloriasIdealesDiarias = 2000;
    return caloriasIdealesDiarias * 7;

}

function calculateHealthPlan(){


    let caloriasActuales = getTotalCalories();
    let caloriasIdelas = getIdealCalories();

    if (caloriasActuales === caloriasIdelas) {
        return 'Estas bien!, no necesitas hacer nada , cuidate!';
      }
      if (caloriasActuales < caloriasIdelas) {
        return 'Tas gordu cebon necesitas quemar calorias!!!';
      } else {
       return 'Time for seconds!';
      }

}


console.log(calculateHealthPlan());