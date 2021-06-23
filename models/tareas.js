const Tarea = require('./tarea');

/**
 *
 *  _listado: {
 *         'uuid-1232-asd-12-asdasd: {id: 1, desc: 'asdf', CompletadoEn: '12312312' '
 *  }
 */

class Tareas {
	_listado = {};

	constructor() {
		this._listado = {};
	}

	crearTarea(desc = '') {
		const tarea = new Tarea(desc);
		this._listado[tarea.id] = tarea;
	}
}

module.exports = Tareas;
