
export default {
  info: {
    singularName: 'actividad',
    pluralName: 'actividades',
    displayName: 'Actividad',
    description: 'Modelo de actividades',
  },
  options: {
    draftAndPublish: false,
  },
  attributes: {
    nombre: {
      type: 'string',
      required: true,
    },
    descripcion: {
      type: 'text',
    },
    ubicacion: {
      type: 'string',
    },
    estrellas: {
      type: 'integer',
      min: 0,
      max: 5,
    },
    planes: {
      type: 'relation',
      relation: 'manyToMany',
      target: 'api::plan.plan',
      inversedBy: 'actividades',
    },
  },
};
