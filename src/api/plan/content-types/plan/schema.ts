
export default {
  info: {
    singularName: 'plan',
    pluralName: 'planes',
    displayName: 'Plan',
    description: 'Modelo de planes de usuarios',
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
    usuario: {
      type: 'relation',
      relation: 'manyToOne',
      target: 'api::usuario.usuario',
      inversedBy: 'planes',
      required: true,
    },
    actividades: {
      type: 'relation',
      relation: 'manyToMany',
      target: 'api::actividad.actividad',
      mappedBy: 'planes',
    },
  },
};
