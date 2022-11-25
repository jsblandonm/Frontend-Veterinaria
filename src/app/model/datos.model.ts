export class ModelDatos {
    id?: string;
    nombre?: string;
    correo?: string;
    rol?: string;
}

export class ModelUser {
    id?: string;
    nombre?: string;
    apellido?: string;
    identificacion?: string;
    correo?: string;
    telefono?: string;
    rol?: string
}

export class ModelPets {
    id?: string;
    nombre?: string;
    foto?: string;
    caracteristicas?: string;
    estado?: string;
    edad?: number;
    especie?: string;
    Raza?: string;
    comentario?: string;
    // usuarioId?: string;
    // planId?: string;
}

export class ModelPlan {
    id?: string;
    Tipodeplan?: string;
    fechaCreacion?: Date;
    nombre?: string;
    descripcion?: string;
    precio?: number;
}

export class ModelProductsService {
    id?: string;
    tipo?: string;
    nombre?: string;
    descripcion?: string;
    precio?: number;
}

export class ModelProsepcto {
    id?: string;
    nombre?: string;
    apellido?: string;
    correo?: string;
    telefono?: string;
    ciudad?: string;
    comentario?: string;
}

export class ModelSucursal {
    id?: string;
    departamento?: string;
    ciudad?: string;
    direccion?: string;
    telefono?: string;
    numeroempleados?: number;
    numerosede?: number;
}