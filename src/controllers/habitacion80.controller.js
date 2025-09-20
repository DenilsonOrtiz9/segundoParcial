let habitaciones = [
  { id: 1, noHabitacion: "Habitación 1" },
  { id: 2, noHabitacion: "Habitación 2" },
];

const index = (req, res) => {
    res.render('hbtcns/index80', { habitaciones });
};

const show = (req, res) => {
	const {id} = req.params;
	const habitacion = habitaciones.find(habitaciones => habitaciones.id === parseInt(id));
	if (!habitacion){
		res.status(404).send('Habitación no encontrada');
	} else {
	res.render('hbtcns/show80', { habitacion });
	}
};

const create = (req, res) => {
    res.render('hbtcns/create80');
};

const store = (req, res) => {
    const { habitacion } = req.body;
    const nuevaHabitacion = {
        id: habitaciones.length + 1,
        noHabitacion: habitacion
    };
    habitaciones.push(nuevaHabitacion);
    res.redirect('/hbtcns');
};

module.exports = {
    index,
    show,
    create,
    store
};
