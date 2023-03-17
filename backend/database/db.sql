CREATE DATABASE ceibadatabase;
DROP DATABASE ceibadatabase;
DROP TABLE producto_categoria;

USE ceibadatabase;

CREATE TABLE categoria (
	id_categoria INT NOT NULL AUTO_INCREMENT,
    categoria VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    PRIMARY KEY(id_categoria)
);

CREATE TABLE producto (
	id_producto INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    fecha_ingreso DATE NOT NULL,
    proveedor VARCHAR(50) NOT NULL,
    nit_proveedor VARCHAR(30) NOT NULL,
    cantidad INT NOT NULL,
    existencia INT NOT NULL,
    precio_costo DECIMAL(10, 2) NOT NULL,
    precio_venta DECIMAL(10, 2) NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    PRIMARY KEY(id_producto)
);

CREATE TABLE producto_categoria (
    id_producto INT NOT NULL,
    id_categoria INT NOT NULL,
    nombre_categoria VARCHAR(50) DEFAULT NULL,
    nombre_producto VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY(id_producto, id_categoria),
    FOREIGN KEY(id_producto) REFERENCES producto(id_producto),
    FOREIGN KEY(id_categoria) REFERENCES categoria(id_categoria)
);

SHOW TABLES;

INSERT INTO categoria (categoria, descripcion)
VALUES 
('Juguetes', 'Lo ultimo en divercion'),
('Ropa', 'Lo ultimo en moda'),
('Tecnologia', 'Lo ultimo en tecnologia');

SELECT * FROM categoria;

INSERT INTO producto (nombre, descripcion, fecha_ingreso, proveedor, nit_proveedor, cantidad, existencia, precio_costo, precio_venta)
VALUES
("Movil", "Ideal para uso personal y juegos", "2023-03-17", "Samsung", "88774466", 25, 18, 2500.99, 2999.99),
("Ps4", "Ideal para toda la familia", "2023-04-17", "Sony", "55448899", 30, 10, 3500, 4100);

SELECT * FROM producto;

SET @id_producto = LAST_INSERT_ID();

INSERT INTO producto_categoria(id_producto, id_categoria)
VALUES (@id_producto, 1), (@id_producto, 3);

SELECT * FROM producto_categoria;

INSERT INTO producto_categoria(id_producto, id_categoria)
VALUES (1, 1), (1, 3), (2, 1), (2, 3);

UPDATE producto_categoria pc
JOIN producto p ON pc.id_producto = p.id_producto
JOIN categoria c ON pc.id_categoria = c.id_categoria
SET pc.nombre_producto = p.nombre,
    pc.nombre_categoria = c.categoria;
    
SELECT * FROM producto_categoria;
